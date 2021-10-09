import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import axios from 'axios';
import { withRouter } from 'react-router';
import AddExpenseBG from '../../../../images/addexpense.jpg';

class ExpenseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expense: {},
    };
  }

  componentDidMount() {
    const id = this.props.match?.params.id;

    axios.get(`/expense/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          expense: res.data.expense,
          init: 1,
        });

        console.log(this.state.expense);
      }
    });
  }

  render() {
    const {
      topic,
      amount,
      date,
      category,
      description,
      bankAccountNumber,
      email,
      phoneNumber,
    } = this.state.expense;
    return (
      <div
        style={{
          backgroundImage: `url(${AddExpenseBG})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          color: '#fff',
          paddingLeft: '20px',
          paddingRight: '20px',
          marginBottom: '50px',
        }}
      >
        <AdminNavBar />
        <div
          style={{ marginTop: '20px' }}
          className="container"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            maxWidth: '1200px',
            marginTop: '50px',
            paddingBottom: '50px',
            paddingLeft: '180px',
            paddingTop: '50px',
            fontSize: '20px',
          }}
        >
          <dl className="row">
            <dt className="col-sm-4">Topic</dt>
            <dd className="col-sm-8">{topic}</dd>

            <dt className="col-sm-4">Amount</dt>
            <dd className="col-sm-8">{amount}</dd>

            <dt className="col-sm-4">Date</dt>
            <dd className="col-sm-8">{date}</dd>

            <dt className="col-sm-4">Category</dt>
            <dd className="col-sm-8">{category}</dd>

            <dt className="col-sm-4">Description</dt>
            <dd className="col-sm-8">{description}</dd>

            <dt className="col-sm-4">Bank Account Number</dt>
            <dd className="col-sm-8">{bankAccountNumber}</dd>

            <dt className="col-sm-4">Email</dt>
            <dd className="col-sm-8">{email}</dd>

            <dt className="col-sm-4">Phone Number</dt>
            <dd className="col-sm-8">{phoneNumber}</dd>
          </dl>
        </div>
        <div style={{ paddingTop: '50px' }}></div>
      </div>
    );
  }
}

export default withRouter(ExpenseDetails);
