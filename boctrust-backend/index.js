// include dependency
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blog");
const wikiRoutes = require("./routes/wiki");
const productRoutes = require("./routes/product");
const inquiryRoutes = require("./routes/inquiry");
const contactRoutes = require("./routes/contactForm");
const branchRoutes = require("./routes/branches");
const customerRoutes = require("./routes/customer");
const updateCustomerRoutes = require("./routes/customerUpdate");
const accountRoutes = require("./routes/account");
const disbursementRoutes = require("./routes/disbursementMethod");
const adminRoutes = require("./routes/adminUser");
const employersManagerRoutes = require("./routes/employersManager");
// bankone operation routes
const bankOneOperationRoutes = require("./routes/bankingOperation");
// remita operation routes
const remitaOperationRoutes = require("./routes/remitaOperation");
const sendEmail = require("./routes/emailSender");
// crc register routes
const crcRegisterRoutes = require("./routes/crcRegister");
// credit registry route
const creditRegistryRoutes = require("./routes/creditRegistry");
// first central routes
const firstCentralRoutes = require("./routes/firstCentral");

// configure dotenv
dotenv.config();

// connect to database
mongoose
    .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => { 
    console.log("Connected to database successfully");
        // create new instance of express
        const app = express();

             // use cors
        app.use(cors());

        // use express json
        app.use(express.json());
        // Serve static files from the "uploads" directory
        app.use('/uploads', express.static('uploads'));

        // Serve static files from the "public/filesUpload" directory
        app.use('/public/filesUpload', express.static('public/filesUpload'));
        
        // Middleware
        app.use(bodyParser.json());

        // use routes
        app.use('/api/blog', blogRoutes);
        app.use('/api/wiki', wikiRoutes);
        app.use('/api/product', productRoutes);
        app.use('/api/inquiry', inquiryRoutes);
        app.use('/api/contact', contactRoutes);
        app.use('/api/branch', branchRoutes);
        app.use('/api/customer', customerRoutes);
        app.use('/api/updatecustomer', updateCustomerRoutes);
        app.use('/api/account', accountRoutes);
        app.use('/api/disbursement', disbursementRoutes);
        app.use('/api/agency', employersManagerRoutes);
        // admin routes
        app.use('/api/admin', adminRoutes);
        // bankone operation routes
        app.use('/api/bankone', bankOneOperationRoutes);
        // remita operation routes
        app.use('/api/remita', remitaOperationRoutes);
        // email sender routes
        app.use('/api/email', sendEmail);
        // crc register routes
        app.use('/api/crc', crcRegisterRoutes);
        // credit registry routes
        app.use('/api/creditregistry', creditRegistryRoutes);
        // first central routes
        app.use('/api/firstcentral', firstCentralRoutes);

        app.listen(process.env.PORT || 3030, () => console.log("Server running on port 3030"));
    })
    .catch((err) => console.log(err));

