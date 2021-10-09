import React, { Component } from 'react'
import axios from 'axios'
import jsPDF from "jspdf";
import gqheader from '../../../../images/gqheader.png';

export default class shoppingItems extends Component {


    constructor(props){
        super(props);
    
        this.state={
            productShopping:[],
            date: new Date()
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

    generatePDF=()=>{
        const doc = new jsPDF('p','pt',[1120, 1310]);//(p,pt= points (mm,cm),page size)
        doc.html(document.querySelector("#ordershoppingrepo"),{
            callback:function(pdf){
                const pageCount = doc.internal.getNumberOfPages(0);
                pdf.save(" Shopping Order Details");
            }
        });
      };


    onDelete = (id) =>{
      axios.delete(`http://localhost:8000/cartpost/delete/${id}`).them((res) =>{
        this.retrevePosts();
        alert("Deleted successfuly")
      })
    }
  


    render() {

        const table = {fontFamily: 'arial, sans-serif',
            borderCollapse: 'collapse',
            width: '100%'};

    const td ={
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    };

    const th ={
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    };

    const gq={
        marginLeft: '150px',
    };

    const gqcenter={
        textAlign: 'center',
    };
    
    const detailscenter={
        borderStyle: 'solid',
        borderColor: 'transparent',
    
    };

        const {itemCode, description, unitPrice, qty, total} = this.state.productShopping
        const SumValue = this.state.productShopping && this.state.productShopping.reduce((sum,productShopping) =>  productShopping.qty*productShopping.unitPrice + sum, 0)
        const count = this.state.productShopping.length


        return (
          <div className="card" style={{borderRadius:'0px',marginTop:'0px',width:'100%',alignItems:'center'}}>
       <center>      

       <button className="btn-grad8" style={{width:'200px'}} onClick={this.generatePDF}>Generate Report</button>
      <div>
        
         <div id='ordershoppingrepo'>
                    <img style={gq, gqcenter} src={gqheader} alt='' style={{width:'100%'}}/>
                    <hr/>

                    <center><h2 style={{marginBottom:'10px'}}>Shopping Cart Orders</h2></center>

      

      <table  id="orderrepo" style={table}>

      <thead>

        <tr>
          <th style={th} scop="col1">#</th>
         {/* <th scop="col1">Item ID</th> */}
          <th style={th} scop="col1">Item Code</th>
          <th style={th} scop="col1">Description</th>
          <th style={th} scop="col1">Unit Price</th>
          <th style={th} scop="col1">Quantity</th>
          <th style={th} scop="col1">Total</th>
        </tr>
      </thead>

      <tbody>
        {this.state.productShopping.map((posts,index) =>(

          <tr key={index}>
            <th scope="row">{index+1}</th>
           
            
           {/* <td>{posts.item_id}</td> */}
            <td style={td}>{posts.itemCode}</td>
            <td style={td}>{posts.description}</td>
            <td style={td}>{posts.unitPrice}</td>
            <td style={td}>{posts.qty}</td>
            <td style={td}>{posts.qty*posts.unitPrice}</td>
          
        </tr>

        ))}
      </tbody>

      </table>

      <br/><br/>
      <div style={{display:'flex'}}>
        <div style={{marginLeft:'50px'}}>
        <h5 > Number of orders: {count}</h5></div>
      <div style={{marginLeft:'450px'}}>
      <h5  > Number of total value: {SumValue}</h5></div>
      </div>

      <br/>
                    <hr/>
                   {/*  <h1 id="gqcenter">GQ - International</h1>*/}
                    <br/>
                    <div style={{marginLeft:'900px'}}>
                    <p>.................................</p>
                    <h4>Signature</h4></div>
                    <div className="date" style={{marginLeft:'900px'}}>
                        <p> Date {this.state.date.toLocaleDateString()}</p>
                    </div>

            </div>
      </div>
      <div><button className='btn-grad'><a href='/orders' style={{textDecoration:'none', color:'white'}}>Back to table</a></button></div>
      </center>   
            </div>
        )
    }
}
