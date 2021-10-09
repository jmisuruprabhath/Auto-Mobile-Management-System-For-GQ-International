import React, { Component } from "react";
import axios from "axios";
import "./addDebtor.css";
//import {BrowserRouter as Router,Switch,Route } from "react-router-dom";

import { withRouter } from "react-router";

class PostDebtor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debtor: {},
    };
  }

  componentDidMount() {
    const id = this.props.match?.params.id;

    axios.get(`/postd/${id}`).then((res) => {
      if (res.data.succes) {
        this.setState({
          debtor: res.data.debtor,
        });

        console.log(this.state.debtor);
      }
    });
  }
  render() {
    const { _id, name, contact, address, guarantor, creditLimit, remarks } =
      this.state.debtor;

    return (
      <div
        style={{
          backgroundColor: "#C70039",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "white",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >
        <a
          href="/CR"
          style={{ textDecoration: "none", color: "white", alignSelf: "right" }}
        >
          <button class="input-btn">Back</button>
        </a>
        <div
          className="container"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            maxWidth: "1200px",
            marginTop: "10px",
            paddingBottom: "50px",
            paddingLeft: "180px",
            paddingTop: "50px",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginTop: "20px" }}>
            <dl className="row">
              <dt className="col-sm-4">Debtor ID:</dt>
              <dd className="col-sm-8">{_id}</dd>

              <dt className="col-sm-4">Name:</dt>
              <dd className="col-sm-8">{name}</dd>

              <dt className="col-sm-4">Contact:</dt>
              <dd className="col-sm-8">{contact}</dd>

              <dt className="col-sm-4">Address:</dt>
              <dd className="col-sm-8">{address}</dd>

              <dt className="col-sm-4">Guarantors:</dt>
              <dd className="col-sm-8">{guarantor}</dd>

              <dt className="col-sm-4">Credit Limit:</dt>
              <dd className="col-sm-8">{creditLimit}</dd>

              <dt className="col-sm-4">Remarks:</dt>
              <dd className="col-sm-8">{remarks}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDebtor);
