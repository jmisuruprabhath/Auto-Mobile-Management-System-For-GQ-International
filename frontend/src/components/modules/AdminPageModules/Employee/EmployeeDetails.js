import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/employee/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          employee: res.data.employee,
        });

        console.log(this.state.employee);
      }
    });
  }
  render() {
    const { FullName, Emp_ID, Address, Email, Phone } = this.state.employee;

    return (
      <div
        className="card"
        style={{
          marginTop: "0px",
          alignItems: "center",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            marginLeft: "50px",
            textAlign: "center",
            marginRight: "200px",
          }}
        >
          &nbsp;&nbsp;&nbsp;
          <h4 style={{ color: "blue", marginRight: "100px" }}>{FullName}</h4>
          <hr />
          <dl className="row">
            <dt className="col-sm-3">Employee ID</dt>
            <dd className="col-sm-9">{Emp_ID}</dd>
            <hr />
            <dt className="col-sm-3">Address</dt>
            <dd className="col-sm-9">{Address}</dd>
            <hr />
            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{Email}</dd>
            <hr />
            <dt className="col-sm-3">Phone</dt>
            <dd className="col-sm-9">{Phone}</dd>
          </dl>
        </div>
        <button
          className="btn-grad"
          style={{ margin: "20px", marginLeft: "400px", float: "right" }}
        >
          {" "}
          <a
            href="/allEmp"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Back To Dashboard
          </a>
        </button>
      </div>
    );
  }
}
export default withRouter(EmployeeDetails);
