import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state={
      posts:[]
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




onDelete = (id) =>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).them((res) =>{
    this.retrevePosts();
    alert("Deleted successfuly")
    
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.order_id.toLowerCase().includes(searchKey)|| post.order_id.toUpperCase().includes(searchKey) || post.cus_id.toLowerCase().includes(searchKey)|| post.cus_id.toUpperCase().includes(searchKey) || post.item_id.toLowerCase().includes(searchKey)|| post.item_id.toUpperCase().includes(searchKey)
  || post.status.toLowerCase().includes(searchKey)|| post.status.toUpperCase().includes(searchKey)
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

    const SumValue = this.state.posts && this.state.posts.reduce((sum, posts) => posts.total + sum, 0)
    const count = this.state.posts.length

    return (
      <div className='card' style={{borderRadius:'0px',backgroundColor:' #D3D3D3',  backgroundImage:'#D3D3D3',width:'100%',alignItems:'center',marginLeft:'0px'}} >

      <div>
        <center><h2 style={{color:'black'}}>Admin Orders</h2></center>

        <center>
        <div className="col-lg-3 mt-2 mb-2" style={{display:'flex'}}>
        <input
        className="form-control"
        style={{width:'600px',marginTop:'30px',float:'right',display:'flex',borderColor:'red'}}
        type="text"
        placeholder="Search"
        name="searchQuery"
        onChange={this.handleSearchArea}/>
      </div></center>

      <center>
      <button className='btn-grad'><a href='/orderadd' style={{textDecoration:'none', color:'white'}}>create new post</a></button>
      &nbsp;
      <button className='btn-grad'><a href='/shopping' style={{textDecoration:'none', color:'white'}}>Shopping cart Items</a></button>
      &nbsp;
      <button className='btn-grad8'style={{width:'200px'}}><a href='/orderReport' style={{textDecoration:'none', color:'white'}}>Generate Report</a></button>
      </center>

      <br/>
      <div style={{display:'flex'}}>
        <div style={{marginLeft:'50px'}}>
        <h5 > Number of orders: {count}</h5></div>
      <div style={{marginLeft:'500px'}}>
      <h5  > Number of total value: {SumValue}</h5></div>
      </div>
      <br/>
      <table className="table" style={{backgroundColor:'#D1CCCC', width:'100%'}}>

      <thead>

        <tr>
          <th scop="col1">#</th>
          <th scop="col1">Order ID</th>
          <th scop="col1">Cus ID</th>
          <th scop="col1">Item ID</th>
          <th scop="col1">Date</th>
          <th scop="col1">Status</th>
          <th scop="col1">Amount</th>
          <th scop="col1">Total</th>
          <th scop="col1">Action</th>
        </tr>
      </thead>

      <tbody>
        {this.state.posts.map((posts,index) =>(

          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>
                <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.order_id}
                </a>
            </td>
            <td>{posts.cus_id}</td>
            <td>{posts.item_id}</td>
            <td>{posts.date}</td>
            <td>{posts.status}</td>
            <td>{posts.amount}</td>
            <td>{posts.total}</td>
            <td><button className='btn-grad1' style={{width:'70px'}}>
              <a className = "btn-grad1" href={`/orderEdit/${posts._id}`}>
                <i className="fas fa-edit" ></i> 
              </a>Edit</button>
                &nbsp;
                <button className='btn-grad2'>
              <a className = "btn-grad2" href="" onClick={() =>this.onDelete(posts._id)} >
                <i className="fas fa-trash-alt"></i>
              </a>Delete</button>
            </td>
          </tr>

        ))}
      </tbody>

      </table>
        
      <br/>
        
      </div>


      </div>
    )
  }
}
