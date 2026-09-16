const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/attendance
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const where = {};
    if (userId) where.userId = parseInt(userId);

    const records = await prisma.attendance.findMany({
      where,
      include: { user: { select: { id: true, name: true } } },
      orderBy: { date: 'desc' }
    });

    res.json({ success: true, count: records.length, data: records });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve attendance' });
  }
});

// POST /api/attendance/punch
router.post('/punch', async (req, res) => {
  try {
    const { userId, status, checkIn, checkOut, hours } = req.body;
    const record = await prisma.attendance.create({
      data: {
        userId: parseInt(userId),
        date: new Date(),
        checkIn: checkIn || '09:00 AM',
        checkOut,
        hours,
        status: status || 'Present'
      }
    });
    res.status(201).json({ success: true, message: 'Attendance marked', data: record });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to mark attendance' });
  }
});

// GET /api/attendance/daily-reports
router.get('/daily-reports', async (req, res) => {
  try {
    const { userId } = req.query;
    const where = {};
    if (userId) where.userId = parseInt(userId);

    const reports = await prisma.dailyReport.findMany({
      where,
      include: { user: { select: { id: true, name: true } } },
      orderBy: { date: 'desc' }
    });

    res.json({ success: true, count: reports.length, data: reports });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve daily reports' });
  }
});

// POST /api/attendance/daily-reports
router.post('/daily-reports', async (req, res) => {
  try {
    const { userId, task, hours, description, category, subcategory } = req.body;
    const report = await prisma.dailyReport.create({
      data: {
        userId: parseInt(userId),
        task,
        hours: parseFloat(hours) || 8,
        description,
        category,
        subcategory,
        date: new Date()
      }
    });
    res.status(201).json({ success: true, message: 'Daily report submitted', data: report });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit daily report' });
  }
});

module.exports = router;
