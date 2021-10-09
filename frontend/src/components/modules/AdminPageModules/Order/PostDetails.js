import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "react-router";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match?.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    const { order_id, cus_id, item_id, date, status, amount, total } =
      this.state.post;

    return (
      <div
        className="card"
        style={{
          borderRadius: "0px",
          backgroundColor: " #D3D3D3",
          backgroundImage: "#D3D3D3",
          width: "100%",
          alignItems: "center",
          marginLeft: "0px",
        }}
      >
        &nbsp;<h1 style={{ marginBottom: "70px" }}>Order Details</h1>
        <center>
          <dl className="row">
            <dt className="col-sm-3">OrderID</dt>
            <dd className="col-sm-9">{order_id}</dd>

            <dt className="col-sm-3">CustomerID</dt>
            <dd className="col-sm-9">{cus_id}</dd>

            <dt className="col-sm-3">ItemID</dt>
            <dd className="col-sm-9">{item_id}</dd>

            <dt className="col-sm-3">Date</dt>
            <dd className="col-sm-9">{date}</dd>

            <dt className="col-sm-3">Status</dt>
            <dd className="col-sm-9">{status}</dd>

            <dt className="col-sm-3">Amount</dt>
            <dd className="col-sm-9">{amount}</dd>

            <dt className="col-sm-3">Total</dt>
            <dd className="col-sm-9">{total}</dd>
          </dl>

          <div>
            <button className="btn-grad">
              <a
                href="/orders"
                style={{ textDecoration: "none", color: "white" }}
              >
                Back to table
              </a>
            </button>
          </div>
        </center>
      </div>
    );
  }
}

export default withRouter(PostDetails);
