import React, { Component } from "react";
import axios from "axios";
import "./styleme.css";

import { withRouter } from "react-router";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      Emp_ID: "",
      Address: "",
      Email: "",
      Phone: "",
      errors: {},
      error1: {},
      error2: {},
      error3: {},
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    if (isValid) {
      if (this.props.match && this.props.match.params.id) {
        const id = this.props.match.params.id;
        const { FullName, Emp_ID, Address, Email, Phone } = this.state;

        const data = {
          FullName: FullName,
          Emp_ID: Emp_ID,
          Address: Address,
          Email: Email,
          Phone: Phone,
        };

        console.log(data);
        axios.put(`/employee/update/${id}`, data).then((res) => {
          if (res.data.success) {
            alert("Employee Details Updated Successfully");

            this.setState({
              FullName: "",
              Emp_ID: "",
              Address: "",
              Email: "",
              Phone: "",
            });
          }
        });
      }
    }
  };

  componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      const id = this.props.match.params.id;

      axios.get(`/employee/${id}`).then((res) => {
        if (res.data.success) {
          this.setState({
            FullName: res.data.employee.FullName,
            Emp_ID: res.data.employee.Emp_ID,
            Address: res.data.employee.Address,
            Email: res.data.employee.Email,
            Phone: res.data.employee.Phone,
          });

          console.log(this.state.employee);
        }
      });
    }
  }
  formValidation = () => {
    const { FullName, Address, Email, Phone } = this.state;
    let isValid = true;
    const errors = {};
    const error1 = {};
    const error2 = {};
    const error3 = {};

    if (!FullName.match(/^[a-z A-Z]*$/)) {
      error1["FullNamePattern"] = "FullNameD should contain characters only";
      isValid = false;
    }

    if (!FullName) {
      error1["FullNameInput"] = "FullName Field is EMPTY!";
      isValid = false;
    }

    if (!Address) {
      errors["AddressInput"] = "Address Field is EMPTY!";
      isValid = false;
    }

    if (
      !Email.match(
        /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/
      )
    ) {
      error2["EmailPattern"] = "Email Pattern Is Invalid";
      isValid = false;
    }

    if (!Email) {
      error2["EmailInput"] = "Email Field is EMPTY!";
      isValid = false;
    }

    if (!Phone.match(/^[0-9]{10}$/)) {
      error3["PhonePattern"] = "Phone should contain ten numbers";
      isValid = false;
    }

    if (!Phone) {
      error3["PhoneInput"] = "Phone Field is EMPTY!";
      isValid = false; }
    
    this.setState({
      errors: errors,
      error1: error1,
      error2: error2,
      error3: error3,
    });
    return isValid;
  };

    render() {
        const{errors}=this.state;
        const{error}=this.state;
        const{error1}=this.state;
        const{error2}=this.state;
        const{error3}=this.state;
        return (

            <div className='card' style={{borderRadius:'0px',marginTop:'-10px',background: '#D3D3D3',width:'100%',alignItems:'center',

                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                color: 'black'}} >
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'style={{textAlign:'center',textTransform:'uppercase',color:'#B91717'}}>Edit Employee Details</h1>
                <button className="btn-grad4"  style={{marginLeft:'640px'}} > <a href='/allEmp' style={{textDecoration:'none',color:'white'}}> View Employees</a></button>
                {/*Form Begin*/}
                <form className='needs-validation' noValidate>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type='text'
                               className='form-control'
                               name='FullName'
                               placeholder='Enter Employee Name '
                               value={this.state.FullName}
                               onChange={this.handleInputChange}
                             />
                        {Object.keys(error1).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{error1[key]}</div>
                        })}
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Employee ID</label>
                        <input type='text'
                               disabled
                               className='form-control'
                               name='Emp_ID'
                               placeholder='Enter Employee ID '
                               value={this.state.Emp_ID}
                               onChange={this.handleInputChange}
                          />
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type='text'
                               className='form-control'
                               name='Address'
                               placeholder='Enter Employee Address '
                               value={this.state.Address}
                               onChange={this.handleInputChange}
                           />
                         {Object.keys(errors).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                        })}
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type='text'
                               className='form-control'
                               name='Email'
                               placeholder='Enter Employee Email '
                               value={this.state.Email}
                               onChange={this.handleInputChange}
                              />
                        {Object.keys(error2).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{error2[key]}</div>
                        })}
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Phone</label>
                        <input type='text'
                               className='form-control'
                               name='Phone'
                               placeholder='Enter Employee Phone '
                               value={this.state.Phone}
                               onChange={this.handleInputChange}
                              />
                        {Object.keys(error3).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{error3[key]}</div>
                        })}
                    </div>

                    <button className='btn-grads' type='submit' style={{marginTop:'15px',marginBottom:'10px',color:'black',marginLeft:'350px'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'>
                            &nbsp; Update
                        </i>
                    </button>
                </form>
                {/*Form end*/}

            </div></div>
        );
    }
}

export default withRouter(EditEmployee);
