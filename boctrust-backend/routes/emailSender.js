const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { email, subject, html } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
             host: "smtp.gmail.com",
             port: 587,
             secure: false,
            auth: {
                user: 'husseinimudiking@gmail.com',
                pass: 'rwaoqkkbaopnzgum'
            }
        });
        
        const mailOptions = {
            from: 'Boctrust MFB',
            to: email,
            subject: subject,
            html: html

        };
        
        await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(500).json({ success: false, error: 'Internal Server Error, mail not sent' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ success: true, message: 'Email sent successfully' });
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;
