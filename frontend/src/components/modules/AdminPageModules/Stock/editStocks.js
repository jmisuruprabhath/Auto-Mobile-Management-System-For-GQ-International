import React, { Component } from "react";
import axios from "axios";
import AddExpenseBG from "../../../../images/addexpense.jpg";

import { withRouter } from "react-router";

class editStocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemCode: "",
      Category: "",
      Quantity: "",
      //TotalNumberOfItems:""

      /** */
      errors: {},
      errorsC: {},
      error: {},
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  /** */
  formValidation = () => {
    const { ItemCode, Category, Quantity } = this.state;
    let isValid = true;
    const errors = {};
    const error = {};
    const errorsC = {};

    if (ItemCode.trim().length < 7) {
      error["itemCodeLength"] = "Item code must be in length 8 or higher";
      isValid = false;
    }

    if (!ItemCode.match(/^[A-Z]{4,}[0-9]{3,}$/)) {
      error["itemCodePattern"] =
        "Code should include at least 4 uppercase letters and at least 3 numbers";
      isValid = false;
    }

    if (!ItemCode) {
      error["itemCodeInput"] = "Item code Field is EMPTY!";
      isValid = false;
    }

    if (!Category) {
      errorsC["categoryInput"] = "Category Field is EMPTY!";
      isValid = false;
    }

    if (!Category.match(/^[a-z A-Z]*$/)) {
      errorsC["categoryInputPattern"] =
        "Category must contain characters only!";
      isValid = false;
    }

    if (!Quantity) {
      errors["QuantityInput"] = "Quantity Field is EMPTY!";
      isValid = false;
    }

    if (!Quantity.match(/^[0-9]*$/)) {
      errors["QuantityInputPattern"] =
        "Quantity Field can contain numbers only!";
      isValid = false;
    }

    this.setState({ errors: errors, error: error, errorsC: errorsC });
    return isValid;
  };
  /** */

  onSubmit = (e) => {
    e.preventDefault();
    /** */
    const isValid = this.formValidation();
    if (isValid) {
      const id = this.props.match.params.id;

      const { ItemCode, Category, Quantity /*,TotalNumberOfItems*/ } =
        this.state;

      const data = {
        ItemCode: ItemCode,
        Category: Category,
        Quantity: Quantity,
        // TotalNumberOfItems:0
      };

      console.log(data);

      axios.put(`/stock/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert("Stock Details Updated Successfully!");
          this.setState({
            ItemCode: "",
            Category: "",
            Quantity: "",
            //  TotalNumberOfItems:""
          });
        }
      });
    }
  };
  componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      const id = this.props.match.params.id;

      axios.get(`/stock/${id}`).then((res) => {
        if (res.data.success) {
          this.setState({
            ItemCode: res.data.stock.ItemCode,
            Category: res.data.stock.Category,
            Quantity: res.data.stock.Quantity,
            //  TotalNumberOfItems:res.data.stock.TotalNumberOfItems
          });

          console.log(this.state.stock);
        }
      });
    }
  }

  render() {
    const { errors } = this.state;
    const { error } = this.state;
    const { errorsC } = this.state;
    return (
      <div
        style={{
          margin: "40px",
          backgroundColor: "#D3D3D3",
          width: "100%",
          borderRadius: "0px",
          marginTop: "-30px",
          marginLeft: "0px",
        }}
      >
        <div className="col-md-8 mt-4 mx-auto">
          <br />
          <br />
          <br />
          <button
            className="btn-grads"
            style={{
              marginLeft: "-130px",
              marginTop: "-100px",
              width: "160px",
            }}
          >
            <a
              href="/Stock"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              View Stocks
            </a>
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{
              marginTop: "-50px",
              color: "#B91717",
              fontWeight: "bolder",
            }}
          >
            Edit the stock details using the bellow form!
          </h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label
                style={{
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                Item Code
              </label>
              <input
                type="text"
                className="form-control"
                name="ItemCode"
                placeholder="Enter code"
                value={this.state.ItemCode}
                onChange={this.handleInputChange}
                readOnly
              />
              {Object.keys(error).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {error[key]}
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label
                style={{
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                Category
              </label>
              <input
                type="text"
                className="form-control"
                name="Category"
                placeholder="Enter code"
                value={this.state.Category}
                onChange={this.handleInputChange}
                readOnly
              />

              {Object.keys(errorsC).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {errorsC[key]}
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label
                style={{
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                name="Quantity"
                placeholder="Enter code"
                value={this.state.Quantity}
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
            <button
              className="btn-grads"
              type="submit"
              style={{ marginTop: "15px", marginBottom: "150px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp;Update
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(editStocks);
