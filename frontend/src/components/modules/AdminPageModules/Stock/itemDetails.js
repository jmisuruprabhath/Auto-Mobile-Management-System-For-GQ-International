import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "react-router";

class itemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/item/get/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          item: res.data.item,
        });

        console.log(this.state.item);
      }
    });
  }

  render() {
    const { itemCode, description, unitPrice, color, countInStock, imageUrl } =
      this.state.item;
    return (
      <div
        className="card"
        style={{
          marginTop: "0px",
          alignItems: "center",
          width: "100%",
          height: "95%",
          display: "flex",
        }}
      >
        <br />
        <button
          className="btn-grads"
          style={{
            marginLeft: "-800px",
            marginTop: "0px",
            width: "160px",
            height: "80px",
          }}
        >
          <a
            href="/viewItem"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            View Items
          </a>
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4 style={{ color: "black", fontSize: "36px" }}>
          {itemCode} - Summarized Details
        </h4>
        <hr />

        <dl className="row" style={{ color: "black", fontSize: "24px" }}>
          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">{description}</dd>

          <dt className="col-sm-3">Unit Price</dt>
          <dd className="col-sm-9">{unitPrice}</dd>

          <dt className="col-sm-3">Color</dt>
          <dd className="col-sm-9">{color}</dd>

          <dt className="col-sm-3">Count in stock</dt>
          <dd className="col-sm-9">{countInStock}</dd>

          <dt className="col-sm-3">Image url</dt>
          <dd className="col-sm-9">{imageUrl}</dd>
        </dl>
        <br />
      </div>
    );
  }
}

export default withRouter(itemDetails);
