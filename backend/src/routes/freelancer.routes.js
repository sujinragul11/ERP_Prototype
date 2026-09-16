const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/freelancer/list
router.get('/list', async (req, res) => {
  try {
    const freelancers = await prisma.freelancerProfile.findMany({
      include: {
        user: { select: { id: true, name: true, email: true, phone: true, avatarUrl: true } },
        timeEntries: { take: 5, orderBy: { date: 'desc' } },
        deliverables: true
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: freelancers.length, data: freelancers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve freelancers' });
  }
});

// POST /api/freelancer/time-entries
router.post('/time-entries', async (req, res) => {
  try {
    const { freelancerProfileId, projectId, taskDescription, hours } = req.body;
    const entry = await prisma.freelancerTimeEntry.create({
      data: {
        freelancerProfileId: parseInt(freelancerProfileId),
        projectId: projectId ? parseInt(projectId) : undefined,
        taskDescription,
        hours: parseFloat(hours) || 0,
        status: 'Approved'
      }
    });
    res.status(201).json({ success: true, message: 'Time logged successfully', data: entry });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to log time' });
  }
});

module.exports = router;
