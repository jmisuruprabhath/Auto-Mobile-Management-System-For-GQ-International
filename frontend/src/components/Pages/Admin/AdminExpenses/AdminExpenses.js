import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminExpensesPage from './AdminExpensePage';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import ExpenseDetails from './ExpenseDetails';

export default class AdminExpenses extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/addExpense">
              <AddExpense />
            </Route>

            <Route
              path="/editE/:id"
              render={(props) => <EditExpense {...props} />}
            />
            <Route
              path="/expense/:id"
              render={(props) => <ExpenseDetails {...props} />}
            />

            <Route path="/expensesHome">
              <AdminExpensesPage />
            </Route>

            <Route path="/">
              <AdminExpensesPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
