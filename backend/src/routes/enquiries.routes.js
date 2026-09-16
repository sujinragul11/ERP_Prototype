const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/enquiries
router.get('/', async (req, res) => {
  try {
    const { status, type } = req.query;
    const where = {};
    if (status) where.status = status;
    if (type) where.type = type;

    const enquiries = await prisma.enquiry.findMany({
      where,
      include: { updates: true },
      orderBy: { id: 'desc' }
    });

    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve enquiries' });
  }
});

// POST /api/enquiries - Public lead capture
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, organization, message, type, sourcePage } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }

    // Auto-create or lookup in master users table if phone or email provided
    let existingUser = null;
    if (phone || email) {
      existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            phone ? { phone } : undefined,
            email ? { email } : undefined
          ].filter(Boolean)
        }
      });
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        phone,
        email,
        organization,
        message,
        type: type || 'project',
        sourcePage: sourcePage || 'website',
        status: 'new',
        createdUserId: existingUser ? existingUser.id : undefined
      }
    });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: enquiry
    });
  } catch (err) {
    console.error('Submit enquiry error:', err);
    res.status(500).json({ success: false, message: 'Failed to submit enquiry' });
  }
});

// PUT /api/enquiries/:id - Update status / conversion
router.put('/:id', async (req, res) => {
  try {
    const enquiryId = parseInt(req.params.id);
    const { status, message, notes } = req.body;

    const updated = await prisma.enquiry.update({
      where: { id: enquiryId },
      data: {
        status,
        message: message !== undefined ? message : undefined
      }
    });

    res.json({ success: true, message: 'Enquiry updated successfully', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update enquiry' });
  }
});

module.exports = router;
