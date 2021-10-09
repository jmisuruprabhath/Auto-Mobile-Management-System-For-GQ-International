import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OnlinePayment.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "react-responsive-button";
import axios from "axios";
import AllBtns from "./AllBtns";
import "react-responsive-button/dist/index.css";
import { withRouter } from "react-router";

class UpdateOnlinePay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      orderID: "",
      cusID: "",
      productCode: "",
      amount: "",
      paySlip: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onChange = (date) => this.setState({ date });

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const { date, orderID, cusID, productCode, amount, paySlip } = this.state;

    const data = {
      date: date,
      orderID: orderID,
      cusID: cusID,
      productCode: productCode,
      amount: amount,
      paySlip: paySlip,
    };

    console.log(data);

    axios.put(`/onlinePay/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Payment Slip Updated");
        this.setState({
          _id: "",
          date: "",
          orderID: "",
          cusID: "",
          productCode: "",
          amount: "",
          paySlip: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/onlinePay/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          _id: res.data.post._id,
          date: res.data.post.date,
          orderID: res.data.post.orderID,
          cusID: res.data.post.cusID,
          productCode: res.data.post.productCode,
          amount: res.data.post.amount,
          paySlip: res.data.post.paySlip,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div
        className="card"
        style={{ backgroundColor: " #D3D3D3", backgroundImage: " #D3D3D3" }}
      >
        <AllBtns />
        <div className="paymentbg">
          <h2 className="title-payOnline">
            <b>Pay Online - Edit</b>
          </h2>

          <div className="form-bg">
            <div className="namelables">
              <Form>
                <Form.Group as={Row} className="lable-opay" controlId="orderId">
                  <Form.Label column sm={5}>
                    <b>
                      <h5>Date & Time</h5>
                    </b>
                  </Form.Label>
                  <Col sm={5}>
                    <input
                      className="form-control"
                      name="orderID"
                      value={this.state.date}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="lable-opay" controlId="orderId">
                  <Form.Label column sm={5}>
                    <b>
                      <h5>ID</h5>
                    </b>
                  </Form.Label>
                  <Col sm={5}>
                    <input
                      className="form-control"
                      name="orderID"
                      value={this.state._id}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="lable-opay" controlId="orderId">
                  <Form.Label column sm={5}>
                    <b>Order Number</b>
                  </Form.Label>
                  <Col sm={5}>
                    <input
                      type="text"
                      className="form-control"
                      name="orderID"
                      value={this.state.orderID}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="lable-opay" controlId="cusId">
                  <Form.Label column sm={5}>
                    <b>Customer ID</b>
                  </Form.Label>
                  <Col sm={5}>
                    <input
                      type="text"
                      className="form-control"
                      name="cusID"
                      value={this.state.cusID}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="lable-opay"
                  controlId="productCode"
                >
                  <Form.Label column sm={5}>
                    <b>Product Code</b>
                  </Form.Label>
                  <Col sm={5}>
                    <input
                      type="text"
                      className="form-control"
                      name="productCode"
                      value={this.state.productCode}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="lable-opay" controlId="amount">
                  <Form.Label column sm={5}>
                    <b>Amount</b>
                  </Form.Label>
                  <Col sm={5}>
                    <input
                      type="text"
                      className="form-control"
                      name="amount"
                      value={this.state.amount}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="lable-opay" controlId="paySlip">
                  <Form.Label column sm={5}>
                    <b>Pay Slip</b>
                  </Form.Label>
                  <Col sm={5}>
                    <div>
                      <input
                        className="form-control"
                        name="paySlip"
                        value={this.state.paySlip}
                        readOnly
                      />
                    </div>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="btn-submit">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button
                      type="submit"
                      variant="outline-dark"
                      style={{
                        marginBottom: "10px",
                        marginLeft: "300px",
                        borderRadius: "6px",
                      }}
                      onClick={this.onSubmit}
                    >
                      &nbsp;Update&nbsp;
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateOnlinePay);
