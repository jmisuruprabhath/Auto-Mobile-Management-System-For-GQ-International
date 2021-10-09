import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlinePayment.css';
import {Container, Row, Col, Form} from 'react-bootstrap'
import { Button } from 'react-responsive-button';
import axios from 'axios';
import DatePicker from 'react-date-picker'
import 'react-responsive-button/dist/index.css';

class OnlinePayment extends Component {

  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      orderID:"",
      cusID:"",
      productCode:"",
      amount:"",
      paySlip:"",

      error:{}
    }
  }

  handleInputChange =(e) =>{
    const {name,value}=e.target;
    this.setState({
        ...this.state,
        [name]:value
    })
  }

  formValidation = () =>{
    const{orderID,cusID,productCode,amount}=this.state;
    let isValid = true;
    const error = {};

    if(!orderID){
      error["orderEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    if(!cusID){
      error["cusIDEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    if(!productCode){
      error["productCodeEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    if(!amount){
      error["amountEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    this.setState({error:error});
        return isValid;
  }

onChange = date => this.setState({ date })

onSubmit =(e) =>{
  e.preventDefault();

  const isValid = this.formValidation();
        if(isValid){

  const {date,orderID,cusID,productCode,amount,paySlip} = this.state;

  const data = {
      date:date,
      orderID:orderID,
      cusID:cusID,
      productCode:productCode,
      amount:amount,
      paySlip:paySlip
  }

  console.log(data)

  axios.post("/onlinePay/save",data).then((res)=>{
      if(res.data.success){
        alert("Payment Slip Uploaded");
          this.setState(
              {
                  date:"",
                  orderID:"",
                  cusID:"",
                  productCode:"",
                  amount:"",
                  paySlip:""
              }
          )
      }
  })
  }
}  

  render() {
    const{error}=this.state;

        return (
          <div className="paymentbg">
            <h2 className="title-payOnline"><b>Pay Online</b></h2>

              <div className="form-bg">

                <Container>
            
                  <Form>

                  <div className="date" style={{marginBottom : "8px", marginLeft: "345px", borderRadius: "6px" }}>
                      <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                      required/>
                  </div>


                  <Form.Group as={Row} className="lable-opay" controlId="orderId">
                      <Form.Label column sm={5}><b>Order Number</b></Form.Label>
                      <Col sm={5}>
                      <input type='text'
                               className='form-control'
                               name='orderID'
                               placeholder='XXXX'
                               value={this.state.orderID}
                               onChange={this.handleInputChange} required/>
                              <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="lable-opay" controlId="cusId">
                      <Form.Label column sm={5}><b>Customer ID</b></Form.Label>
                      <Col sm={5}>
                      <input type='text'
                               className='form-control'
                               name='cusID'
                               placeholder='XXXX'
                               value={this.state.cusID}
                               onChange={this.handleInputChange} required/>
                               <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="lable-opay" controlId="productCode">
                      <Form.Label column sm={5}><b>Product Code</b></Form.Label>
                      <Col sm={5}>
                      <input type='text'
                               className='form-control'
                               name='productCode'
                               placeholder='XXXX'
                               value={this.state.productCode}
                               onChange={this.handleInputChange} required/>
                               <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>
                  
                    <Form.Group as={Row} className="lable-opay" controlId="amount">
                      <Form.Label column sm={5}><b>Amount</b></Form.Label>
                        <Col sm={5}>
                        <input type='text'
                               className='form-control'
                               name='amount'
                               placeholder='000000.00'
                               value={this.state.amount}
                               onChange={this.handleInputChange} required/>
                               <div className="text-danger">{this.state.error.orderEmpty}</div>
                        </Col>
                    </Form.Group>
                  
                    <Form.Group as={Row} className="lable-opay" controlId="paySlip">
                      <Form.Label column sm={5}><b>Pay Slip</b></Form.Label>
                        <Col sm={5}>
                        <div>
                        <input type='file'
                               className='form-control'
                               //name='paySlip'
                               //value={this.state.paySlip}
                               onChange={this.handleInputChange} required/>
                        </div>
                         
                        </Col>
                    </Form.Group>
            
                    <Form.Group as={Row} className="btn-submit">
                      <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit" variant="outline-dark" style={{marginBottom : "10px", marginLeft: "300px", borderRadius: "6px" }} onClick={this.onSubmit} >&nbsp;Submit&nbsp;</Button>
                      </Col>
                    </Form.Group>

                  </Form>
                  <uploadFile/>
                </Container>

              </div>
            </div> 
        );
  }
}

export default OnlinePayment;