import React, { Component } from 'react'
import axios from 'axios'
import {Label} from 'reactstrap';

export default class createPost extends Component {
    

    constructor(props){
        super(props);
    
        this.state={
            order_id:"",
            cus_id:"",
            item_id:"",
            date:"",
            status:"",
            amount:"",
            total:"",

            //errors
            errors:{},
            error:{},
            error2:{},
            error3:{},
            error4:{}
        }
      }

    
        formValidation = () =>{  
          const{order_id, cus_id, item_id, amount, total}=this.state;
            let isValid = true;        
            const errors ={};
            const error = {};
            const error2 = {};
            const error3 = {};
            const error4 = {};
           
            if(order_id.trim().length<6){ 
            error["OrderIDLength"]= "Order id must be in length 6 or higher";
            isValid=false;        }        

            if(!order_id.match(/^[O][A-Z]{2,}[0-9]{3,}$/)){
            error["OrderPattern"]="Order id should start with O then at least 2 uppercase letters and at least 3 numbers";
                       isValid=false;        }       

            if(!order_id){
            error["OrderIDInput"] = "Order Id Field is EMPTY!";
            isValid=false;        }

            //customer validations
            if(cus_id.trim().length<6){ 
            errors["customerIDLength"]= "customer id must be in length 6 or higher";
            isValid=false;        }        
    
                        
    
            if(!cus_id){
            errors["customerIDInput"] = "Customer Id Field is EMPTY!";
            isValid=false;        }

            //item id validations
            if(item_id.trim().length<6){ 
            error2["itemIDLength"]= "item id must be in length 6 or higher";
            isValid=false;        }        
                
                 
                
            if(!item_id){
            error2["itemIDInput"] = "item Id Field is EMPTY!";
            isValid=false;        }

            //Amount validations
            if(!amount){
                error3["amountInput"] = "amount Field is EMPTY!";
                isValid=false;        }

            //total validations
            if(!total){
                error4["totalInput"] = "Total Field is EMPTY!";
                isValid=false;        }

                  
        
                   
        


             this.setState({errors:errors,error:error,error2:error2,error3:error3,error4:error4});       
             return isValid;    }



      handleInputChange = (e) =>{
          const {name, value} = e.target;

          this.setState({
              ...this.state,
              [name]:value
          })
      }

      onSubmit = (e) =>{

        e.preventDefault();

        const isValid = this.formValidation();
        if(isValid){
          
          const {order_id, cus_id,  item_id, date, status, amount, total} = this.state

          const data={
            order_id:order_id,
            cus_id:cus_id,
            item_id:item_id,
            date:date,
            status:status,
            amount:amount,
            total:total
          }

          console.log(data)

          axios.post("http://localhost:8000/post/save",data).then((res) =>{
              if(res.data.success){

               alert("Order added")

                  this.setState({
                    order_id:"",
                    cus_id:"",
                    item_id:"",
                    date:"",
                    status:"",
                    amount:"",
                    total:""
                  })
              }
          })
        }
      }

    render() {

        const{errors}=this.state;
        const{error}=this.state;
        const{error2}=this.state;
        const{error3}=this.state;
        const{error4}=this.state;

        return (
            
            <div className='card' style={{borderRadius:'0px',backgroundColor:' #D3D3D3',  backgroundImage:'#D3D3D3',width:'100%',alignItems:'center',marginLeft:'0px'}} >
            <div className="col-md-8 mt-4 mx-auto" >
                <h1 className="h3 mb-3 font-weight-normal">Create new Order</h1>
                <div  style={{marginLeft:'500px'}}><button className='btn-grad' style={{marginTop:"15px", marginLeft:"150px"}}><a href='/orders' style={{textDecoration:'none', color:'white'}}>Back to table</a></button></div>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px" }}>Order ID</label>
                        <input type="text" 
                        className="form-control"
                        name="order_id"
                        placeholder="Enter id"
                        value={this.state.order_id}
                        onChange={this.handleInputChange}/>

                        {Object.keys(error).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })}
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Customer ID</label>
                        <input type="text" 
                        className="form-control"
                        name="cus_id"
                        placeholder="Enter id"
                        value={this.state.cus_id}
                        onChange={this.handleInputChange}/>

                        {Object.keys(errors).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })}
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Item ID</label>
                        <input type="text" 
                        className="form-control"
                        name="item_id"
                        placeholder="Enter id"
                        value={this.state.item_id}
                        onChange={this.handleInputChange}/>

                        {Object.keys(error2).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{error2[key]}</div>
                            })}
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                    <Label for="exampleDate">Date</Label>
                    <input type='date'
                    className='form-control'
                    name='date'
                    id="exampleDate"
                    placeholder='Enter Date '
                    value={this.state.date}
                    onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Status</label>
                        <input type="text" 
                        className="form-control"
                        name="status"
                        placeholder="Enter status"
                        value={this.state.status}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Amount</label>
                        <input type="number" 
                        className="form-control"
                        name="amount"
                        placeholder="Enter amount"
                        value={this.state.amount}
                        onChange={this.handleInputChange}/>

                        {Object.keys(error3).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{error3[key]}</div>
                            })}

                        
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Total</label>
                        <input type="number" 
                        className="form-control"
                        name="total"
                        placeholder="Enter total"
                        value={this.state.total}
                        onChange={this.handleInputChange}/>

                        {Object.keys(error4).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{error4[key]}</div>
                            })}

                       
                    </div>  

                    <div>
                   <button className='btn-grad' type="submit" style={{marginTop:"15px"}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                       &nbsp;save
                   </button>
                   </div>
                </form>
            </div>
            </div>
        )
    }
}
