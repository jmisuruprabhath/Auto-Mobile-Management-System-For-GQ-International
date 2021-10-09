import React, { Component } from 'react';
import AdminExpensesTable from '../../../modules/AdminPageModules/Expenses/AdminExpensesTable/AdminExpensesTable';
import { Link } from 'react-router-dom';
import NavBar from './AdminNavBar';

export default class AdminExpensesPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#D3D3D3',
          paddingLeft: '20px',
        }}
      >
        <NavBar />
        <br />
        <br />
        <Link
          to="/addExpense"
          class="btn-grad4"
          role="button"
          aria-pressed="true"
          style={{
            marginBottom: '30px',
            fontSize: '20px',
            padding: '15px',
          }}
        >
          Add New Expense
        </Link>
        <br />
        <br />

        <AdminExpensesTable />
        <div style={{ paddingTop: '30px' }}></div>
      </div>
    );
  }
}
