const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer'); // Import customer model
const multer = require('multer');
const path = require('path');

// Set up Multer storage to define where to save the uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/filesUpload/'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file with a unique name
  },
});

const upload = multer({
  storage: storage,
});

const multipleUpload = upload.fields([{ name: 'dbSearchReport' }, { name: 'deductSearchReport' }, { name: 'bureauSearchReport' }, { name: 'uploadPaySlip' }]);
// multer configuration end here

// Update the creditDbSearch field
router.put('/creditDbSearch/:customerId', multipleUpload, async (req, res) => {
  if (req.files?.dbSearchReport) {
    req.body.dbSearchReport = req.files.dbSearchReport[0].filename;
  }

  try {
    const customerId = req.params.customerId;  
    const updates = req.body; // send the updated data in the request body
    const customer = await Customer.findByIdAndUpdate(customerId, { 'creditCheck.creditDbSearch': updates }, { new: true });
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update creditDbSearch' });
  }
});

// Update the deductcheck field
router.put('/deductcheck/:customerId', multipleUpload, async (req, res) => {
  if (req.files.deductSearchReport) {
    req.body.deductSearchReport = req.files.deductSearchReport[0].filename;
  }

  try {
    const customerId = req.params.customerId;
  
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'creditCheck.deductCheck': updates }, { new: true });
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update deductcheck' });
  }
});

// Update the creditBureauSearch field
router.put('/creditBureauSearch/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    if (req.files.bureauSearchReport) {
          req.body.bureauSearchReport = req.files.bureauSearchReport[0].filename;
      }
      
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'creditCheck.creditBureauSearch': updates }, { new: true });
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update creditBureauSearch' });
  }
});

// Update the paySlipAnalysis field
router.put('/paySlipAnalysis/:customerId', multipleUpload, async (req, res) => {
  console.log("req.body", req.body);
  try {
    const customerId = req.params.customerId;
    if (req.files.uploadPaySlip) {
          req.body.uploadPaySlip = req.files.uploadPaySlip[0].filename;
      }

    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'creditCheck.paySlipAnalysis': updates }, { new: true });
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update paySlipAnalysis' });
  }
});

// Update the decisionSummary field
router.put('/decisionSummary/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'creditCheck.decisionSummary': updates }, { new: true });
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update decisionSummary' });
  }
});

// Update the assign to credit analyst
router.put('/assignto/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'creditCheck.assignment': updates }, { new: true });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update decisionSummary' });
  }
});

// update kyc details
router.put('/kyc/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'kyc': updates }, { new: true });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update kyc details' });
  }
});

// Update the loanstatus property inside the kyc object
router.put('/kyc/:customerId/loanstatus', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const loanstatus = req.body.loanstatus;

    // Find the customer by customerId and update the loanstatus
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { 'kyc.loanstatus': loanstatus },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update loanstatus' });
  }
});

// update bankone account details
router.put('/banking/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(customerId, { 'banking': updates }, { new: true });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update account details' });
  }
});

// update remita account details
router.put('/remita/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updates = req.body;

    // Prepare the update object to set only the desired fields
    const updateObject = {};

    if (updates.hasOwnProperty('isRemitaCheck')) {
      updateObject['remita.isRemitaCheck'] = updates.isRemitaCheck;
    }

    if (updates.hasOwnProperty('remitaStatus')) {
      updateObject['remita.remitaStatus'] = updates.remitaStatus;
    }
    if (updates.hasOwnProperty('loanStatus')) {
      updateObject['remita.loanStatus'] = updates.loanStatus;
    }

    if (updates.hasOwnProperty('remitaDetails')) {
      updateObject['remita.remitaDetails'] = updates.remitaDetails;
    }

    if (updates.hasOwnProperty('disbursementDetails')) {
      updateObject['remita.disbursementDetails'] = updates.disbursementDetails;
    }

    const customer = await Customer.findByIdAndUpdate(customerId, { $set: updateObject }, { new: true });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update account details' });
  }
});

// update remita stop loan status
router.put('/remita/:customerId/stoploan', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const stopLoanStatus = req.body.stopLoanStatus;

    // Find the customer by customerId and update the loanstatus
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { 'remita.stopLoanStatus': stopLoanStatus },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update loanstatus' });
  }
});

module.exports = router;
