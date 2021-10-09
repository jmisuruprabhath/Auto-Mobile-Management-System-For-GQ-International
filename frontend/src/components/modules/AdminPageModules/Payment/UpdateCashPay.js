import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-date-picker";
import "./updateCashPay.css";
import Allbtns from "./AllBtns";
import { withRouter } from "react-router";

class UpdateCashPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _is: "",
      date: "",
      cusName: "",
      contactNo: "",
      address: "",
      email: "",
      itemCode1: "",
      qty1: "",
      description1: "",
      unitPrice1: "",
      price1: "",

      itemCode2: "",
      qty2: "",
      description2: "",
      unitPrice2: "",
      price2: "",

      itemCode3: "",
      qty3: "",
      description3: "",
      unitPrice3: "",
      price3: "",
      subTot: "",
      discount: "",
      totalAmount: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrice1 = this.handlePrice1.bind(this);
    this.handlePrice2 = this.handlePrice2.bind(this);
    this.handlePrice3 = this.handlePrice3.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handlePrice1 = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      price1: value,
    });
  };

  handlePrice2 = (e) => {
    this.setState({
      price2: this.unitPrice2 * this.qty2,
    });
  };

  handlePrice3 = (e) => {
    this.setState({
      price3: this.unitPrice3 * this.qty3,
    });
  };

  handleTotal = (e) => {
    this.setState({
      totalAmount: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const {
      date,
      cusName,
      contactNo,
      address,
      email,
      itemCode1,
      qty1,
      description1,
      unitPrice1,
      itemCode2,
      qty2,
      description2,
      unitPrice2,
      itemCode3,
      qty3,
      description3,
      unitPrice3,
      discount,
    } = this.state;

    const data = {
      date: date,
      cusName: cusName,
      contactNo: contactNo,
      address: address,
      email: email,
      itemCode1: itemCode1,
      qty1: qty1,
      description1: description1,
      unitPrice1: unitPrice1,
      price1: unitPrice1 * qty1,

      itemCode2: itemCode2,
      qty2: qty2,
      description2: description2,
      unitPrice2: unitPrice2,
      price2: unitPrice2 * qty2,

      itemCode3: itemCode3,
      qty3: qty3,
      description3: description3,
      unitPrice3: unitPrice3,
      price3: unitPrice3 * qty3,
      discount: discount,
      totalAmount:
        unitPrice1 * qty1 + unitPrice2 * qty2 + unitPrice3 * qty3 - discount,
    };

    console.log(data);
    axios.put(`/cashPay/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Cash Payments Updadted Sucessfully");
        this.setState({
          date: "",
          cusName: "",
          contactNo: "",
          address: "",
          email: "",
          itemCode1: "",
          qty1: "",
          description1: "",
          unitPrice1: "",
          price1: "",

          itemCode2: "",
          qty2: "",
          description2: "",
          unitPrice2: "",
          price2: "",

          itemCode3: "",
          qty3: "",
          description3: "",
          unitPrice3: "",
          price3: "",
          subTot: "",
          discount: "",
          totalAmount: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/cashPay/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          _id: res.data.cash._id,
          date: res.data.cash.date,
          cusName: res.data.cash.cusName,
          contactNo: res.data.cash.contactNo,
          address: res.data.cash.address,
          email: res.data.cash.email,
          itemCode1: res.data.cash.itemCode1,
          qty1: res.data.cash.qty1,
          description1: res.data.cash.description1,
          unitPrice1: res.data.cash.unitPrice1,
          price1: res.data.cash.price1,

          itemCode2: res.data.cash.itemCode2,
          qty2: res.data.cash.qty2,
          description2: res.data.cash.description2,
          unitPrice2: res.data.cash.unitPrice2,
          price2: res.data.cash.price2,

          itemCode3: res.data.cash.itemCode3,
          qty3: res.data.cash.qty3,
          description3: res.data.cash.description3,
          unitPrice3: res.data.cash.unitPrice3,
          price3: res.data.cash.price3,
          subTot: res.data.cash.subTot,
          discount: res.data.cash.discount,
          totalAmount: res.data.cash.totalAmount,
        });

        console.log(this.state.cash);
      }
    });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="card">
          <Allbtns />
          <Form>
            <div>
              <div class="page-header text-blue-d2">
                <h1 class="page-title text-secondary-d1">
                  &nbsp;&nbsp; Invoice
                </h1>

                <div class="page-tools">
                  {/* <div class="action-buttons">
                                    <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                                        <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                        Print
                                    </a>
                                    <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                                        <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                                        Export
                                    </a>
                                </div> */}
                </div>
              </div>

              <div>
                <div class="row mt-4">
                  <div class="col-12 col-lg-10 offset-lg-1">
                    <div class="row">
                      <div class="col-12">
                        <div class="text-center text-150">
                          <span class="text-default-d3">
                            GQ International - Edit Cash Payment
                          </span>
                        </div>
                      </div>
                    </div>

                    <hr class="row brc-default-l1 mx-n1 mb-4" />

                    <div class="row">
                      <div class="col-sm-6">
                        <span class="text-600 text-90">
                          <Form.Group as={Row}>
                            <Form.Label
                              column
                              sm={5}
                              style={{ color: "black" }}
                            >
                              Customer Name :{" "}
                            </Form.Label>
                            <Col sm={5}>
                              <input
                                type="text"
                                className="form-control"
                                name="cusName"
                                value={this.state.cusName}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row}>
                            <Form.Label
                              column
                              sm={5}
                              style={{ color: "black" }}
                            >
                              Contact Number :{" "}
                            </Form.Label>
                            <Col sm={5}>
                              <input
                                type="number"
                                className="input"
                                className="form-control"
                                name="contactNo"
                                value={this.state.contactNo}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row}>
                            <Form.Label
                              column
                              sm={5}
                              style={{ color: "black" }}
                            >
                              Address :{" "}
                            </Form.Label>
                            <Col sm={5}>
                              <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row}>
                            <Form.Label
                              column
                              sm={5}
                              style={{ color: "black" }}
                            >
                              email :{" "}
                            </Form.Label>
                            <Col sm={5}>
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                          </Form.Group>
                        </span>
                      </div>

                      <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">
                          <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                            Invoice
                          </div>

                          <div class="my-2" style={{ color: "black" }}>
                            {/* <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> */}
                            <span class="text-600 text-90">No:</span>
                            {this.state._id}
                          </div>

                          <div class="my-2" style={{ color: "black" }}>
                            {/* <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>  */}
                            <span class="text-600 text-90">Issue Date:</span>
                            <br />
                            <input
                              type="text"
                              className="form-control"
                              name="date"
                              value={this.state.date}
                              onChange={this.handleInputChange}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <div class="row text-600 text-white bgc-default-tp1 py-25">
                        <div class="d-none d-sm-block col-1">#</div>
                        <div class="col-9 col-sm-3">Item Code</div>
                        <div class="d-none d-sm-block col-4 col-sm-1">Qty</div>
                        <div class="d-none d-sm-block col-sm-3">
                          Description
                        </div>
                        <div class="d-none d-sm-block col-sm-2">Unit Price</div>
                        <div class="col-2">Amount</div>
                      </div>

                      <div class="text-95 text-secondary-d3">
                        <div class="row mb-2 mb-sm-0 py-25">
                          <div class="d-none d-sm-block col-1">1</div>

                          <div class="col-9 col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              name="itemCode1"
                              value={this.state.itemCode1}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-4 col-sm-1">
                            <input
                              type="number"
                              min="1"
                              className="form-control"
                              name="qty1"
                              value={this.state.qty1}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              name="description1"
                              value={this.state.description1}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-sm-2">
                            <input
                              type="text"
                              className="form-control"
                              name="unitPrice1"
                              value={this.state.unitPrice1}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="col-2">
                            <input
                              type="text"
                              className="form-control"
                              name="price1"
                              value={
                                this.state.qty1 * this.state.unitPrice1 + 10
                              }
                              onChange={this.handlePrice1}
                            />
                          </div>
                        </div>

                        <div class="row mb-2 mb-sm-0 py-25">
                          <div class="d-none d-sm-block col-1">2</div>

                          <div class="col-9 col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              name="itemCode2"
                              value={this.state.itemCode2}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-4 col-sm-1">
                            <input
                              type="number"
                              min="1"
                              className="form-control"
                              name="qty2"
                              value={this.state.qty2}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              name="description2"
                              value={this.state.description2}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-sm-2">
                            <input
                              type="text"
                              className="form-control"
                              name="unitPrice2"
                              value={this.state.unitPrice2}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="col-2">
                            <input
                              type="text"
                              className="form-control"
                              name="price2"
                              value={this.state.qty2 * this.state.unitPrice2}
                              onChange={this.handlePrice2}
                            />
                          </div>
                        </div>

                        <div class="row mb-2 mb-sm-0 py-25">
                          <div class="d-none d-sm-block col-1">3</div>

                          <div class="col-9 col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              name="itemCode3"
                              value={this.state.itemCode3}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-4 col-sm-1">
                            <input
                              type="number"
                              min="1"
                              className="form-control"
                              name="qty3"
                              value={this.state.qty3}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              name="description3"
                              value={this.state.description3}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="d-none d-sm-block col-sm-2">
                            <input
                              type="text"
                              className="form-control"
                              name="unitPrice3"
                              value={this.state.unitPrice3}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div class="col-2">
                            <input
                              type="text"
                              className="form-control"
                              name="price3"
                              value={this.state.qty3 * this.state.unitPrice3}
                              onChange={this.handlePrice3}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row border-b-2 brc-default-l2"></div>

                      <div class="row mt-3">
                        <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0"></div>

                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                          <div class="row my-2">
                            <div class="col-7 text-right">SubTotal</div>
                            <div class="col-5">
                              <span class="text-120 text-secondary-d1">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subprice"
                                  value={
                                    this.state.qty1 * this.state.unitPrice1 +
                                    this.state.qty2 * this.state.unitPrice2 +
                                    this.state.qty3 * this.state.unitPrice3
                                  }
                                  onChange={this.handleInputChange}
                                />
                              </span>
                            </div>
                          </div>

                          <div class="row my-2">
                            <div class="col-7 text-right">Discount</div>
                            <div class="col-5">
                              <span class="text-110 text-secondary-d1">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="discount"
                                  value={this.state.discount}
                                  onChange={this.handleInputChange}
                                />
                              </span>
                            </div>
                          </div>

                          <div class="row my-1 align-items-center bgc-primary-l3 p-1">
                            <div class="col-7 text-right">
                              <b>Total Amount</b>
                            </div>
                            <div class="col-5">
                              <span class="text-150 text-success-d3 opacity-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="totAmount"
                                  value={
                                    this.state.qty1 * this.state.unitPrice1 +
                                    this.state.qty2 * this.state.unitPrice2 +
                                    this.state.qty3 * this.state.unitPrice3 -
                                    this.state.discount
                                  }
                                  onChange={this.handleTotal}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div>
                        <span class="text-secondary-d1 text-105">
                          Thank you for your business
                        </span>
                        <a
                          href="#"
                          class="btn btn-outline px-4 float-right mt-3 mt-lg-0"
                          style={{
                            backgroundColor: "#AF2626",
                            color: "white",
                            float: "right",
                          }}
                          onClick={this.onSubmit}
                        >
                          Update Payment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateCashPay);
