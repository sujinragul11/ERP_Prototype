const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/academy/courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await prisma.academyCourse.findMany({
      include: {
        subjects: {
          include: { topics: true }
        },
        _count: { select: { enrollments: true } }
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve academy courses' });
  }
});

// GET /api/academy/trainees
router.get('/trainees', async (req, res) => {
  try {
    const enrollments = await prisma.academyEnrollment.findMany({
      include: {
        traineeUser: { select: { id: true, name: true, email: true, phone: true } },
        course: { select: { id: true, name: true, duration: true, fee: true } },
        miniProjects: true
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve trainees' });
  }
});

// POST /api/academy/courses
router.post('/courses', async (req, res) => {
  try {
    const { name, duration, fee, status } = req.body;
    const course = await prisma.academyCourse.create({
      data: {
        name,
        duration: duration || '3 months',
        fee: parseFloat(fee) || 0,
        status: status || 'Available'
      }
    });
    res.status(201).json({ success: true, message: 'Course created successfully', data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create course' });
  }
});

module.exports = router;
