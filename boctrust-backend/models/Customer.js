const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    bvnnumber: {
      type: String,
      },
    title: {
      type: String,
      default: ''
    },
    customerId: String,
    firstname: String,
    lastname: String,
    email: {type: String, unique: true, required: true},
    phonenumber: String,
    dob: String,
    maritalstatus: String,
    noofdependent: String,
    educationlevel: String,
    howdidyouhearaboutus: String,
    houseaddress: String,
    stateofresidence: String,
    lga: String,
    stateoforigin: String,
    ippis: {type: String, default: 'nill'},
    servicenumber: {type: String,default: 'nill'},
    valididcard: String,
    idcardnotinclude: String,
    nkinfirstname: String,
    nkinlastname: String,
    nkinphonenumber: String,
    nkinrelationship: String,
    nkinresidentialaddress: String,
    loanamount: String,
    numberofmonth: String,
    loantotalrepayment: Number,
    loanproduct: String,
    monthlyrepayment: String,
    careertype: String,
    numberofmonth: {
    type: String,
    default: "0"
    },
    loanpurpose: [String],
    otherpurpose: String,
    employername: String,
    employeraddress: String,
    employmentletter: String,
    employmentstartdate: String,
    netmonthlyincome: String,
    totalannualincome: String,
    officialemail: String,
    uploadpayslip: String,
    
    salarybankname: String,
    salaryaccountnumber: String,
    sameasaboveaccount: String,
    bankcode: String,
    disbursementbankname: String,
    disbursementaccountnumber: String,
    hasloan: String,
    currentmonthlyplanrepaymentamount: String,
    estimatedmonthlylivingexpense: String,
    buyoverloan: String,
    beneficiaryname: String,
    beneficiarybank: String,
    beneficiaryaccountnumber: String,
    liquidationbalance: String,
    deductions: String,
    guarantee: String,

    acceptterms: String,
    acceptpolicy: String,
    sharemyremita: Boolean,
    agreefullname: String,
    agreedate: String,
    signature: String,
    photocapture: String,
    haveagent: String,
    agentname: {
      type: String,
      default: 'Boctrust Admin'
    },
    username: { type: String, unique: true, required: true },
    password: String,
    confirmpassword: String,
    creditCheck: {
      assignment: {
        creditAnalyst: { type: String, default: "" },
        isCreditAnalystAssigned: {
          type: Boolean,
          default: false
        }
      },
      creditDbSearch: {
        searchType: { type: String, default: "" },
        searchBy: { type: String, default: "" },
        searchDate: { type: String, default: "" },
        remarks: { type: String, default: "" },
        dbSearchReport: { type: String, default: "" },
        isCreditDbCheck: {
          type: Boolean,
          default: false
        }
      }, 
      deductCheck: {
        searchByDeduct: { type: String, default: "" },
        searchDateDeduct: { type: String, default: "" },
        remarksDeduct: { type: String, default: "" },
        deductSearchReport: { type: String, default: "" },
        isDeductCheck: {
          type: Boolean,
          default: false
        }
      },
      creditBureauSearch: {
        bureauName: { type: String, default: "" },
        bvnNo: { type: String, default: "" },
        reportType: { type: String, default: "" },
        reportReason: { type: String, default: "" },
        bureauDate: { type: String, default: "" },
        bureauSearchReport: { type: String, default: "" },
        isCreditBureauCheck: {
          type: Boolean,
          default: false
        },
        creditBureauResult: {},
      },
      paySlipAnalysis: {
        netPay: { type: String, default: "" },
        grossPay: { type: String, default: "" },
        numberOfLenders: [Object],
        monthlyLoanRepayment: { type: String, default: "" },
        dateOfBirth: { type: String, default: "" },
        dateOfAppointment: { type: String, default: "" },
        isApplicantCivilianPolice: {
          type: Boolean,
          default: false
        },
        uploadPaySlip: { type: String, default: "" },
        isPaySlipContainsMoreThenFiveLenders: {
          type: Boolean,
          default: false
        },
        monthlyDeductionNotMoreThan50Percent: {
          type: Boolean,
          default: false
        },
        takeHomePayNotLessThan20Percent: {
          type: Boolean,
          default: false
        },
        takeHomePayNotLessThan30K: {
          type: Boolean,
          default: false
        },
        netPayNotLessThan30K: {
          type: Boolean,
          default: false
        },
      },
      decisionSummary: {
        netPay50Percent: { type: String, default: "" },
        grossPay20Percent: { type: String, default: "" },
        customerTakeHomeAfterLoanApproval: { type: String, default: "" },
        customerHasGoodCreditHistory: {
          type: Boolean,
          default: false
        },
        isCustomerOnSoftSuit: {
          type: Boolean,
          default: false
        },
        isCustomerNextOfKinOk: {
          type: Boolean,
          default: false
        },
        isCreditCheckOk: {
          type: Boolean,
          default: false
        },
        isBvnCheckOk: {
          type: Boolean,
          default: false
        },
        disbursementInstruction: { type: String, default: "" },
        creditOfficerReview: { type: String, default: "" },
        isCreditOfficerApproved: {
          type: Boolean,
          default: false
        },
        isCooApproved: {
          type: Boolean,
          default: false
        },

      },
  },
  branch: {
    type: String,
    default: "head office"
  },
  kyc: {
     loanstatus: {
      type: String,
      default: "booked"
    },
    isFacialMatch: {
      type: Boolean,
      default: false
    },
    isIdCardValid: {
      type: Boolean,
      default: false
    },
    isPhotoCaptured: {
      type: Boolean,
      default: false
    },
    isSignatureValid: {
      type: Boolean,
      default: false
    },
    isOtherDocsValidated: {
      type: Boolean,
      default: false
    },
    isKycApproved: {
      type: Boolean,
      default: false
    },
    timestamps: {
      type: Date,
      default: Date.now
    }
  },
  banking: {
    isAccountCreated: {
      type: Boolean,
      default: false
    },
    accountDetails: {
    type: Object, // hold an object
    default: {}    //  default empty object 
    } 
  },
  remita: {
    isRemitaCheck: {
      type: Boolean,
      default: false
    },
    remitaStatus: {
      type: String,
      default: "pending"
    },
    loanStatus: {
      type: String,
      default: "pending"
    },
    stopLoanStatus: {
      type: String,
      default: "new"
    },
    remitaDetails: {
    type: Object, // hold an object
    default: {}    //  default empty object 
    },
    disbursementDetails: {
    type: Object, // hold an object
    default: {}    //  default empty object 
    } 
  }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
