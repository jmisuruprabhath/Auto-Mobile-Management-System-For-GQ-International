const express = require('express');
const Expenses = require('../../models/Expenses/expenses');

const router = express.Router(); // Used to write HTTP Requests

// Save Expenses
router.post('/expense/save', (req, res) => {
  let newExpense = new Expenses(req.body);

  newExpense.save((err) => {
    // Check whether an error has occured
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: 'Post saved successfully',
    });
  });
});

// Get Expenses
router.get('/expenses', (req, res) => {
  Expenses.find().exec((err, expenses) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingExpenses: expenses,
    });
  });
});

// Update Expenses
router.put('/expense/update/:id', (req, res) => {
  Expenses.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body, // Update the whole body. Not only one like title
    },
    (err, expense) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: 'Expense Updated Successsfully',
      });
    }
  );
});

// Delete Expenses
router.delete('/expense/delete/:id', (req, res) => {
  Expenses.findByIdAndRemove(req.params.id).exec((err, deletedExpense) => {
    if (err) {
      return res.status(400).json({
        message: 'Delete Unsuccessful',
        err,
      });
    }
    return res.json({
      message: 'Delete Successful',
      deletedExpense,
    });
  });
});

// Get a specific Expense
router.get('/expense/:id', (req, res) => {
  let expenseId = req.params.id;

  Expenses.findById(expenseId, (err, expense) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
      });
    }

    return res.status(200).json({
      success: true,
      expense,
    });
  });
});

module.exports = router;
