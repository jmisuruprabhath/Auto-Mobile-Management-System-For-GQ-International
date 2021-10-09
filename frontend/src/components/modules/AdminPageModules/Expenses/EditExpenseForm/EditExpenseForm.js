import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './EditExpenseForm.css';
import '../../Employee/styleme.css';

const initialState = {
  topic: '',
  amount: '',
  amountLetterError: '',
  date: '',
  category: '',
  description: '',
  bankAccountNumber: '',
  email: '',
  phoneNumber: '',
  topicError: '',
  amountError: '',
  dateError: '',
  categoryError: '',
  descriptionError: '',
  banknumberError: '',
  emailError: '',
  emailAtError: '',
  emailDotError: '',
  phoneNumberError: '',
  phoneNumberLetterError: '',
  phoneNumberLimitError: '',
};

class EditExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // Track and update the state when changing the content
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  // Validations for the Edit Expense Form
  validate = () => {
    let topicError = '';
    let amountError = '';
    let amountLetterError = '';
    let dateError = '';
    let categoryError = '';
    let descriptionError = '';
    let banknumberError = '';
    let emailError = '';
    let emailAtError = '';
    let emailDotError = '';
    let phoneNumberError = '';
    let phoneNumberLimitError = '';
    let phoneNumberLetterError = '';

    if (!this.state?.topic) {
      topicError = '* Topic is required';
    }

    if (!this.state?.amount) {
      amountError = '* Amount is required';
    }

    if (/[/^[a-zA-Z]/.test(this.state.amount)) {
      amountLetterError = '* Amount should contain only Digits';
    }

    if (!this.state?.date) {
      dateError = '* Date is required';
    }

    if (!this.state?.category) {
      categoryError = '* Category is required';
    }

    if (!this.state?.description) {
      descriptionError = '* Description is required';
    }

    if (!this.state?.bankAccountNumber) {
      banknumberError = '* Bank Account Number is required';
    }

    if (!this.state?.email) {
      emailError = '* Email is required';
    }

    if (!this.state.email?.includes('@')) {
      emailAtError = '* Email must contain an "@" sign';
    }

    if (!this.state.email?.includes('.')) {
      emailDotError = '* Email must contain a "." sign';
    }

    if (!this.state?.phoneNumber) {
      phoneNumberError = '* Phone Number is required';
    }

    if (!(this.state?.phoneNumber.length <= 10)) {
      phoneNumberLimitError =
        '* Phone Number cannot contain more than 10 digits';
    }

    if (/[/^[a-zA-Z]/.test(this.state.phoneNumber)) {
      phoneNumberLetterError = '* Phone Number should only contain Digits';
    }

    if (
      emailError ||
      emailAtError ||
      emailDotError ||
      topicError ||
      amountError ||
      amountLetterError ||
      dateError ||
      categoryError ||
      descriptionError ||
      banknumberError ||
      phoneNumberError ||
      phoneNumberLimitError ||
      phoneNumberLetterError
    ) {
      this.setState({
        emailError,
        emailAtError,
        emailDotError,
        topicError,
        amountError,
        amountLetterError,
        dateError,
        categoryError,
        descriptionError,
        phoneNumberError,
        banknumberError,
        phoneNumberLimitError,
        phoneNumberLetterError,
      });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match?.params.id;

    const isValid = this.validate();

    const {
      topic,
      amount,
      date,
      category,
      description,
      bankAccountNumber,
      email,
      phoneNumber,
    } = this.state;

    const data = {
      topic: topic,
      amount: amount,
      date: date,
      category: category,
      description: description,
      bankAccountNumber: bankAccountNumber,
      email: email,
      phoneNumber: phoneNumber,
    };

    if (isValid) {
      axios.put(`/expense/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert('Expense Updated Successfully!');
          this.setState({
            topic: '',
            amount: '',
            date: '',
            category: '',
            description: '',
            bankAccountNumber: '',
            email: '',
            phoneNumber: '',
          });
        }
      });

      //Clear the errror messages in the form
      this.setState(initialState);
    }
  };

  componentDidMount() {
    const id = this.props.match?.params.id;

    axios.get(`/expense/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          topic: res.data.expense.topic,
          amount: res.data.expense.amount,
          date: res.data.expense.date,
          category: res.data.expense.category,
          description: res.data.expense.description,
          bankAccountNumber: res.data.expense.bankAccountNumber,
          email: res.data.expense.email,
          phoneNumber: res.data.expense.phoneNumber,
          init: 1,
        });
      }
    });
  }

  render() {
    return (
      <div className="editPageStyle" style={{ color: '#fff' }}>
        <h1
          className="h3 mb-3 font-weight-normal"
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          Edit Expense
        </h1>

        <form
          className="needs-validation"
          style={{
            backgroundColor: '#D3D3D3',
            width: '900px',
            paddingLeft: '70px',
            paddingRight: '70px',
            marginRight: '20px',
            marginLeft: '85px',
            paddingTop: '50px',
            paddingBottom: '20px',
          }}
        >
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Topic
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="topic"
              placeholder="Enter Topic"
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red' }}>{this.state.topicError}</div>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="amount"
              placeholder="Enter Amount"
              value={this.state.amount}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red' }}>{this.state.amountError}</div>
            <div style={{ color: 'red' }}>{this.state.amountLetterError}</div>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Date
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="date"
              placeholder="Enter Date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red', marginTop: '15px' }}>
              {this.state.dateError}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Category
            </label>
            <br />
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleInputChange}
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
            >
              <option id="0" style={{ backgroundColor: '#fff' }}>
                Electricity Bills
              </option>
              <option id="1" style={{ backgroundColor: '#fff' }}>
                Internet and Telephone Bills
              </option>
              <option id="2" style={{ backgroundColor: '#fff' }}>
                Maintainance Costs
              </option>
              <option id="3" style={{ backgroundColor: '#fff' }}>
                Employee Costs
              </option>
              <option id="1" style={{ backgroundColor: '#fff' }}>
                Inventory Costs
              </option>
            </select>
            <br />
            <div style={{ color: 'red' }}>{this.state.categoryError}</div>
          </div>

          <br />
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red' }}>{this.state.descriptionError}</div>
          </div>

          <br />
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Bank Account Number
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="bankAccountNumber"
              placeholder="Enter Bank Account Number"
              value={this.state.bankAccountNumber}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red' }}>{this.state.banknumberError}</div>
          </div>

          <br />
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Email
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red' }}>{this.state.emailError}</div>
            <div style={{ color: 'red' }}>{this.state.emailAtError}</div>
            <div style={{ color: 'red' }}>{this.state.emailDotError}</div>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label
              style={{
                marginBottom: '10px',
                fontSize: '20px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#fff',
                borderColor: 'red',
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                color: '#000',
                width: '650px',
              }}
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />
            <br />
            <div style={{ color: 'red' }}>{this.state.phoneNumberError}</div>
            <div style={{ color: 'red' }}>
              {this.state.phoneNumberLimitError}
            </div>
            <div style={{ color: 'red' }}>
              {this.state.phoneNumberLetterError}
            </div>
            <br />
          </div>

          <center>
            <Link
              class="btn-grad4"
              role="button"
              aria-pressed="true"
              style={{ margin: '30px', fontSize: '20px', padding: '12px' }}
              onClick={this.onSubmit}
            >
              Update Expense
            </Link>
          </center>
          <br />
        </form>
        <div style={{ paddingTop: '50px' }}></div>
      </div>
    );
  }
}

export default withRouter(EditExpenseForm);
