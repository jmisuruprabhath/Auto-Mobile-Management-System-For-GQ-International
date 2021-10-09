import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import gqheader from '../../../../../images/gqheader.png';

export default class expenseReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
    };
  }

  componentDidMount() {
    this.retrieveExpenses();
  }

  retrieveExpenses() {
    axios.get('/expenses').then((res) => {
      if (res.data.success) {
        //console.log(res.data);
        this.setState({
          expenses: res.data.existingExpenses,
          init: 1,
        });

        console.log(this.state.expenses);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm('Do you want to delete this Expense?')) {
      axios.delete(`/expense/delete/${id}`).then((res) => {
        alert('Expense Deleted Successfully');
        this.retrieveExpenses();
      });
    }
  };

  filterData(expenses, searchKey) {
    const result = expenses.filter(
      (expense) =>
        expense.date.includes(searchKey) ||
        expense.topic.toLowerCase().includes(searchKey) ||
        expense.category.toLowerCase().includes(searchKey)
    );

    this.setState({ expenses: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get('/expenses').then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingExpenses, searchKey);
      }
    });
  };

  genreport = () => {
    const doc = new jsPDF('p', 'pt', [1080, 1300]); //(p,pt= points (mm,cm),page size)
    doc.html(document.querySelector('#fullExp'), {
      callback: function (pdf) {
        const pageCount = doc.internal.getNumberOfPages(0);
        pdf.save('expenses_full_report');
      },
    });
  };

  render() {
    return (
      <div
        style={{
          marginRight: '20px',
          width: '1050px',
          borderRadius: '0px',
          marginTop: '0px',
          marginBottom: '30px',
          backgroundColor: ' white',

          alignItems: 'center',
        }}
      >
        <button
          class="btn-grad8"
          role="button"
          aria-pressed="true"
          style={{
            margin: '30px',
            fontSize: '20px',
            height: '40px',
            width: '280px',
          }}
          onClick={this.genreport}
        >
          Download Full Report
        </button>

        <div id="fullExp" style={{ marginLeft: '20px' }}>
          <img
            src={gqheader}
            alt=""
            width="1025px"
            style={{ marginTop: '30px' }}
          />

          <h2 style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
            Expenses Full Report
          </h2>

          <table
            //class="table table-dark"
            style={{ marginTop: '30px' }}
            id="reportExp"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Topic</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Bank Number</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>

            <tbody>
              {this.state.expenses.map((expenses, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/expense/${expenses._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {expenses.topic}
                    </a>
                  </td>
                  <td>{expenses.amount}</td>
                  <td>{expenses.date.substring(0, 10)}</td>
                  <td>{expenses.category}</td>
                  <td>{expenses.description}</td>
                  <td>{expenses.bankAccountNumber}</td>
                  <td>{expenses.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <hr />
          <h2>GQ - International</h2>
          <h4>(Specialist in Auto Door Handles)</h4>
          <br />
          <div style={{ marginLeft: '880px' }}>
            <p>.................................</p>
            <h4 style={{ paddingBottom: '20px' }}>Signature</h4>
          </div>
        </div>
      </div>
    );
  }
}
