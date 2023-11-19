const express = require('express');
const router = express.Router();
const Employer = require('../models/EmployersManager'); // import Employer model

// Employer API Endpoints
// get all Employer posts endpoint
router.get('/employers', async (req, res) => {
    try {
        // get all Employer posts from database
        const employers = await Employer.find();
        // return success response
        return res.status(200).json({ employers });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
    
// create new Employer post endpoint
router.post('/employers', (req, res) => {

    try {
        // Get post data from request body
        const {employersId, employersName, employersAddress, dateAdded, mandateIssued } = req.body;

        // Validate required fields
        if (!employersId || !employersName || !employersAddress || !dateAdded || !mandateIssued) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create new Employer
        const employer = new Employer({employersId, employersName, employersAddress, dateAdded, mandateIssued });
    
        // Save Employer
        employer.save();

        // Return success response
        return res.status(201).json({ success: 'Employer created successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
    
// update single Employer endpoint
router.put('/employers/:id', async (req, res) => {
    try {
        // get Employer id from request params
        const { id } = req.params;

        // find employer by id
        const employer = await Employer.findById(id);
        if (!employer) {
            return res.status(404).json({ error: 'Employer not found' });
        }

        // get Employer data from request body
        const { employersName, employersAddress, mandateTitle, mandateDuration, maximumTenure, maximumAmount } = req.body;
        // validate required fields
        if (!employersName || !employersAddress || !mandateTitle || !mandateDuration || !maximumTenure || !maximumAmount) {
            return res.status(400).json({ error: 'All fields are required' });
        }
    
        // update Employer object
        employer.employersName = employersName || employer.employersName;
        employer.employersAddress = employersAddress || employer.employersAddress;
        employer.mandateRule.mandateTitle = mandateTitle || employer.mandateRule.mandateTitle;
        employer.mandateRule.mandateDuration = mandateDuration || employer.mandateRule.mandateDuration;
        employer.statementRule.maximumTenure = maximumTenure || employer.statementRule.maximumTenure;
        employer.statementRule.maximumAmount = maximumAmount || employer.statementRule.maximumAmount;

        // save Employer
        await employer.save();
        
        // return success response
        return res.status(200).json({ success: 'Employer updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Define a route to update the mandateRule for an employer by ID
router.put('/employers/:id/mandateRule', async (req, res) => {
    const { id } = req.params;
    
    try {
        // Find the employer by ID
        const employer = await Employer.findById(id);

        if (!employer) {
            return res.status(404).json({ error: 'Employer not found' });
        }

        // Update the mandateRule object with the data from the request body
        const { mandateTitle, mandateUser, mandateDuration, allowStacking, dateCreated, secondaryDuration } = req.body;

        employer.mandateRule.mandateTitle = mandateTitle || employer.mandateRule.mandateTitle;
        employer.mandateRule.mandateUser = mandateUser || employer.mandateRule.mandateUser;
        employer.mandateRule.mandateDuration = mandateDuration || employer.mandateRule.mandateDuration;
        employer.mandateRule.dateCreated = dateCreated || employer.mandateRule.dateCreated;
        employer.mandateRule.allowStacking = allowStacking || employer.mandateRule.allowStacking;
        employer.mandateRule.secondaryDuration = secondaryDuration || employer.mandateRule.secondaryDuration;

        // Save the updated employer
        await employer.save();

        res.json({ message: 'MandateRule updated successfully', employer });
    } catch (error) {
        console.error('Error updating mandateRule:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define a route to update the statementRule for an employer by ID
router.put('/employers/:id/statementRule', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        // Find the employer by ID
        const employer = await Employer.findById(id);

        if (!employer) {
            return res.status(404).json({ error: 'Employer not found' });
        }

        // Update the statementRule object with the data from the request body
        const { ruleTitle, maximumTenure, maximumAmount, rule } = req.body;

        employer.statementRule.ruleTitle = ruleTitle || employer.statementRule.ruleTitle;
        employer.statementRule.maximumTenure = maximumTenure || employer.statementRule.maximumTenure;
        employer.statementRule.maximumAmount = maximumAmount || employer.statementRule.maximumAmount;
        employer.statementRule.rule = rule || employer.statementRule.rule;

        // Save the updated employer
        await employer.save();

        res.json({ message: 'MandateRule updated successfully', employer });
    } catch (error) {
        console.error('Error updating mandateRule:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// delete single Employer endpoint
router.delete('/employers/:id', async (req, res) => {
    try {
        // get Employer id from request params
        const { id } = req.params;
    
        // find Employer by id and delete
        const employer = await Employer.findByIdAndDelete(id);
        
        // return success response
        return res.status(200).json({ success: 'Employer deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router; // export Employer routes