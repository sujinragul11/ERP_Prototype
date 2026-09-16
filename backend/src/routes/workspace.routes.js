const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/workspaces
router.get('/', async (req, res) => {
  try {
    const workspaces = await prisma.workspace.findMany({
      include: { members: true },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: workspaces.length, data: workspaces });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve workspaces' });
  }
});

// POST /api/workspaces
router.post('/', async (req, res) => {
  try {
    const { code, name, type, capacity, leadName, status } = req.body;
    const ws = await prisma.workspace.create({
      data: {
        code,
        name,
        type: type || 'Cabin',
        capacity: capacity ? parseInt(capacity) : 1,
        leadName,
        status: status || 'Available'
      }
    });
    res.status(201).json({ success: true, message: 'Workspace created', data: ws });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create workspace' });
  }
});

module.exports = router;
