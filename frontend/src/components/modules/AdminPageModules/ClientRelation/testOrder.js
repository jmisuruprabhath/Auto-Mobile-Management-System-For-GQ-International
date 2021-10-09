import React,{Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import {Row, Col} from 'react-bootstrap';


export default class testOrder extends Component{

    constructor(props){
        super(props);

        this.state={
            posts:[]
        };
    }

    componentDidMount(){
        this.retrieveTestOrder();
    }

    retrieveTestOrder(){
        axios.get("/postsor").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingTest
                });
                console.log(this.state.posts);
            }
        });
    }

    filterData(posts,searchKey){
        const result = posts.filter((post)=>
        post.DebtorID.toLowerCase().includes(searchKey)||
        post._id.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})

    }

    handleSearchArea = (e)=>{
       const searchKey = e.currentTarget.value;

       axios.get("/postsor").then(res =>{
        if(res.data.success){
            this.filterData(res.data.existingTest, searchKey)
            
        }
    });

    } 

    onDelete = (id) =>{
        axios.delete(`/postor/delete/${id}`).then((res)=>{
            alert("Deleted Successfully");
            this.retrieveTestOrder();
        })

    }

    render(){
        return(
            <div className="card" style={{backgroundColor: ' #D3D3D3',backgroundImage: ' #D3D3D3'}}>
                    <br/>
                    <div className='row'>
                        <div className="col-lg-9 mt-2 mb-2">
                        &nbsp;&nbsp;<button className="btn-grad4">
                                <a href="/addorder" style={{color:'white', textDecoration:'none'}}>Add New Pre-Order</a>
                            </button>&nbsp;&nbsp;
                            <button className="btn-grad4">
                                <a href="/reportview" style={{color:'white', textDecoration:'none'}}>Report</a>
                            </button>
                        </div>
                        <div className='col-lg-3 mt-2 mb-2' style={{alignItems:"self-end"}}>
                            <Button className='btn-grad4' style={{width:'100px'}} variant="secondary">
                                    <a href="/CR" style={{color:'white', textDecoration:'none'}}>Back</a>
                            </Button>
                        </div>
                    </div>
             {/* <div style={{paddingBottom:'10px', paddingTop:'10px', marginLeft:'10px',backgroundColor:' #000000',  backgroundImage:' linear-gradient(147deg, #000000 0%, #434343 74%)'}}>  */}
             <div className='row'>
             <div className="col-lg-9 mt-2 mb-2">
                <br/><h4 style={{color:'black', paddingLeft:"20px"}}>All Pre-Orders</h4><br/>
                </div>
               <div className='col-lg-3 mt-2 mb-2'>
                        <input style={{borderColor: 'red'}}
                               className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}>
                        </input>
                    </div>
                </div>
                <table class="table"  style={{backgroundColor:'#D1CCCC'}} >

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pre-Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Debtor ID</th>
                            <th scope="col">Items</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((posts,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                {/* <a href={`/postor/${posts._id}`} style={{ textDecoration: 'none' }}> */}
                                {posts._id}
                                {/* </a> */}
                            </td>
                            <td>{posts.Date}</td>
                            <td>{posts.DebtorID}</td>
                            <td>{posts.goods.map(good => <div>{good.name}</div>)}</td>
                            <td>{posts.goods.map(good => <div>{good.price}</div>)}</td>
                            <td>{posts.TotalPrice}</td>
                            <td>
                                <button type="button" className="btn-grad2" style={{width:"45px"}} href="/" onClick={()=>this.onDelete(posts._id)}>
                                    <i className="far fa-trash-alt"></i>
                                </button>


                            </td>
                        </tr>

                    ))}
                    </tbody>
                    </table>
                    
                </div>
                // </div>
        )
    }

}