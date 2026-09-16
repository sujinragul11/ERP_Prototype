const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/consultancy/candidates
router.get('/candidates', async (req, res) => {
  try {
    const candidates = await prisma.candidateProfile.findMany({
      include: {
        user: { select: { id: true, name: true, email: true, phone: true, college: true, qualification: true, gradYear: true } },
        applications: { include: { jobOpening: true } }
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: candidates.length, data: candidates });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve candidates' });
  }
});

// GET /api/consultancy/openings
router.get('/openings', async (req, res) => {
  try {
    const openings = await prisma.jobOpening.findMany({
      include: { _count: { select: { applications: true } } },
      orderBy: { id: 'desc' }
    });
    res.json({ success: true, count: openings.length, data: openings });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve job openings' });
  }
});

// POST /api/consultancy/openings
router.post('/openings', async (req, res) => {
  try {
    const { companyName, title, roleType, experience, location, salary, openings } = req.body;
    const opening = await prisma.jobOpening.create({
      data: {
        companyName,
        title,
        roleType,
        experience,
        location,
        salary,
        openings: openings ? parseInt(openings) : 1,
        status: 'Active'
      }
    });
    res.status(201).json({ success: true, message: 'Job opening posted successfully', data: opening });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create job opening' });
  }
});

module.exports = router;
