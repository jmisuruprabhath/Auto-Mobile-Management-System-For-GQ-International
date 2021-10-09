import React, { Component } from 'react';
import AddExpenseForm from '../../../modules/AdminPageModules/Expenses/AddExpenseForm/AddExpenseForm';
import AdminNavBar from './AdminNavBar';
import AddExpenseBG from '../../../../images/addexpense.jpg';
export default class AddExpense extends Component {
  render() {
    return (
      <div
        style={{
          borderRadius: '0px',
          marginTop: '0px',
          backgroundImage: `url(${AddExpenseBG})`,
          width: '100%',
          alignItems: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          color: '#fff',
        }}
      >
        <AdminNavBar />
        <AddExpenseForm />
      </div>
    );
  }
}
