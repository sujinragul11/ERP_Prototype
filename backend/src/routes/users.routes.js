const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const { authenticateToken, requireRoles } = require('../middleware/auth');

// GET /api/users - List users (optional filter by ?type=employee / client / etc.)
router.get('/', async (req, res) => {
  try {
    const { type, companyId, search } = req.query;

    const where = {};
    if (type) where.type = type;
    if (companyId) where.companyId = parseInt(companyId);
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } }
      ];
    }

    const users = await prisma.user.findMany({
      where,
      include: {
        roles: true,
        company: true,
        department: true
      },
      orderBy: { id: 'asc' }
    });

    // Strip passwords
    const sanitized = users.map(({ password, ...u }) => u);
    res.json({ success: true, count: sanitized.length, data: sanitized });
  } catch (err) {
    console.error('Fetch users error:', err);
    res.status(500).json({ success: false, message: 'Failed to retrieve users' });
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        roles: true,
        company: true,
        department: true,
        candidateProfile: true,
        freelancerProfile: true,
        influencerProfile: true,
        projectsAssigned: { include: { project: true } },
        tasksAssigned: true
      }
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const { password, ...userSafe } = user;
    res.json({ success: true, data: userSafe });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve user details' });
  }
});

// POST /api/users - Create new user (employee, client, etc.)
router.post('/', async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      name,
      email,
      personalEmail,
      companyEmail,
      phone,
      type,
      role,
      companyId,
      entity,
      department,
      departmentId,
      payroll,
      qualification,
      college,
      location,
      address,
      regNo,
      gender,
      dob,
      bloodGroup,
      maritalStatus,
      password
    } = req.body;

    const fullName = name || `${firstName || ''} ${lastName || ''}`.trim() || 'New User';
    const rawEmail = email || personalEmail || companyEmail;
    const cleanEmail = rawEmail && String(rawEmail).trim().length > 0 ? String(rawEmail).trim() : null;
    const cleanPhone = phone && String(phone).trim().length > 0 ? String(phone).trim() : null;
    const cleanUsername = username || (cleanEmail ? cleanEmail.split('@')[0] : `${(firstName || 'user').toLowerCase()}_${Date.now().toString().slice(-4)}`);

    // Resolve department if name provided
    let resolvedDeptId = departmentId ? parseInt(departmentId) : undefined;
    if (!resolvedDeptId && department) {
      const d = await prisma.department.findFirst({
        where: { name: { contains: department, mode: 'insensitive' } }
      });
      if (d) resolvedDeptId = d.id;
    }

    // Resolve company if entity provided
    let resolvedCompId = companyId ? parseInt(companyId) : 1;
    if (entity) {
      const c = await prisma.company.findFirst({
        where: { name: { contains: entity, mode: 'insensitive' } }
      });
      if (c) resolvedCompId = c.id;
    }

    const hashedPassword = password ? await bcrypt.hash(password, 10) : await bcrypt.hash('pass', 10);

    const newUser = await prisma.user.create({
      data: {
        username: cleanUsername,
        firstName: firstName || fullName.split(' ')[0],
        lastName: lastName || fullName.split(' ').slice(1).join(' ') || '',
        name: fullName,
        email: cleanEmail,
        phone: cleanPhone,
        type: type || 'employee',
        companyId: resolvedCompId,
        departmentId: resolvedDeptId,
        payroll: payroll ? String(payroll) : undefined,
        regNo: regNo ? parseInt(regNo) : undefined,
        gender: gender || undefined,
        dob: dob || undefined,
        bloodGroup: bloodGroup || undefined,
        maritalStatus: maritalStatus || undefined,
        qualification,
        college,
        location,
        address,
        password: hashedPassword,
        status: 'active',
        roles: role ? { create: [{ role }] } : undefined
      },
      include: {
        roles: true,
        company: true,
        department: true
      }
    });

    const { password: _, ...userSafe } = newUser;
    res.status(201).json({ success: true, message: 'User created successfully', data: userSafe });
  } catch (err) {
    console.error('Create user error:', err);
    res.status(500).json({ success: false, message: err.message || 'Failed to create user' });
  }
});

// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { password, role, department, entity, ...updateData } = req.body;

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    if (updateData.regNo) {
      updateData.regNo = parseInt(updateData.regNo);
    }
    if (updateData.companyId) {
      updateData.companyId = parseInt(updateData.companyId);
    }
    if (updateData.departmentId) {
      updateData.departmentId = parseInt(updateData.departmentId);
    }
    if (updateData.phone === '') {
      updateData.phone = null;
    }
    if (updateData.email === '') {
      updateData.email = null;
    }

    // Resolve department if name passed
    if (department && !updateData.departmentId) {
      const d = await prisma.department.findFirst({
        where: { name: { contains: department, mode: 'insensitive' } }
      });
      if (d) updateData.departmentId = d.id;
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      include: { roles: true, company: true, department: true }
    });

    if (role) {
      await prisma.userRole.upsert({
        where: { id: updated.roles && updated.roles[0] ? updated.roles[0].id : 0 },
        update: { role },
        create: { userId: updated.id, role }
      }).catch(() => {});
    }

    const { password: _, ...userSafe } = updated;
    res.json({ success: true, message: 'User updated successfully', data: userSafe });
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ success: false, message: 'Failed to update user' });
  }
});

// DELETE /api/users/:id (Soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    await prisma.user.update({
      where: { id: userId },
      data: { deletedAt: new Date(), status: 'inactive' }
    });
    res.json({ success: true, message: 'User deactivated successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to deactivate user' });
  }
});

module.exports = router;
