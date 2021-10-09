import React, { Component } from 'react'
import axios from 'axios'

export default class editPost extends Component {

    constructor(props){
        super(props);
    
        this.state={
            itemCode:"",
            description:"",
            unintPrice:"",
            qty:"",
            total:"",

              //errors
             errors:{},
             error:{},
             error2:{}
        }
      }

     formValidation = () =>{  
              const{description, unitPrice, qty}=this.state;
                let isValid = true;        
                const error = {};  
                const errors ={};
                const error2 = {};               
        
    
                if(!description){
                error["descriptionInput"] = "Description Field is EMPTY!";
                isValid=false;        }  

                if(!unitPrice){
                errors["PriceInput"] = "Price Field is EMPTY!";
                isValid=false;        }

                if(!qty){
                error2["QuantityInput"] = "Quantity Field is EMPTY!";
                isValid=false;        }
    
    
                 this.setState({errors:errors,error:error,error2:error2});       
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

          

          const id = this.props.match.params.id;
          const {itemCode, description, unitPrice, qty, total} = this.state

          const data={
            itemCode:itemCode,
            description:description,
            unitPrice:unitPrice,
            qty:qty,
            total:total
          }

          console.log(data)

          axios.put(`http://localhost:8000/cartpost/update/${id}`,data).then((res) =>{
              if(res.data.success){
                  alert("Post updated succesfully")
                  this.setState({
                    itemCode:"",
                    description:"",
                    unitPrice:"",
                    qty:"",
                    total:""
                  })
              }
          })
        
      }}


    componentDidMount(){
       
        const id = this.props.match.params.id;
       
        axios.get(`http://localhost:8000/cartpost/${id}`).then((res) =>{
            
                this.setState({
                    itemCode:res.data.post.itemCode,
                    description:res.data.post.description,
                    unitPrice:res.data.post.unitPrice,
                    qty:res.data.post.qty,
                    total:res.data.post.total
                })
    
                console.log(this.state.post)
            
        }
        )}

        onDelete = (id) =>{
            axios.delete(`http://localhost:8000/post/delete/${id}`).them((res) =>{
              this.retrevePosts();
              alert("Deleted successfuly")
            })
          }

    render() {

        const{error}=this.state;
        const{errors}=this.state;
        const{error2}=this.state;
        

        return (
            <div className='card' style={{borderRadius:'0px',backgroundColor:' #D3D3D3',  backgroundImage:'#D3D3D3',width:'100%',alignItems:'center',marginLeft:'0px'}} >
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit cart post</h1>
            <div style={{marginLeft:'500px'}}><button className='btn-grad'><a href='/shopping' style={{textDecoration:'none', color:'white'}}>Back to table</a></button></div>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>Item Code</label>
                    <input type="text" 
                    className="form-control"
                    name="itemCode"
                    placeholder="itemCode"
                    value={this.state.itemCode}
                    onChange={this.handleInputChange} readOnly/>

                    
                </div>


                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>Description</label>
                    <input type="text" 
                    className="form-control"
                    name="description"
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}/>

                    {Object.keys(error).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })} 
                    
                </div>


                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>price</label>
                    <input type="text" 
                    className="form-control"
                    name="unitPrice"
                    placeholder="price"
                    value={this.state.unitPrice}
                    onChange={this.handleInputChange}/>

                   {Object.keys(errors).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })}
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>qty</label>
                    <input type="text" 
                    className="form-control"
                    name="qty"
                    placeholder="quantity"
                    value={this.state.qty}
                    onChange={this.handleInputChange}/>

                   {Object.keys(error2).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{error2[key]}</div>
                            })}
                </div>

               

                
                
               <button className='btn-grad' type="submit" style={{marginTop:"15px"}} onClick={this.onSubmit}>
                   <i className="far fa-check-square"></i>
                   &nbsp;update
               </button><br/>

               

            </form>
            <br/>
            
            </div>
        </div>
        )
    }
}
