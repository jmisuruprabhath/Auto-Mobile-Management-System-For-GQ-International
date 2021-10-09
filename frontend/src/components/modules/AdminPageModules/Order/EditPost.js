import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "react-router";

class editPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order_id: "",
      cus_id: "",
      item_id: "",
      date: "",
      status: "",
      amount: "",
      total: "",

      //errors
      errors: {},
      error: {},
      error2: {},
      error3: {},
      error4: {},
    };
  }

  formValidation = () => {
    const { order_id, cus_id, item_id, amount, total } = this.state;
    let isValid = true;
    const errors = {};
    const error = {};
    const error2 = {};
    const error3 = {};
    const error4 = {};

    //customer validations
    if (cus_id.trim().length < 6) {
      errors["customerIDLength"] = "customer id must be in length 6 or higher";
      isValid = false;
    }
    if (!cus_id) {
      errors["customerIDInput"] = "Customer Id Field is EMPTY!";
      isValid = false;
    }

    //item id validations
    if (item_id.trim().length < 6) {
      error2["itemIDLength"] = "item id must be in length 6 or higher";
      isValid = false;
    }
    if (!item_id) {
      error2["itemIDInput"] = "item Id Field is EMPTY!";
      isValid = false;
    }

    //Amount validations
    if (!amount) {
      error3["amountInput"] = "amount Field is EMPTY!";
      isValid = false;
    }

    //total validations
    if (!total) {
      error4["totalInput"] = "Total Field is EMPTY!";
      isValid = false;
    }

    this.setState({
      errors: errors,
      error: error,
      error2: error2,
      error3: error3,
      error4: error4,
    });
    return isValid;
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.formValidation();
    if (isValid) {
      const id = this.props.match.params.id;
      const { order_id, cus_id, item_id, date, status, amount, total } =
        this.state;

      const data = {
        order_id: order_id,
        cus_id: cus_id,
        item_id: item_id,
        date: date,
        status: status,
        amount: amount,
        total: total,
      };

      console.log(data);

      axios.put(`http://localhost:8000/post/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert("Post updated succesfully");
          this.setState({
            order_id: "",
            cus_id: "",
            item_id: "",
            date: "",
            status: "",
            amount: "",
            total: "",
          });
        }
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          order_id: res.data.post.order_id,
          cus_id: res.data.post.cus_id,
          item_id: res.data.post.item_id,
          date: res.data.post.date,
          status: res.data.post.status,
          amount: res.data.post.amount,
          total: res.data.post.total,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    const { errors } = this.state;
    const { error } = this.state;
    const { error2 } = this.state;
    const { error3 } = this.state;
    const { error4 } = this.state;

    return (
      <div
        className="card"
        style={{
          borderRadius: "0px",
          backgroundColor: " #D3D3D3",
          backgroundImage: "#D3D3D3",
          width: "104%",
          alignItems: "center",
          marginLeft: "-40px",
        }}
      >
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Order</h1>

          <div style={{ marginLeft: "500px" }}>
            <button className="btn-grad">
              <a
                href="/orders"
                style={{ textDecoration: "none", color: "white" }}
              >
                Back to table
              </a>
            </button>
          </div>

          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Order ID</label>
              <input
                type="text"
                className="form-control"
                name="order_id"
                placeholder="Enter id"
                value={this.state.order_id}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Customer ID</label>
              <input
                type="text"
                className="form-control"
                name="cus_id"
                placeholder="Enter id"
                value={this.state.cus_id}
                onChange={this.handleInputChange}
              />

              {Object.keys(errors).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {errors[key]}
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Item ID</label>
              <input
                type="text"
                className="form-control"
                name="item_id"
                placeholder="Enter id"
                value={this.state.item_id}
                onChange={this.handleInputChange}
              />

              {Object.keys(error2).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {error2[key]}
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Date</label>
              <input
                type="text"
                className="form-control"
                name="date"
                placeholder="Enter date"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Status</label>
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Enter status"
                value={this.state.status}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Amount</label>
              <input
                type="number"
                className="form-control"
                name="amount"
                placeholder="Enter amount"
                value={this.state.amount}
                onChange={this.handleInputChange}
              />

              {Object.keys(error3).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {error3[key]}
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Total</label>
              <input
                type="number"
                className="form-control"
                name="total"
                placeholder="Enter total"
                value={this.state.total}
                onChange={this.handleInputChange}
              />

              {Object.keys(error4).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {error4[key]}
                  </div>
                );
              })}
            </div>

            <button
              className="btn-grad"
              type="submit"
              style={{ marginTop: "15px", marginBottom: "20px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp;update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(editPost);
