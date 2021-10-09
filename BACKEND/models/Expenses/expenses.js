const mongoose = require('mongoose');

//Expense Schema
const expenseSchema = new mongoose.Schema({
  topic: {
    required: [true, 'Topic is required'],
    type: String,
    required: true,
  },

  amount: {
    required: [true, 'Amount is required'],
    type: String,
    required: true,
  },

  date: {
    required: [true, 'Date is required'],
    type: Date,
    required: true,
  },

  category: {
    required: [true, 'Category is required'],
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  bankAccountNumber: {
    type: String,
  },

  email: {
    type: String,
  },

  phoneNumber: {
    type: String,
  },
});

module.exports = mongoose.model('Expenses', expenseSchema);
