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

// Standard Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Health Check Endpoint
app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      database: 'connected',
      engine: 'PostgreSQL',
      dbName: 'roriri_erp_db',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
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

// 3. Serve Frontend Static Portals
const frontendPath = path.resolve(__dirname, '../../frontend');
app.use(express.static(frontendPath));

// Fallback to index.html for root navigation if route not handled
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
