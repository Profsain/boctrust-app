const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  loanamount: Number,
  careertype: String,
  numberofmonth: String,
  loanpurpose: [String],
  other: Boolean,
  otherpurpose: String
});

const LoanPurpose = mongoose.model('Loan', loanSchema);

module.exports = Loan;
