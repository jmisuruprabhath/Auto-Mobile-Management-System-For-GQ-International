import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import gqheader from '../../../../images/gqheader.png';




export default class Home extends Component {

  constructor(props){
    super(props);

    this.state={
      posts:[],
      date: new Date()

    }
  }

  componentDidMount(){
    this.retrevePosts();
  }

  retrevePosts(){
    axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });

          console.log(this.state.posts)
      }
  });

}

generatePDF=()=>{
  const doc = new jsPDF('p','pt',[1120, 1310]);//(p,pt= points (mm,cm),page size)
  doc.html(document.querySelector("#orderrepo"),{
      callback:function(pdf){
          const pageCount = doc.internal.getNumberOfPages(0);
          pdf.save("order Details");
      }
  });
};



onDelete = (id) =>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).them((res) =>{
    this.retrevePosts();
    alert("Deleted successfuly")
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.order_id.toLowerCase().includes(searchKey) || post.cus_id.toLowerCase().includes(searchKey) || post.item_id.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea= (e) =>{
  const searchKey = e.currentTarget.value

  axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
            this.filterData(res.data.existingPosts, searchKey)
          }
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

    const SumValue = this.state.posts && this.state.posts.reduce((sum, posts) => posts.total + sum, 0)
    const count = this.state.posts.length

    return (

        
      <div className='card' style={{marginTop:'0px', backgroundColor:'white',  width:'100%',alignItems:'center'}} > 
      <button className="btn-grad8" style={{width:'200px'}} onClick={this.generatePDF}>Generate Report</button>
      
      <div id='orderrepo'>
                    <img style={gq, gqcenter} src={gqheader} alt='' style={{width:'100%'}} />
                    <hr/>

                    <center><h2 style={{marginBottom:'10px'}}>Order Report</h2></center>


        
        
      

      <table id="orderrepo" style={table}>

      <thead>

        <tr>
          <th style={th} scop="col1">#</th>
          <th style={th} scop="col1">Order ID</th>
          <th style={th} scop="col1">Cus ID</th>
          <th style={th} scop="col1">Item ID</th>
          <th style={th} scop="col1">Date</th>
          <th style={th} scop="col1">Status</th>
          <th style={th} scop="col1">Amount</th>
          <th style={th} scop="col1">Total</th>
        </tr>
      </thead>

      <tbody>
        {this.state.posts.map((posts,index) =>(

          <tr key={index}>
            <th style={th} scope="row">{index+1}</th>
            <td style={td}>
                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.order_id}
                </a>
            </td>
            <td style={td}>{posts.cus_id}</td>
            <td style={td}>{posts.item_id}</td>
            <td style={td}>{posts.date}</td>
            <td style={td}>{posts.status}</td>
            <td style={td}>{posts.amount}</td>
            <td style={td}>{posts.total}</td>
            
          </tr>

        ))}
      </tbody>

      </table>

      <br/><br/>

      <div style={{display:'flex'}}>
        <div style={{marginLeft:'50px'}}>
        <h5 > Number of orders: {count}</h5></div>
      <div style={{marginLeft:'500px'}}>
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
      
    )
  }
}
