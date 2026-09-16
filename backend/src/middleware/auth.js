const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

const JWT_SECRET = process.env.JWT_SECRET || 'roriri_erp_jwt_secret_key_2026_super_secure';

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        roles: true,
        company: true,
        department: true
      }
    });

    if (!user || user.status === 'blocked') {
      return res.status(403).json({ success: false, message: 'Invalid or inactive user account' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token' });
  }
}

function requireRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const userRoles = (req.user.roles || []).map(r => r.role);
    const isSuperAdmin = userRoles.includes('Super Admin');
    if (isSuperAdmin) return next();

    const hasRole = allowedRoles.some(r => userRoles.includes(r) || req.user.type === r);
    if (!hasRole) {
      return res.status(403).json({ success: false, message: 'Access denied: insufficient permissions' });
    }

    next();
  };
}

module.exports = {
  authenticateToken,
  requireRoles,
  JWT_SECRET
};
