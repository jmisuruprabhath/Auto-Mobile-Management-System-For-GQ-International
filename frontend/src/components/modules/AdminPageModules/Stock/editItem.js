import React, { Component } from 'react'
import axios from 'axios';
import AddExpenseBG from '../../../../images/addexpense.jpg';
import { withRouter } from "react-router";

class editItem extends Component {

    constructor(props){
        super(props);
        this.state={
            itemCode:"",
            description:"",
            unitPrice:"",
            color:"",
            countInStock:"",
            imageUrl:"",

            errors:{},
            errorsC:{},
            errorsUp:{},
            error5:{},
            error6:{},
            errorsCI:{},
            error:{}
        }
    }

    handleInputChange=(e)=>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    /** */
    formValidation = () =>{

        const{description,unitPrice,color,countInStock,imageUrl}=this.state;
        let isValid = true;
        const errors ={};
        const errorsC ={};
        const errorsUp ={};
        const errorsCI ={};
        const error5 ={};
        const error6 ={};

        if(!description){
            errors["descriptionInput"] = "Description Field is EMPTY!";
            isValid=false;
        }

        if(!unitPrice){
            errors["unitPriceInput1"] = "unitPrice Field is EMPTY!";
            isValid=false;
        }

        if(!countInStock){
            error6["countInStockInput1"] = "countInStock Field is EMPTY!";
            isValid=false;
        }

        if(!imageUrl){
            errors["imageUrlInput"] = "imageUrl Field is EMPTY!";
            isValid=false;
        }

        this.setState({errors:errors,errorsC:errorsC,errorsUp:errorsUp,errorsCI:errorsCI,error5:error5,error6:error6});
        return isValid;
    }
    /** */

    onSubmit=(e)=> {
        e.preventDefault();
        /** */
        const isValid = this.formValidation();
        if (isValid) {

            const id = this.props.match.params.id;

            const {itemCode, description, unitPrice, color, countInStock, imageUrl} = this.state;

            const data = {
                itemCode: itemCode,
                description: description,
                unitPrice: unitPrice,
                color: color,
                countInStock: countInStock,
                imageUrl: imageUrl
            }

            console.log(data);

            axios.put(`/item/update/${id}`, data).then((res) => {
                if (res.data.success) {
                    alert("Item Details Updated Successfully!")
                    this.setState(
                        {
                            itemCode: "",
                            description: "",
                            unitPrice: "",
                            color: "",
                            countInStock: "",
                            imageUrl: ""
                        }
                    )
                }
            })
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/item/get/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    itemCode:res.data.item.itemCode,
                    description:res.data.item.description,
                    unitPrice:res.data.item.unitPrice,
                    color:res.data.item.color,
                    countInStock:res.data.item.countInStock,
                    imageUrl:res.data.item.imageUrl,
                });

                console.log(this.state.item);
            }
        });
    }

    render() {
        const{errors}=this.state;

        const{errorsC}=this.state;
        const{errorsUp}=this.state;
        const{errorsCI}=this.state;
        const{error5}=this.state;
        const{error6}=this.state;
        return (
            <div style={{width:'100%',margin:'40px',borderRadius:'0px',backgroundColor: '#D3D3D3',marginTop:'-30px',marginLeft:'0px'}}>
                <div className="col-md-8 mt-4 mx-auto"><br/><br/><br/>
            <button className="btn-grads" style={{marginLeft:'-160px', marginTop:'-100px',width:'160px'}}>
            <a href="/viewItem" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                View Items
            </a></button><br/><br/><br/><br/><br/>

            <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#B91717',fontWeight:'bolder'}}>Edit the item details using the bellow form!</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Item Code</label>
                            <input type="text" className="form-control" name="itemCode" placeholder="Enter code" value={this.state.itemCode} onChange={this.handleInputChange} readOnly/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Description</label>
                            <input type="text" className="form-control" name="description" placeholder="Enter description" value={this.state.description} onChange={this.handleInputChange}/>
                            <div className="text-danger">{this.state.errors.descriptionInput}</div>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Unit Price</label>
                            <input type="text" className="form-control" name="unitPrice" placeholder="Enter Unit Price" value={this.state.unitPrice} onChange={this.handleInputChange}/>
                            {Object.keys(errors).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Color</label>
                            <input type="text" className="form-control" name="color" placeholder="Enter color" value={this.state.color} onChange={this.handleInputChange} readOnly/>
                            {Object.keys(errorsC).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{errorsC[key]}</div>
                            })}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Count in stock</label>
                            <input type="text" className="form-control" name="countInStock" placeholder="Enter color" value={this.state.countInStock} onChange={this.handleInputChange}/>
                            {Object.keys(error6).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{error6[key]}</div>
                            })}
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image url</label>
                            <input type="text" className="form-control" name="imageUrl" placeholder="Enter color" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                            <div className="text-danger">{this.state.errors.imageUrlInput}</div>
                        </div>

                        <button className="btn-grads" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                                &nbsp;Update
                        </button>
                        <br/><br/>
                    </form>


            </div>
            </div> 
    )
    }
}
export default withRouter(editItem);

