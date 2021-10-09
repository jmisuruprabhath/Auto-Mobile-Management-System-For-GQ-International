import React, { Component } from "react";
import "./addDebtor.css";
import axios from "axios";

class AddDebtor extends Component {


  
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

    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "contact") {
      if (!Number(val)) {
        alert("Contact must be a number");
      }
    }
    if (nam === "contact") {
      if (!Number(val.length<11)) {
        alert("Contact number should be 10 digits");
      }
    }
    if (nam === "creditLimit") {
      if (!Number(val.length<7)) {
        alert("Credit Limit should be less than 7 digits");
      }
    }
    this.setState({
      ...this.state,
      [name]: value,
    });

  };

  onSubmit(e) {
    console.log("test");
    const {
      _id,
      name,
      contact,
      address,
      guarantor,
      creditLimit,
      remarks,
    } = this.state;

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
      .post("/postd/save", data)
      .then((response) => {
        if (response.data.success) {
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

  render() {
    return (
      <div className="form-container" style={{marginLeft:"0px"}}>
        
        <form className="form" noValidate>
        <button className="btn-grad4" style={{width:"80px", marginLeft:"700px"}}> <a href='/CR' style={{textDecoration:'none', color:'white'}}>Back</a></button>
          <h1 className="form-h1">Add Debtor</h1>

      
          <div className="form-inputs">
          <label className="form-label">Debtor ID</label>
            <input
              className="form-input"
              type="text"
              name="_id"
              placeholder='(First two initials plus the contact number)'
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
              placeholder='Enter full name'
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
              placeholder='Enter contact number'
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
              placeholder='Enter the address'
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
              placeholder='Enter the Guarantor name'
              value={this.state.guarantor}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">Credit Limit</label>
            <input
              className="form-input"
              type="number"
              name="creditLimit"
              placeholder='Enter credit limit'
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
              placeholder='Remarks'
              value={this.state.remarks}
              onChange={this.handleInputChange}
              
            />
          </div>

          <button className="btn-grad4" type="submit" onClick={this.onSubmit} style={{marginBottom:'18px', width:"100px", marginLeft:"680px"}}>
            Save
          </button>
          
        </form>
      </div>
    );
  }
}
export default AddDebtor;
