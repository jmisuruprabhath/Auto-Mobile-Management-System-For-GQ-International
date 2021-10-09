import React, { Component } from "react";
import "./addDebtor.css";
import axios from "axios";
import DatePicker from 'react-date-picker'
import DataTable from "react-data-table-component";
import { Row, Col, Form, Container } from "react-bootstrap";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Quantity",
    selector: (row) => row.quantity,
  },
  {
    name: "Unit Price",
    selector: (row) => row.unitprice,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
];

class CreatePreorder extends Component {
  constructor(props) {
    super(props);
    this.price = null;
    this.name = null;
    this.quantity = null;
    this.unitprice = null;
    this.DebtorID = null;
    this.TotalPrice = null;
    this.Date = null;

    this.rand = Math.random();
    this.state = {
      DebtorID: "",
      //id:"",
      // name: "",
      // price: null,
      goods: [],
      TotalPrice: "",
      Date: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    if (name == "name") {
      this.name = value;
      this.setState({
        name: value,
      });
    }
    if (name == "quantity") {
      this.quantity = value;
      this.setState({
        quantity: value,
      });
    }
    if (name == "unitprice") {
      this.unitprice = value;
      this.setState({
        unitprice: value,
      });
    }
    if (name == "price") {
      this.price = value;
      this.setState({
        price: value,
      });
    }
    if (name == "DebtorID") {
      this.state.DebtorID = value;
    }
    if (name == "TotalPrice") {
      this.state.TotalPrice = value;
    }
    if (name == "Date") {
      this.state.Date = value;
    }
  };

  addOrder(e) {
    e.preventDefault();

    this.price = parseFloat(this.unitprice * this.quantity);
    this.setState({
      goods: this.state.goods.concat({ name: this.name, quantity: this.quantity, unitprice: this.unitprice, price: this.price }),
    });
    this.setState({TotalPrice: this.TotalPrice += this.price});
  }

  removeOrder(e) {
    e.preventDefault();
    this.setState({ goods: []});
    this.setState({ TotalPrice: this.TotalPrice=0});

  }

  onSubmit(e) {
    console.log("test");

    const data = this.state;
    console.log(data);
    axios
      .post("/postor/save", data)
      .then((response) => {
        if (response.data.success) {
          this.setState({
            DebtorID: "",

            goods: [],
            TotalPrice:"",
            Date: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
    
  }

  render() {
    return (
      <div className="form-container" style={{ marginLeft: "0px" }}>
        <form className="form" noValidate>
          <button className="btn-grad4" style={{width:"80px", marginLeft:"700px"}}>
            {" "}
            <a href="/preorders" style={{ textDecoration: "none", color: "white" }}>
              Back
            </a>
          </button>
          <h1 className="form-h1">Add Pre-Order</h1>
          <div style={{marginBottom : "8px", marginLeft: "290px", borderRadius: "6px" , marginTop:"10px"}}>
                <input type="date"
                    className="form-control"
                    name="Date"
                    value={this.Date}
                    onChange={this.handleInputChange}/>  
          </div>
          <div className="form-inputs">
            <label className="form-label">Debtor ID</label>
            <input
              className="form-input"
              type="text"
              name="DebtorID"
              value={this.DebtorID}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-inputs">
            <Row>
              <Col>
                <label className="form-label">Item</label>
              </Col>
              <Col>
                <label className="form-label">Quantity</label>
              </Col>
              <Col>
                <label className="form-label">Unit Price</label>
              </Col>
              <Col>
                <label className="form-label">Price</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={this.name}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col>
                <input
                  className="form-input"
                  type="number"
                  name="quantity"
                  value={this.quantity}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col>
                <input
                  className="form-input"
                  type="number"
                  name="unitprice"
                  value={this.unitprice}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col>
                {" "}
                <input
                  className="form-input"
                  type="number"
                  name="price"
                  value={this.price}
                  onChange={this.handleInputChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  className="btn-grad1"
                  onClick={this.addOrder}
                  style={{ marginBottom: "10px", marginTop:"20px", width:"140px" }}
                >
                  Add Item
                  &nbsp;<i className="fas fa-plus"/>
                </button>
              </Col>
              <Col>
                <button
                  className="btn-grad2"
                  onClick={this.removeOrder}
                  style={{ marginBottom: "10px", width:"200px",marginTop:"20px" }}
                >
                  Remove All Items
                  &nbsp;<i className="fas fa-trash-alt"/>
                </button>
              </Col>
            </Row>
            {/* <label className="form-label">Price</label> */}
          </div>
          <DataTable id={this.rand} columns={columns} data={this.state.goods} />
          <br></br>
          <div className="form-inputs">
            <label className="form-label">Total</label>
            <input
              className="form-input"
              type="text"
              name="TotalPrice"
              value={this.TotalPrice}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            className="btn-grad4"
            type="submit"
            onClick={this.onSubmit}
            style={{ marginBottom: "18px", width:"100px", marginLeft:"680px" }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default CreatePreorder;
