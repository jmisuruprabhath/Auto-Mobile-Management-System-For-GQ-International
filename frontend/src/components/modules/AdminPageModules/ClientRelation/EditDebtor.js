import React, { Component } from "react";
import axios from "axios";
import "./addDebtor.css";
import { withRouter } from "react-router";

class EditDebtor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      name: "",
      contact: "",
      address: "",
      guarantor: "",
      creditLimit: "",
      remarks: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const id = this.props.match.params.id;

    console.log("test");
    const { _id, name, contact, address, guarantor, creditLimit, remarks } =
      this.state;

    const data = {
      _id: _id,
      name: name,
      contact: contact,
      address: address,
      guarantor: guarantor,
      creditLimit: creditLimit,
      remarks: remarks,
    };

    console.log(data);
    axios
      .put(`/postd/update/${id}`, data)
      .then((response) => {
        if (response.data.success) {
          alert("Debtor updated");
          this.setState({
            _id: "",
            name: "",
            contact: "",
            address: "",
            guarantor: "",
            creditLimit: "",
            remarks: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/postd/${id}`).then((response) => {
      if (response.data.succes) {
        this.setState({
          _id: response.data.debtor._id,
          name: response.data.debtor.name,
          contact: response.data.debtor.contact,
          address: response.data.debtor.address,
          guarantor: response.data.debtor.guarantor,
          creditLimit: response.data.debtor.creditLimit,
          remarks: response.data.debtor.remarks,
        });

        console.log(this.state.debtor);
      }
    });
  }

  render() {
    return (
      <div className="form-container" style={{ marginLeft: "0px" }}>
        <form className="form" noValidate>
          <button
            className="btn-grad4"
            style={{ width: "100px", marginLeft: "700px" }}
          >
            {" "}
            <a href="/CR" style={{ textDecoration: "none", color: "white" }}>
              Back
            </a>
          </button>
          <h1 style={{ textTransform: "uppercase" }}>Edit Debtor</h1>
          <div className="form-inputs">
            <label className="form-label">Debtor ID</label>
            <input
              className="form-input"
              type="text"
              name="_id"
              value={this.state._id}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Contact</label>
            <input
              className="form-input"
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Address</label>
            <input
              className="form-input"
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Guarantor</label>
            <input
              className="form-input"
              type="text"
              name="guarantor"
              value={this.state.guarantor}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Credit Limit</label>
            <input
              className="form-input"
              type="text"
              name="creditLimit"
              value={this.state.creditLimit}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Remarks</label>
            <input
              className="form-input"
              type="text"
              name="remarks"
              value={this.state.remarks}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn-grad4"
            type="submit"
            onClick={this.onSubmit}
            style={{ marginBottom: "18px", width: "100px" }}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditDebtor);
