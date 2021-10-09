import React, { Component } from 'react'
import axios from 'axios'

export default class shoppingItems extends Component {


    constructor(props){
        super(props);
    
        this.state={
            productShopping:[]
        }
      }
    
      
    componentDidMount(){
        axios.get("http://localhost:8000/shopping").then(res =>{
            if(res.data.success){
                this.setState({
                    productShopping:res.data.existingPosts
                });
      
                console.log(this.state.productShopping)
            }
        });
    }


    onDelete = (id) =>{
      axios.delete(`http://localhost:8000/cartpost/delete/${id}`).them((res) =>{
        this.retrevePosts();
        alert("Deleted successfuly")
      })
    }

    filterData(productShopping,searchKey){
      const result = productShopping.filter((product) =>
      product.itemCode.toLowerCase().includes(searchKey)|| product.itemCode.toUpperCase().includes(searchKey) 
      )
      this.setState({productShopping:result})
    }
    
    handleSearchArea= (e) =>{
      const searchKey = e.currentTarget.value
    
      axios.get("http://localhost:8000/shopping").then(res =>{
          if(res.data.success){
                this.filterData(res.data.existingPosts, searchKey)
              }
            })
          }
  


    render() {
      const {itemCode, description, unitPrice, qty, total} = this.state.productShopping
      const SumValue = this.state.productShopping && this.state.productShopping.reduce((sum,productShopping) =>  productShopping.qty*productShopping.unitPrice + sum, 0)
      const count = this.state.productShopping.length
        
        return (
          <div className='card' style={{borderRadius:'0px',backgroundColor:' #D3D3D3',  backgroundImage:'#D3D3D3',width:'100%',alignItems:'center',marginLeft:'0px'}} >
       <center>      
      <div >
        <center><h2 style={{marginBottom:'10px'}}>Shopping Orders</h2></center>

        <div className="col-lg-3 mt-2 mb-2" style={{display:'flex'}}>
        <input
        className="form-control"
        style={{width:'600px',marginTop:'30px',float:'right',display:'flex',borderColor:'red'}}
        type="text"
        placeholder="Search"
        name="searchQuery"
        onChange={this.handleSearchArea}/>
      </div>

      <center>  
      <div><button className='btn-grad'><a href='/orders' style={{textDecoration:'none', color:'white'}}>Back to table</a></button>
      &nbsp;
      <button className='btn-grad8'><a href='/orderShoppingReport' style={{textDecoration:'none', color:'white'}}>Generate Report</a></button>
      </div>
      </center> 
        
        <br/>
        <div style={{display:'flex'}}>
        <div style={{marginLeft:'50px'}}>
        <h5 > Number of orders: {count}</h5></div>
      <div style={{marginLeft:'450px'}}>
      <h5  > Number of total value: {SumValue}</h5></div>
      </div>
      <br/>

      

      <table className="table">

      <thead>

        <tr>
          <th scop="col1">#</th>
         {/* <th scop="col1">Item ID</th> */}
          <th scop="col1">Item Code</th>
          <th scop="col1">Description</th>
          <th scop="col1">Unit Price</th>
          <th scop="col1">Quantity</th>
          <th scop="col1">Total</th>
          <th scop="col1">Action</th>
        </tr>
      </thead>

      <tbody>
        {this.state.productShopping.map((posts,index) =>(

          <tr key={index}>
            <th scope="row">{index+1}</th>
           
            
           {/* <td>{posts.item_id}</td> */}
            <td>{posts.itemCode}</td>
            <td>{posts.description}</td>
            <td>{posts.unitPrice}</td>
            <td>{posts.qty}</td>
            <td>{posts.qty*posts.unitPrice}</td>
           <td>
           <button className='btn-grad1' style={{width:'70px'}}>
              <a className = 'btn-grad1' href={`/cartedit/${posts._id}`}>
                <i className="fas fa-edit"></i> &nbsp;Edit
              </a></button>
                &nbsp;
                <button className='btn-grad2' >
              <a className = 'btn-grad2' href="" onClick={() =>this.onDelete(posts._id)}>
                <i className="fas fa-trash-alt"></i> &nbsp;Delete
              </a></button>
           </td> 
        </tr>

        ))}
      </tbody>

      </table>

      
      <br/>
      </div>
       
      </center>   
            </div>
        )
    }
}
