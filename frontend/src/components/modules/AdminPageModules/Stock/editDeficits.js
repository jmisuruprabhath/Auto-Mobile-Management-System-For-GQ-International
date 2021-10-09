import React, { Component } from "react";
import axios from "axios";
import AddExpenseBG from "../../../../images/addexpense.jpg";

import { withRouter } from "react-router";

class editDeficits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DeficitCode: "",
      Category: "",
      Color: "",
      RequiredQuantity: "",

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
    const { DeficitCode, Category, Color, RequiredQuantity } = this.state;
    let isValid = true;
    const errors = {};
    const errorsC = {};
    const error = {};

    if (!Category) {
      errors["CategoryInput"] = "Category Field is EMPTY!";
      isValid = false;
    }
    if (!Category.match(/^[a-z A-Z]*$/)) {
      errors["CategoryInput1"] = "Category Field can contains characters only!";
      isValid = false;
    }
    if (!Color) {
      errorsC["ColorInput"] = "Color Field is EMPTY!";
      isValid = false;
    }
    if (!Color.match(/^[a-z A-Z]*$/)) {
      errorsC["ColorInput2"] = "Color Field can contain characters only!";
      isValid = false;
    }
    if (Color.trim().length < 3) {
      errorsC["ColorInput3"] =
        "Color Field should contain at least 3 characters!";
      isValid = false;
    }

    if (!RequiredQuantity) {
      error["RequiredQuantityInput7"] = "Required quantity Field is EMPTY!";
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

      const { DeficitCode, Category, Color, RequiredQuantity } = this.state;

      const data = {
        DeficitCode: DeficitCode,
        Category: Category,
        Color: Color,
        RequiredQuantity: RequiredQuantity,
      };

      console.log(data);

      axios.put(`/deficit/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert("Deficit Details Updated Successfully!");
          this.setState({
            DeficitCode: "",
            Category: "",
            Color: "",
            RequiredQuantity: "",
          });
        }
      });
    }
  };
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/deficit/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          DeficitCode: res.data.deficit.DeficitCode,
          Category: res.data.deficit.Category,
          Color: res.data.deficit.Color,
          RequiredQuantity: res.data.deficit.RequiredQuantity,
        });

        console.log(this.state.deficit);
      }
    });
  }

  render() {
    const { errors } = this.state;
    const { errorsC } = this.state;
    const { error } = this.state;

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
              href="/Deficit"
              style={{
                textDecoration: "none",
                color: "White",
                fontWeight: "bold",
              }}
            >
              View Deficits
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
            Edit the details using the bellow form!
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
                Deficit Code
              </label>
              <input
                type="text"
                className="form-control"
                name="DeficitCode"
                placeholder="Enter code"
                value={this.state.DeficitCode}
                onChange={this.handleInputChange}
                readOnly
              />
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
              {Object.keys(errors).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {errors[key]}
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
                Color
              </label>
              <input
                type="text"
                className="form-control"
                name="Color"
                placeholder="Enter code"
                value={this.state.Color}
                onChange={this.handleInputChange}
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
                RequiredQuantity
              </label>
              <input
                type="text"
                className="form-control"
                name="RequiredQuantity"
                placeholder="Enter code"
                value={this.state.RequiredQuantity}
                onChange={this.handleInputChange}
              />
              {Object.keys(error).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {error[key]}
                  </div>
                );
              })}
            </div>

            <button
              className="btn-grads"
              type="submit"
              style={{ marginTop: "15px" }}
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

export default withRouter(editDeficits);
