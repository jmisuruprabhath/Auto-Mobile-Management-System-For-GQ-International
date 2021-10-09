import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";

import { withRouter } from "react-router";

class SalaryDeatils extends Component {
  constructor(props) {
    super(props);

    this.state = {
      esal: {},
    };
  }
  generatePDF = () => {
    const doc = new jsPDF("p", "pt", [520, 600]);
    doc.html(document.querySelector("#salDetails"), {
      callback: function (pdf) {
        pdf.save("Salary Detail");
      },
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/esal/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          esal: res.data.esal,
        });

        console.log(this.state.esal);
      }
    });
  }
  render() {
    const { FullName, Date, Work_Hours, Hourly_Rate, Total_Amount } =
      this.state.esal;

    return (
      <div
        className="card"
        style={{
          marginTop: "20px",
          alignItems: "center",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div className="detailscenter">
          <div className="gq" id="salDetails">
            <div style={{ marginTop: "20px", marginLeft: "10px" }}>
              &nbsp;&nbsp;&nbsp;
              <div className="card" style={{ border: "white" }}>
                <h4 style={{ color: "blue" }}>{FullName}</h4>

                <dl className="row">
                  <dt className="col-sm-3">Date</dt>
                  <dd className="col-sm-9">{Date}</dd>

                  <dt className="col-sm-3">Work_Hours</dt>
                  <dd className="col-sm-9">{Work_Hours}</dd>

                  <dt className="col-sm-3">Hourly_Rate</dt>
                  <dd className="col-sm-9">{Hourly_Rate}</dd>

                  <dt className="col-sm-3">Total_Amount</dt>
                  <dd className="col-sm-9">{Total_Amount}</dd>
                </dl>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <button
          className="btn-grad"
          style={{ margin: "20px", marginLeft: "400px", float: "right" }}
        >
          {" "}
          <a
            href="/viewSalary"
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
        <button
          className="btn-grad"
          style={{ margin: "20px", marginLeft: "400px", float: "right" }}
          onClick={this.generatePDF}
        >
          Generate Report
        </button>
      </div>
    );
  }
}

export default withRouter(SalaryDeatils);
