import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

export default class AdminExpensesTable extends Component {
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

  pdfGenerate = (
    topic,
    amount,
    date,
    category,
    description,
    banknumber,
    email,
    phonenumber
  ) => {
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    var img = new Image();
    doc.setFont('Helvertica', 'bold');
    doc.setFontSize(20);
    doc.text(250, 30, 'GQ INTERNATIONAL');
    doc.setFontSize(16);
    doc.text(244, 50, 'Specialist in Auto Door Handles');
    doc.setFontSize(15);
    doc.text(265, 70, 'contactgqintl@gmail.com');
    doc.setFontSize(14);
    doc.text(500, 90, 'Tel : 072-7788877');
    doc.line(20, 100, 600, 100);

    doc.setFont('Helvertica', 'bold');
    doc.text(60, 130, 'Topic : ');
    doc.text(60, 150, 'Amount (Rs) : ');
    doc.text(60, 170, 'Date : ');
    doc.text(60, 190, 'Category : ');
    doc.text(60, 210, 'Description : ');
    doc.text(60, 230, 'Bank Account Number : ');
    doc.text(60, 250, 'Email : ');
    doc.text(60, 270, 'Phone Number : ');

    doc.setFont('Helvertica', 'normal');
    doc.text(100, 130, topic);
    doc.text(130, 150, amount);
    doc.text(95, 170, date.substring(0, 10));
    doc.text(120, 190, category);
    doc.text(130, 210, description);
    doc.text(180, 230, banknumber);
    doc.text(105, 250, email);
    doc.text(150, 270, phonenumber);

    doc.line(20, 290, 600, 290);

    doc.setFont('Helvertica', 'bold');
    doc.setFontSize(16);
    doc.text(60, 330, 'GQ INTERNATIONAL');
    doc.setFontSize(14);
    doc.text(500, 350, '.......................');
    doc.text(500, 370, 'Signature');

    doc.save('expense.pdf');
  };

  render() {
    return (
      <div
        style={{ marginRight: '20px', width: '1030px' }}
        style={{
          marginTop: '10px',
          backgroundColor: ' #D3D3D3',
          backgroundImage: ' #D3D3D3',
          width: '1030px',
          alignItems: 'center',
        }}
      >
        <div className="container" className="p-3 mb-2 bg-danger text-white">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Expenses</h4>
            </div>
            <div className="col-lg-3 mt-2 ">
              <input
                style={{
                  backgroundColor: '#fff',
                  outline: 'none',
                  borderColor: 'red',
                  borderRadius: '20px',
                  color: 'black',
                }}
                className="form-control"
                type="search"
                placeholder="Search Expenses"
                name="searchQuery"
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>
        </div>

        <table
          style={{ marginTop: '30px' }}
          className="table table-striped table-hover"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Category</th>

              <th scope="col">Action</th>
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

                <td>
                  <button className="btn-grad1">
                    <a
                      href={`/editE/${expenses._id}`}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                  </button>
                  &nbsp;
                  <button className="btn-grad2">
                    <a
                      href="#"
                      onClick={() => this.onDelete(expenses._id)}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </button>
                  &nbsp;
                  <button
                    className="btn-grad8"
                    onClick={() =>
                      this.pdfGenerate(
                        expenses.topic,
                        expenses.amount,
                        expenses.date,
                        expenses.category,
                        expenses.description,
                        expenses.bankAccountNumber,
                        expenses.email,
                        expenses.phoneNumber
                      )
                    }
                  >
                    &nbsp;Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
