const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/influencer/list
router.get('/list', async (req, res) => {
  try {
    const influencers = await prisma.influencerProfile.findMany({
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        payouts: { take: 5, orderBy: { requestedAt: 'desc' } }
      },
      orderBy: { id: 'asc' }
    });
    res.json({ success: true, count: influencers.length, data: influencers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve influencers' });
  }
});

// GET /api/influencer/campaigns
router.get('/campaigns', async (req, res) => {
  try {
    const campaigns = await prisma.influencerCampaign.findMany({
      include: { _count: { select: { leads: true } } },
      orderBy: { id: 'desc' }
    });
    res.json({ success: true, count: campaigns.length, data: campaigns });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve campaigns' });
  }
});

// POST /api/influencer/payouts
router.post('/payouts', async (req, res) => {
  try {
    const { influencerProfileId, amount, method } = req.body;
    const payout = await prisma.influencerPayout.create({
      data: {
        influencerProfileId: parseInt(influencerProfileId),
        amount: parseFloat(amount),
        method: method || 'Bank Transfer',
        status: 'Processing'
      }
    });
    res.status(201).json({ success: true, message: 'Payout requested successfully', data: payout });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to request payout' });
  }
});

module.exports = router;
