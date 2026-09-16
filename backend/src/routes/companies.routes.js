const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/companies
router.get('/', async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      include: {
        departments: true,
        _count: {
          select: { users: true, projects: true }
        }
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: companies.length, data: companies });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve companies' });
  }
});

// GET /api/companies/departments
router.get('/departments', async (req, res) => {
  try {
    const departments = await prisma.department.findMany({
      include: {
        jobTitles: true,
        company: true,
        _count: { select: { users: true } }
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: departments.length, data: departments });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve departments' });
  }
});

module.exports = router;
