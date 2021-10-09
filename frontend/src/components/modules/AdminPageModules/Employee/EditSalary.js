import React, { Component } from "react";
import axios from "axios";
import { Label } from "reactstrap";
import "./styleme.css";

import { withRouter } from "react-router";

class EditSalary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      Date: "",
      Work_Hours: "",
      Hourly_Rate: "",
      Total_Amount: 0,
      errors: {},
      error1: {},
      error2: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleHourRate = this.handleHourRate.bind(this);
    this.handleWorkHours = this.handleWorkHours.bind(this);
  }

  componentWillMount() {
    const id = this.props.match.params.id;

    axios.get(`/esal/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          FullName: res.data.esal.FullName,
          Date: res.data.esal.Date,
          Work_Hours: res.data.esal.Work_Hours,
          Hourly_Rate: res.data.esal.Hourly_Rate,
          Total_Amount: res.data.esal.Total_Amount,
        });

        console.log(this.state.esal);
      }
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleFullName(e) {
    this.setState({
      FullName: e.target.value,
    });
  }

  handleDate(e) {
    this.setState({
      Date: e.target.value,
    });
  }

  handleHourRate(e) {
    this.setState({ Hourly_Rate: e.target.value });
  }

  handleWorkHours(e) {
    this.setState({ Work_Hours: e.target.value });
  }

  formValidation = () => {
    const { FullName, Date, Work_Hours, Hourly_Rate } = this.state;

    let isValid = true;
    const errors = {};
    const error1 = {};
    const error2 = {};

    if (!FullName.match(/^[a-z A-Z]*$/)) {
      error1["FullNamePattern"] = "FullNameD should contain characters only";
      isValid = false;
    }

    if (!FullName) {
      error1["FullNameInput"] = "FullName Field is EMPTY!";
      isValid = false;
    }
    if (!Work_Hours) {
      errors["Work_Hoursinput"] = " Field is EMPTY!";
      isValid = false;
    }
    if (!Work_Hours.match(/^[0-9]*$/)) {
      errors["Work_Hoursinput"] = "Work_Hours Field can contain numbers only";
      isValid = false;
    }
    if (!Hourly_Rate) {
      error2["Hourly_Ratenput"] = " Field is EMPTY!";
      isValid = false;
    }
    if (!Hourly_Rate.match(/^[0-9]*$/)) {
      error2["Hourly_Rateinput"] = "Hourly_Rate Field can contain numbers only";
      isValid = false;
    }
    this.setState({ errors: errors, error1: error1, error2: error2 });
    return isValid;
  };

  onSubmit(e) {
    e.preventDefault();
    const isValid = this.formValidation();
    if (isValid) {
      const id = this.props.match.params.id;
      let FullName = this.state.FullName;
      let Date = this.state.Date;
      let Work_Hours = this.state.Work_Hours;
      let Hourly_Rate = this.state.Hourly_Rate;
      let Total_Amount = Hourly_Rate * Work_Hours;
      console.log(Total_Amount);
      const self = this;
      axios
        .put(`/esal/update/${id}`, {
          FullName: FullName,
          Date: Date,
          Work_Hours: Work_Hours,
          Hourly_Rate: Hourly_Rate,
          Total_Amount: Total_Amount,
        })
        .then(function (response) {
          alert("Salary Updated.!");
          console.log(response);
          self.setState({
            FullName: "",
            Date: "",
            Work_Hours: "",
            Hourly_Rate: "",
            Total_Amount: "",
          });
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }
  }

  render() {
    const Total_Amount = this.state.Work_Hours * this.state.Hourly_Rate;
    const { errors } = this.state;
    const { error1 } = this.state;
    const { error2 } = this.state;
    return (
      <div
        className="card"
        style={{
          borderRadius: "3px",
          marginTop: "-10px",
          background: "#D3D3D3",
          width: "100%",
          alignItems: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "black",
        }}
      >
        <div className="col-md-8 mt-4 mx-auto">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ color: "#B91717" }}
          >
            Add Employee Salary
          </h1>
          <button className="btn-grad4" style={{ marginLeft: "670px" }}>
            <a
              href="/viewSalary"
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {" "}
              View Salary
            </a>
          </button>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="FullName"
                placeholder="Enter Employee Name "
                value={this.state.FullName}
                onChange={this.handleInputChange}
              />
              {Object.keys(error1).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {error1[key]}
                  </div>
                );
              })}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <Label for="exampleDate">Date</Label>
              <input
                type="text"
                className="form-control"
                name="Date"
                id="exampleDate"
                value={this.state.Date}
                onChange={this.handleInputChange}
                disabled
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Work_Hours</label>
              <input
                type="text"
                className="form-control"
                name="Work_Hours"
                placeholder="Enter Work_Hours "
                value={this.state.Work_Hours}
                onChange={this.handleWorkHours}
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
              <label style={{ marginBottom: "5px" }}>Hourly_Rate</label>
              <input
                type="text"
                className="form-control"
                name="Hourly_Rate"
                placeholder="Enter Hourly_Rate "
                value={this.state.Hourly_Rate}
                onChange={this.handleHourRate}
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
              <label style={{ marginBottom: "5px" }}> Total_Amount</label>
              <input
                type="text"
                className="form-control"
                name="Total_Amount"
                placeholder="Enter Hourly_Rate "
                value={Total_Amount}
                disabled
              />
            </div>

            <button
              className="btn-grads"
              type="submit"
              style={{
                marginTop: "15px",
                marginBottom: "10px",
                color: "white",
                marginLeft: "350px",
              }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square">&nbsp; Update</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditSalary);
