const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const { status, clientId } = req.query;
    const where = {};
    if (status) where.status = status;
    if (clientId) where.clientUserId = parseInt(clientId);

    const projects = await prisma.project.findMany({
      where,
      include: {
        clientUser: { select: { id: true, name: true, email: true, phone: true } },
        assignments: {
          include: {
            assigneeUser: { select: { id: true, name: true, email: true } }
          }
        },
        milestones: true,
        tasks: true
      },
      orderBy: { id: 'asc' }
    });

    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve projects' });
  }
});

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        clientUser: true,
        assignments: { include: { assigneeUser: true } },
        milestones: true,
        tasks: true,
        transactions: true
      }
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve project' });
  }
});

// POST /api/projects
router.post('/', async (req, res) => {
  try {
    const {
      name,
      clientUserId,
      clientName,
      clientEmail,
      services,
      techStack,
      amount,
      balance,
      duration,
      description,
      status,
      payStatus,
      developers
    } = req.body;

    const project = await prisma.project.create({
      data: {
        name,
        companyId: 1,
        clientUserId: clientUserId ? parseInt(clientUserId) : undefined,
        clientName,
        clientEmail,
        services,
        techStack,
        amount: amount ? parseFloat(amount) : 0,
        balance: balance !== undefined ? parseFloat(balance) : (amount ? parseFloat(amount) : 0),
        duration,
        description,
        status: status || 'new',
        payStatus: payStatus || 'pending',
        startDate: new Date()
      }
    });

    // Assign developers if provided
    if (Array.isArray(developers) && developers.length > 0) {
      for (const dev of developers) {
        const empId = typeof dev === 'number' ? dev : parseInt(dev.id);
        if (empId) {
          await prisma.projectAssignment.create({
            data: {
              projectId: project.id,
              assigneeUserId: empId,
              assigneeType: 'employee',
              roleOnProject: 'Developer'
            }
          });
        }
      }
    }

    res.status(201).json({ success: true, message: 'Project created successfully', data: project });
  } catch (err) {
    console.error('Create project error:', err);
    res.status(500).json({ success: false, message: 'Failed to create project' });
  }
});

// GET /api/projects/tasks/all
router.get('/tasks/all', async (req, res) => {
  try {
    const { assigneeId, status, priority } = req.query;
    const where = {};
    if (assigneeId) where.assigneeUserId = parseInt(assigneeId);
    if (status) where.status = status;
    if (priority) where.priority = priority;

    const tasks = await prisma.taskAssignment.findMany({
      where,
      include: {
        project: { select: { id: true, name: true } },
        assigneeUser: { select: { id: true, name: true, email: true } }
      },
      orderBy: { id: 'desc' }
    });

    res.json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve tasks' });
  }
});

// POST /api/projects/tasks
router.post('/tasks', async (req, res) => {
  try {
    const { projectId, projectName, assigneeUserId, task, priority, dueDate, description } = req.body;

    const newTask = await prisma.taskAssignment.create({
      data: {
        projectId: projectId ? parseInt(projectId) : undefined,
        projectName,
        assigneeUserId: assigneeUserId ? parseInt(assigneeUserId) : undefined,
        task,
        priority: priority || 'medium',
        dueDate: dueDate ? new Date(dueDate) : undefined,
        description,
        status: 'todo',
        startDate: new Date()
      },
      include: {
        assigneeUser: { select: { id: true, name: true } }
      }
    });

    res.status(201).json({ success: true, message: 'Task assigned successfully', data: newTask });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to assign task' });
  }
});

// PUT /api/projects/tasks/:id
router.put('/tasks/:id', async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const updated = await prisma.taskAssignment.update({
      where: { id: taskId },
      data: req.body
    });
    res.json({ success: true, message: 'Task updated successfully', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update task' });
  }
});

module.exports = router;
