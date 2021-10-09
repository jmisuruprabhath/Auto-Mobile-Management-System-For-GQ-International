import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import gqheader from "../../../../images/gqheader.png";
import "./ViewHistory.css";
import { Breadcrumb, Button } from "react-bootstrap";
import Allbtns from "../Payment/AllBtns.jsx";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./salrepo.css";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      date: new Date(),
      hours: new Date().getHours(), //To get the Current Hours
      min: new Date().getMinutes(), //To get the Current Minutes
      sec: new Date().getSeconds(), //To get the Current Seconds
    };
  }

  generatePDF = () => {
    const doc = new jsPDF("p", "pt", [1000, 1320]); //(p,pt= points (mm,cm),page size)
    doc.html(document.querySelector("#cashPayRepo"), {
      callback: function (pdf) {
        const pageCount = doc.internal.getNumberOfPages(0);
        pdf.save("Cash Payments Details");
      },
    });
  };

  componentDidMount() {
    this.retrieveposts();
  }

  retrieveposts() {
    axios.get("/cashPay").then((res) => {
      if (res.data.success) {
        this.setState({ posts: res.data.existingCash });
        console.log(this.state.posts);
      }
    });
  }

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.cusName.toLowerCase().includes(searchKey) ||
        post.cusName.toUpperCase().includes(searchKey) ||
        post._id.toLowerCase().includes(searchKey) ||
        post._id.toUpperCase().includes(searchKey) ||
        post.date.toLowerCase().includes(searchKey)
    );

    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("/cashPay").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingCash, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="card">
        <div style={{ margin: "40px" }}>
          <Allbtns />
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <span className="alignSupBtn">
                <button className="btn-grad8" onClick={this.generatePDF}>
                  &nbsp;Download PDF
                </button>
                <DropdownButton id="btngenreport">
                  <Dropdown.Item eventKey="1" href="/ViewHistoryCashPay" active>
                    Cash Payments
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" href="/ViewHistoryOnlinePay">
                    Online Payments
                  </Dropdown.Item>
                </DropdownButton>{" "}
              </span>

              {/* <Breadcrumb>
                            <Breadcrumb.Item href="./ViewHistoryOnlinePay" style={{textDecoration: "underline #000000"}}>Online Payments</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" style={{color:"black"}} active><b>Cash Payments</b></Breadcrumb.Item>
                        </Breadcrumb> */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h3>Cash Payments Report Preview</h3>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                style={{ borderColor: "red" }}
                className="form-control"
                type="search"
                placeholder="Search"
                name="SearchQuery"
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              {/* <a class="btn bg-white btn-light mx-1px text-95"  data-title="PDF" onClick={this.generatePDF}>
                            <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                            Export
                        </a> */}
            </div>
          </div>

          <div className="row">
            <hr />
            <br />
          </div>

          <div id="cashPayRepo">
            <img src={gqheader} alt="" style={{ width: "100%" }} />
            <hr />

            <h3>Cash Payments Report</h3>

            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer Name</th>
                  {/* <th scope="col">Price</th> */}
                  <th scope="col">Discount</th>
                  <th scope="col">Final Amount</th>
                </tr>
              </thead>

              <tbody>
                {this.state.posts.map((posts, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/CashPaySpecificView/${posts._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {posts._id}
                      </a>
                    </td>
                    <td>{posts.date}</td>
                    <td>{posts.cusName}</td>
                    {/* <td>{posts.price}</td> */}
                    <td>{posts.discount}</td>
                    <td>{posts.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <h3 id="gqcenter" style={{ marginLeft: "-200px" }}>
              GQ - International Cash Payment summary report <br />
              on {this.state.date.toLocaleDateString()}
              <br />
              At {this.state.hours}:{this.state.min}:{this.state.sec}
            </h3>

            <br />
            <div style={{ marginLeft: "750px" }}>
              <p>.................................</p>
              <h4>Signature</h4>
            </div>
            <div className="date" style={{ marginLeft: "750px" }}>
              <p> Date {this.state.date.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
