import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class deficitDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deficit: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/deficit/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          deficit: res.data.deficit,
        });

        console.log(this.state.deficit);
      }
    });
  }

  render() {
    const { DeficitCode, Category, Color, RequiredQuantity } =
      this.state.deficit;
    return (
      <div
        className="card"
        style={{
          marginTop: "0px",
          alignItems: "center",
          width: "100%",
          height: "95%",
        }}
      >
        <br />
        <button
          className="btn-grads"
          style={{
            marginLeft: "-800px",
            marginTop: "0px",
            width: "160px",
            height: "50px",
          }}
        >
          <a
            href="/Deficit"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            View Deficits
          </a>
        </button>
        <br />
        <br />
        <h4 style={{ color: "black", fontSize: "36px" }}>
          {DeficitCode} - Summarized Details
        </h4>
        <hr />

        <dl className="row" style={{ color: "black", fontSize: "24px" }}>
          <dt className="col-sm-3">Category</dt>
          <dd className="col-sm-9">{Category}</dd>
          <hr />
          <dt className="col-sm-3">Color</dt>
          <dd className="col-sm-9">{Color}</dd>
          <hr />
          <dt className="col-sm-3">Required Quantity</dt>
          <dd className="col-sm-9">{RequiredQuantity}</dd>
        </dl>
      </div>
    );
  }
}

export default withRouter(deficitDetails);
