const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/AdminUser');
const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

// Set up Multer storage to define where to save the uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file with a unique name
  },
});

const upload = multer({
  storage: storage,
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();

        // Map users to include image URLs
        const usersWithImages = users.map(user => {
            const baseUrl = process.env.BASE_URL || 'http://localhost:3030';
            return {
                ...user.toJSON(),
                imageUrl: `${baseUrl}/uploads/${user.photo}`
            };
        });

        // Return success response with users and image URLs
        return res.status(200).json({ users: usersWithImages });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}); // get all users logic ends here

// register new user endpoint
const type = upload.single('photo');

router.post('/register', type, async (req, res) => {
    try {
        // Get user input
        const { fullName, email, phone, username, password, jobRole, userType } = req.body;
        
         // Get the image file name from req.file
        const photo = req.file.filename;
    
        // Validate user input
        if (!(email && password && fullName && phone && username && jobRole && userType && photo)) {
        return res.status(400).json({ error: 'All input is required' });
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
        return res.status(409).json({ error: 'User Already Exist. Please Login' });
        }
    
        // Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);
    
        // Create user in our database
        const user = await User.create({
        fullName,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        phone,
        username,
        password: encryptedPassword,
        jobRole,
        userType,
        photo,
        });
    
        // Create token
        const token = jwt.sign(
          { user_id: user._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: '1h',
          }
        );
        // save user token
        user.token = token;
        user.save();
    
        // return new user
        return res.status(201).json({ success: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}); // registration logic ends here
    
// Login user using username and password
router.post('/login', async (req, res) => {
    try {
        // get user input
        const { username, password } = req.body;
      
        // validate user input
        if (!(username && password)) {
            return res.status(400).json({ error: 'All input is required' });
        }

        // find user by username
        const user = await User.findOne({ username });

        // validate if user exist in our database and create token
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );

            // save user token
            user.token = token;

            // user
            return res.status(200).json({ success: 'Login successful', user });
        }
        return res.status(400).json({ error: 'Invalid Credentials' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}); // login logic ends here

// Delete a user
router.delete('/users/:id', async (req, res) => {

    try {
        // get user id from request params
        const { id } = req.params;

        // find user by id and delete
        const deleted = await User.findByIdAndDelete(id);
        
        if (deleted) {
            return res.status(200).json({ success: 'User deleted successfully' });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
); // delete user logic ends here

// Update a user
router.put('/update/:id', async (req, res) => {
    console.log("req.body", req.body)
    try {
        const { id } = req.params;
        const { fullName, email, phone, username, jobRole, userType } = req.body;

        if (!(email && fullName && phone && username && jobRole && userType)) {
            return res.status(400).json({ error: 'All input is required' });
        }

        // find user by id
        const userAccount = await User.findById(id);
        const password = userAccount.password;
        
        // update user details
        const updated = await User.findByIdAndUpdate(id, {
            fullName,
            email: email.toLowerCase(),
            phone,
            username,
            password: password,
            jobRole,
            userType,
        });
        // const updated = await User.findByIdAndUpdate(id, {
        //     fullName,
        //     email: email.toLowerCase(),
        //     phone,
        //     username,
        //     password: encryptedPassword,
        //     jobRole,
        //     userType,
        // });

        if (updated) {
            return res.status(200).json({ success: 'User updated successfully' });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
); // update user logic ends here

module.exports = router; // export router