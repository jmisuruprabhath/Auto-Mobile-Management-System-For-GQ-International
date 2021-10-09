import React,{Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import './preorderreport.css';
import Button from 'react-bootstrap/Button'
import gqheader from '../../../../images/gqheader.png';





export default class testOrder extends Component{

    constructor(props){
        super(props);

        this.state={
            posts:[],
            date: new Date(),
            hours:new Date().getHours(), //To get the Current Hours
             min:new Date().getMinutes(), //To get the Current Minutes
             sec:new Date().getSeconds() //To get the Current Seconds

        };
    }

    generatePDF=()=>{
        const doc = new jsPDF('p','pt',[1074, 1310]);//(p,pt= points (mm,cm),page size)
        doc.html(document.querySelector("#preOrderRepo"),{
            callback:function(pdf){
                const pageCount = doc.internal.getNumberOfPages(0);
                pdf.save("Pre-Order List");
            }
        });
    };


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
        post._id.toLowerCase().includes(searchKey)||
        post.Date.toLowerCase().includes(searchKey)
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
            <div className="card">
            {/* <div style={{paddingBottom:'10px', paddingTop:'10px', marginLeft:'10px',backgroundColor:' #000000',  backgroundImage:' linear-gradient(147deg, #000000 0%, #434343 74%)'}}> */}
            <div className='row'>
             <div className="col-lg-9 mt-2 mb-2">
             <Button variant="secondary" className="btn-grad4" style={{width:'100px', marginLeft:'10px',marginBottom:'20px'}}>
                                    <a href="/preorders" style={{color:'white', textDecoration:'none'}}>Back</a>
                            </Button>
                <h4 style={{color:'black', textAlign:'center', textTransform:'uppercase'}}>All Pre-Orders</h4>
                </div> 
               <div className='col-lg-3 mt-2 mb-2'  >
                        <input style={{borderColor: 'red'}}
                               className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}>
                        </input>
                    </div>   
                &nbsp;&nbsp;&nbsp;<button className="btn-grad8" style={{width:"200px"}} onClick={this.generatePDF}>&nbsp;Download PDF</button></div>
                <div id="preOrderRepo">
                    <img src={gqheader} alt='' style={{width:'100%'}}/>
                    <hr/>
                <table id="preOrderRepo" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pre-Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Debtor ID</th>
                            <th scope="col">Items</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((posts,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                {posts._id}
                                </td>
                            <td>{posts.Date}</td>
                            <td>{posts.DebtorID}</td>
                            <td>{posts.goods.map(good => <div>{good.name}</div>)}</td>
                            <td>{posts.goods.map(good => <div>{good.quantity}</div>)}</td>
                            <td>{posts.goods.map(good => <div>{good.unitprice}</div>)}</td>
                            <td>{posts.goods.map(good => <div>{good.price}</div>)}</td>
                            <td>{posts.TotalPrice}</td>
                        </tr>

                    ))}
                    </tbody>
                    </table> 
                    <br/><br/>
                        <h3 id="gqcenter" style={{marginLeft:'-200px'}}>
                            GQ - International &nbsp;
                            Pre-Order List <br/>
                            on {this.state.date.toLocaleDateString()}<br/>
                            At {this.state.hours}:{this.state.min}:{this.state.sec}
                        </h3>

                        <br/>
                        <div style={{marginLeft:'750px'}}>
                            <p>.................................</p>
                            <h4>Signature</h4>
                        </div>
                            <div className="date" style={{marginLeft:'750px'}}>
                            <p> Date {this.state.date.toLocaleDateString()}</p>
                        </div>
  
                 </div>        
                {/* </div> */}
                </div>
        )
    }

}