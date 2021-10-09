import React, { useState, useEffect } from "react";
import axios from "axios";
import "./viewSupplier.css";
import "./salrepo.css";

//import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
//import AddModal from '../AddSupplier/addModal';
//import UpdateForm from "../UpdateSupplier/updateForm";

//import DeleteSupplier from "../DeleteSupplier/deleteSupplier";
//import Spinner from 'react-bootstrap/Spinner';
import SupplierNav from "../SupplierNav/supplierNav";
//import UpdateModal from "../AddSupplier/updateModal";

//searchX
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
//import Button from "@restart/ui/esm/Button";

//report gen

import jsPDF from "jspdf";
//import autoTable from 'jspdf-autotable';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import gqheader from "../../../../../images/gqheader.png";

function genreport() {
  const doc = new jsPDF("p", "pt", [1080, 1320]); //(p,pt= points (mm,cm),page size)
  doc.html(document.querySelector("#repo"), {
    callback: function (pdf) {
      //const pageCount = doc.internal.getNumberOfPages(0);
      pdf.save("supplier_information_report");
    },
  });
}

export default function ReportPage() {
  const [date] = useState(new Date());

  const [time] = useState(
    new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    function getSupplier() {
      axios
        .get("http://localhost:8000/supplier/")
        .then((res) => {
          setSuppliers(res.data);
          //setID(res.data[0]._id);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getSupplier();
  }, []);
  //search functions

  //function filterData
  //let [result, setResult] = useState([]);

  function filterData(s, k) {
    let result = s.filter(
      (s) =>
        s.name.toLowerCase().includes(k) ||
        s.name.toUpperCase().includes(k) ||
        s.supplierId.toLowerCase().includes(k) ||
        s.supplierId.toUpperCase().includes(k)
    );
    setSuppliers(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.currentTarget.value;
    console.log(searchKey);

    filterData(suppliers, searchKey);
  }

  return (
    <div className="supplierMargin">
      <SupplierNav />
      <h3>Report Generation</h3>

      <Form>
        <Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Control
              id="inlineFormInputName"
              placeholder="Search keyword"
              type="serach"
              onChange={(e) => {
                handleSearchArea(e);
              }}
            />
          </Col>
        </Row>
      </Form>

      <span className="alignSupBtn">
        <Button
          id="btngenreport"
          onClick={() => {
            genreport();
          }}
        >
          {" "}
          Generate Report{" "}
        </Button>
        <DropdownButton id="btngenreport">
          <Dropdown.Item eventKey="1" href="/reportsGenerator" active>
            Supplier information
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" href="/reportupcome">
            Upcomming order
          </Dropdown.Item>
        </DropdownButton>{" "}
      </span>

      <div id="repo">
        <img src={gqheader} alt="" style={{ width: "100%" }} />
        <hr />
        <h2 id="gqcenter">SUPPLIER INFORMATION REPORT</h2>
        <br />

        <table id="gqcenter" responsive>
          <thead>
            <tr className="tableHeader">
              <th>SupplierID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((suppliers) => (
              <tr>
                <td>{suppliers.supplierId} </td>
                <td>{suppliers.name}</td>
                <td>{suppliers.address}</td>
                <td>{suppliers.country}</td>
                <td>{suppliers.postalCode} </td>
                <td>{suppliers.email}</td>
                <td>{suppliers.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <hr />
        <h1 id="gqcenter">GQ - International</h1>
        <br />
        <div style={{ marginLeft: "900px" }}>
          <p>.................................</p>
          <h4>Signature</h4>
        </div>
        <div className="date" style={{ marginLeft: "900px" }}>
          <p> Date {date.toLocaleDateString()}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}
