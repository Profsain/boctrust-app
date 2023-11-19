const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan'); // Import Loan model

// Get all loan
router.get('/loans', async (req, res) => {
  try {
    const loans = await Loan.find();
    return res.status(200).json({ loans });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Create new loan
router.post('/loans', async (req, res) => {
  try {
    const newLoanData = req.body;
    const newLoan = await Loan.create(newLoanData);
    return res.status(201).json({ success: 'Loan created successfully', loan: newLoan });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update loan
router.put('/loans/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedLoan = await Loan.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedLoan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    return res.status(200).json({ success: 'Loan updated successfully', loan: updatedLoan });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Delete loan
router.delete('/loans/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLoan = await Loan.findByIdAndDelete(id);

    if (!deletedLoan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    return res.status(200).json({ success: 'Loan deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
