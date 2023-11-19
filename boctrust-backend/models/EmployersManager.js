const mongoose = require('mongoose');

const EmployerSchema = mongoose.Schema({
    employersId: {
        type: String,
        required: true,
        trim: true,
    },
    employersName: {
        type: String,
        required: true,
    },
    employersAddress: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
    mandateIssued: {
        type: String,
        default: "false",
    },
    mandateRule: {
        mandateTitle: {
            type: String,
            trim: true,
            default: "No Mandate Rule",
        },
        mandateUser: {
            type: String,
            trim: true,
            default: "Default User",
        },
        mandateDuration: {
            type: String,
            trim: true,
            default: "0 Months",
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        allowStacking: {
            type: String,
            default: false,
        },
        secondaryDuration: {
            type: String,
            default: false,
        },
    },
    statementRule: {
        ruleTitle: {
            type: String,
            trim: true,
            default: "Statement Title",
        },
        maximumTenure: {
            type: String,
            trim: true,
            default: "0 Months",
        },
        maximumAmount: {
            type: String,
            trim: true,
            default: "0.00",
        },
    }
}, { timestamps: true });

const Employer = mongoose.model('Employer', EmployerSchema);
module.exports = Employer; // export employer model