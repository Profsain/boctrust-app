const jwt = require('jsonwebtoken');
const User = require('../models/AdminUser');

const authenticateToken = async (req, res, next) => {
    try {
        // Get token from request header
        const token = req.headers.authorization.split(' ')[1];
        
        // Verify token
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        // Get user from database
        const user = await User.findOne({ _id: decoded.user_id, email: decoded.email });

        // Check if user exist
        if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
        }

        // Add user to request object
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = authenticateToken; // export middleware
    