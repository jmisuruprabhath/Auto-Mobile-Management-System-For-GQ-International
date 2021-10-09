import React, { Component } from 'react'
import axios from 'axios';
import AddExpenseBG from '../../../../images/addexpense.jpg';

export default class CreateDeficits extends Component {

    constructor(props){
        super(props);
        this.state={
            DeficitCode:"",
            Category:"",
            Color:"",
            RequiredQuantity:"",

            /** */
            errors:{},
            errorsCg:{},
            errorsC:{},
            errorsR:{},
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
        const{DeficitCode,Category,Color,RequiredQuantity}=this.state;
        let isValid = true;
        const errors ={};
        const errorsCg ={};
        const errorsC ={};
        const errorsR ={};
        const error = {};

        if(DeficitCode.trim().length<8){
            error["DeficitCodeLength"]= "Deficit code must be in length 8 or higher";
            isValid=false;
        }

        if(!DeficitCode.match(/^[D][A-Z]{4,}[0-9]{3,}$/)){
            error["DeficitCodePattern"]="Code should start with D then at least 4 uppercase letters and at least 3 numbers";
            isValid=false;
        }

        if(!DeficitCode){
            error["DeficitCodeInput"] = "Deficit code Field is EMPTY!";
            isValid=false;
        }
        if(!Category){
            errorsCg["CategoryInput"] = "Category Field is EMPTY!";
            isValid=false;
        }
        if(!Category.match(/^[a-z A-Z]*$/)){
            errorsCg["CategoryInputPattern"] = "Category Field can contains characters only!";
            isValid=false;
        }
        if(!Color){
            errorsC["ColorInput"] = "Color Field is EMPTY!";
            isValid=false;
        }
        if(!Color.match(/^[a-z A-Z]*$/)){
            errorsC["ColorInputPattern"] = "Color Field can contain characters only!";
            isValid=false;
        }
        if(Color.trim().length<3){
            errorsC["ColorInputLength"] = "Color Field should contain at least 3 characters!";
            isValid=false;
        }

        if(!RequiredQuantity){
            errorsR["RequiredQuantityInput"] = "Required quantity Field is EMPTY!";
            isValid=false;
        }
        if(!RequiredQuantity.match(/^[0-9]*$/)){
            errorsR["RequiredQuantityInputPattern"] = "Required quantity Field can contain numbers only!";
            isValid=false;
        }

        this.setState({errors:errors,error:error,errorsC:errorsC,errorsR:errorsR,errorsCg:errorsCg});
        return isValid;
    }
    /** */
    onSubmit=(e)=>{
        
        e.preventDefault();
        /** */
        const isValid = this.formValidation();
        if(isValid){

        
        /** */
        const{DeficitCode,Category,Color,RequiredQuantity}= this.state;

        const data={
            DeficitCode:DeficitCode,
            Category:Category,
            Color:Color,
            RequiredQuantity:RequiredQuantity,
           
        }

        console.log(data);
        //post route
        axios.post("/deficit/save",data).then((res)=>{
            if(res.data.success){
                alert("Data Inserted Successfully!");
                this.setState(
                    {
                        DeficitCode:"",
                        Category:"",
                        Color:"",
                        RequiredQuantity:""
                    }
                )
            }
        })
    
    }}


    

    render() {
        //errors declarations

        const{errors}=this.state;
        const{errorsCg}=this.state;
        const{errorsC}=this.state;
        const{errorsR}=this.state;
        const{error}=this.state;
        return (

            <div style={{margin:'40px',marginLeft:'0px',width:'100%',borderRadius:'0px',backgroundColor:'#D3D3D3',marginTop:'-30px'}}>
                <div className="col-md-8 mt-4 mx-auto"><br/><br/>
            <button className="btn-grads" style={{marginLeft:'-160px', marginTop:'-100px',width:'160px'}}>
                <a href="/Deficit" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    {/*View deficit button*/}  View Deficits
                </a></button><br/><br/><br/><br/>

                <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#B91717',fontWeight:'bolder'}} >Add Deficits!</h1>
                        <form className="needs-validation" onSubmit={this.onSubmit}>
                            <div className="form-group"
                                style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Deficit Code</label>
                                <input type="text" className="form-control" name="DeficitCode" placeholder="Enter code" value={this.state.DeficitCode} onChange={this.handleInputChange} required/>
                                {Object.keys(error).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })}
                                
                            </div>

                                
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Category</label>
                                <input type="text" className="form-control" name="Category" placeholder="Enter category" value={this.state.Category} onChange={this.handleInputChange}/>
                                {Object.keys(errorsCg).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{errorsCg[key]}</div>
                                })}
                            </div>
                        
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Color</label>
                                <input type="text" className="form-control" name="Color" placeholder="Enter color" value={this.state.Color} onChange={this.handleInputChange}/>
                                {Object.keys(errorsC).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{errorsC[key]}</div>
                                })}
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Required Quantity</label>
                                <input type="text" className="form-control" name="RequiredQuantity" placeholder="Enter qty" value={this.state.RequiredQuantity} onChange={this.handleInputChange}/>
                                {Object.keys(errorsR).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{errorsR[key]}</div>
                                })}
                            </div>

                          <button className="btn-grads" type="submit" style={{marginTop:'15px'}}  onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                    &nbsp;Save
                            </button>
                            <br/><br/>
                            
                        </form>
                    {/*Form ended*/}

                </div>
                </div>
        )
    }
}