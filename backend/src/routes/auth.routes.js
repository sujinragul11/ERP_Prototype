const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');
const { authenticateToken, JWT_SECRET } = require('../middleware/auth');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ success: false, message: 'Username or email is required' });
    }

    // Allow lookup by username, email, or exact name
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username: { equals: username, mode: 'insensitive' } },
          { email: { equals: username, mode: 'insensitive' } },
          { name: { equals: username, mode: 'insensitive' } }
        ]
      },
      include: {
        roles: true,
        company: true,
        department: true
      }
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    // If user has password, verify it. For prototype ease, password 'pass' or correct hash matches
    let isValid = false;
    if (user.password) {
      isValid = await bcrypt.compare(password || '', user.password);
    }
    // Prototype fallback: accept password 'pass' if demo
    if (!isValid && (password === 'pass' || password === user.password)) {
      isValid = true;
    }

    if (!isValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Update lastLoginAt
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    });

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        type: user.type,
        roles: user.roles.map(r => r.role)
      },
      JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    const { password: _, ...userSafe } = user;

    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: userSafe
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Server error during authentication' });
  }
});

// GET /api/auth/me
router.get('/me', authenticateToken, async (req, res) => {
  const { password: _, ...userSafe } = req.user;
  res.json({
    success: true,
    user: userSafe
  });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' });
});

module.exports = router;
