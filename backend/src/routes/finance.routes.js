const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET /api/finance/transactions
router.get('/transactions', async (req, res) => {
  try {
    const { direction, refType, projectId } = req.query;
    const where = {};
    if (direction) where.direction = direction;
    if (refType) where.refType = refType;
    if (projectId) where.projectId = parseInt(projectId);

    const transactions = await prisma.transaction.findMany({
      where,
      include: { project: { select: { id: true, name: true } } },
      orderBy: { id: 'desc' }
    });

    res.json({ success: true, count: transactions.length, data: transactions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve transactions' });
  }
});

// POST /api/finance/transactions
router.post('/transactions', async (req, res) => {
  try {
    const { refType, projectId, direction, amount, mode, txnId, paidByName, notes, status } = req.body;

    const transaction = await prisma.transaction.create({
      data: {
        code: `TXN-${Date.now().toString().slice(-6)}`,
        refType: refType || 'general',
        projectId: projectId ? parseInt(projectId) : undefined,
        direction: direction || 'credit',
        amount: parseFloat(amount),
        mode: mode || 'Cash',
        txnId,
        paidByName,
        status: status || 'Paid',
        notes,
        date: new Date()
      }
    });

    // If linked to project and credit, reduce project balance
    if (projectId && direction === 'credit') {
      const proj = await prisma.project.findUnique({ where: { id: parseInt(projectId) } });
      if (proj) {
        const newBalance = Math.max(0, proj.balance - parseFloat(amount));
        await prisma.project.update({
          where: { id: proj.id },
          data: {
            balance: newBalance,
            payStatus: newBalance === 0 ? 'paid' : (newBalance < proj.amount ? 'partial' : 'pending')
          }
        });
      }
    }

    res.status(201).json({ success: true, message: 'Transaction recorded successfully', data: transaction });
  } catch (err) {
    console.error('Create transaction error:', err);
    res.status(500).json({ success: false, message: 'Failed to record transaction' });
  }
});

// GET /api/finance/summary
router.get('/summary', async (req, res) => {
  try {
    const credits = await prisma.transaction.aggregate({
      where: { direction: 'credit', status: 'Paid' },
      _sum: { amount: true }
    });

    const debits = await prisma.transaction.aggregate({
      where: { direction: 'debit', status: 'Paid' },
      _sum: { amount: true }
    });

    const totalIncome = credits._sum.amount || 0;
    const totalExpense = debits._sum.amount || 0;
    const netProfit = totalIncome - totalExpense;

    res.json({
      success: true,
      data: {
        totalIncome,
        totalExpense,
        netProfit
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to calculate financial summary' });
  }
});

module.exports = router;
