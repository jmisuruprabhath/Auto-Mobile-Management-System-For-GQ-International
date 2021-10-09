import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import AdminExpensesReport from '../../../modules/AdminPageModules/Expenses/ExpenseReports/expenseReport';

export default class EditExpense extends Component {
  render() {
    return (
      <div>
        <AdminNavBar />
        <AdminExpensesReport />
      </div>
    );
  }
}
