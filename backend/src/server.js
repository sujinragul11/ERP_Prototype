require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const prisma = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route imports
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');
const companyRoutes = require('./routes/companies.routes');
const projectRoutes = require('./routes/projects.routes');
const enquiryRoutes = require('./routes/enquiries.routes');
const financeRoutes = require('./routes/finance.routes');
const academyRoutes = require('./routes/academy.routes');
const consultancyRoutes = require('./routes/consultancy.routes');
const freelancerRoutes = require('./routes/freelancer.routes');
const influencerRoutes = require('./routes/influencer.routes');
const attendanceRoutes = require('./routes/attendance.routes');
const workspaceRoutes = require('./routes/workspace.routes');

const app = express();
const PORT = process.env.PORT || 8080;

// CORS - allow configured origins, deployed Render frontend, and localhost
const configuredOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map(function(origin) { return origin.trim().replace(/\/+$/, ''); })
  .filter(Boolean);

const defaultOrigins = [
  'https://erp-prototype-9rki.onrender.com',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500'
];

const allowedOrigins = Array.from(new Set([...defaultOrigins, ...configuredOrigins]));

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);

    var normalizedOrigin = origin.replace(/\/+$/, '');
    if (allowedOrigins.includes(normalizedOrigin) || allowedOrigins.includes('*')) {
      return callback(null, true);
    }

    // Also permit any Render subdomain (*.onrender.com) for preview and staging environments
    if (/^https:\/\/.*\.onrender\.com$/.test(normalizedOrigin)) {
      return callback(null, true);
    }

    console.warn('[CORS] Blocked request from unauthorized origin: ' + origin);
    return callback(new Error('CORS policy: origin ' + origin + ' is not allowed'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Standard Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Health Check Endpoint
app.get('/api/health', async (req, res) => {
  let dbHost = 'unknown';
  try {
    const dbUrl = process.env.DATABASE_URL || '';
    const match = dbUrl.match(/@([^:\/?]+)/);
    if (match && match[1]) {
      dbHost = match[1];
    }
  } catch (e) {}

  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      database: 'connected',
      engine: 'PostgreSQL',
      host: dbHost,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
      host: dbHost,
      error: err.message
    });
  }
});

// 2. Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/academy', academyRoutes);
app.use('/api/consultancy', consultancyRoutes);
app.use('/api/freelancer', freelancerRoutes);
app.use('/api/influencer', influencerRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/workspaces', workspaceRoutes);

// 3. Serve Frontend Static Portals (for local dev / monolith mode)
const frontendPath = path.resolve(__dirname, '../../frontend');
app.use(express.static(frontendPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Global Error Handler
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 RORIRI ERP Full-Stack Server Running`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`📂 Serving Frontend from: ${frontendPath}`);
  console.log(`🗄️  Database: PostgreSQL (roriri_erp_db)`);
  console.log('====================================================');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use by another process.`);
    console.error(`👉 Please kill the existing process on port ${PORT} or configure a different PORT in backend/.env.`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

module.exports = { app, server };
