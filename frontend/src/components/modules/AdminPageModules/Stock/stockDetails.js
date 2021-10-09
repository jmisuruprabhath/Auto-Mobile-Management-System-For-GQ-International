import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class stockDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/stock/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          stock: res.data.stock,
        });

        console.log(this.state.stock);
      }
    });
  }

  render() {
    const { ItemCode, Category, Quantity /*,TotalNumberOfItems*/ } =
      this.state.stock;
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
        <h4 style={{ color: "black", fontSize: "36px" }}>
          {ItemCode} - Summarized Details
        </h4>
        <hr />

        <dl
          className="row"
          style={{ color: "black", fontSize: "24px", width: "100%" }}
        >
          <dt className="col-sm-3">Category</dt>
          <dd className="col-sm-9">{Category}</dd>
          <hr />
          <dt className="col-sm-3">Quantity</dt>
          <dd className="col-sm-9">{Quantity}</dd>
          <hr />
        </dl>
      </div>
    );
  }
}

export default withRouter(stockDetails);
