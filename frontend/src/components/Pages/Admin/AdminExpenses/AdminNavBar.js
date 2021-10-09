import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdminNavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-secondary"
        style={{
          color: 'white',
          fontSize: '22px',
          marginRight: '20px',
          backgroundColor: '#000',
        }}
      >
        <ul
          className="navbar-nav"
          style={{
            marginLeft: '50px',
            className: 'nav-item',
          }}
        >
          <li
            className="nav-item"
            style={{
              marginRight: '30px',
              className: 'nav-item',
            }}
          >
            <a class="nav-link" href="/expensesHome">
              All Expenses
            </a>
          </li>

          <li className="nav-item">
            <a class="nav-link" href="/expenseReport">
              Get Full Report
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
