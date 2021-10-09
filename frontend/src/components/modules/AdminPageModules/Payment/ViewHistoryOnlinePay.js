//import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import Allbtns from './AllBtns'
import React, {Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import gqheader from '../../../../images/gqheader.png';
import './ViewHistory.css';
import {Breadcrumb} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default class Chart extends Component {

    constructor(props) {
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
        const doc = new jsPDF('p','pt',[1120, 1310]);//(p,pt= points (mm,cm),page size)
        doc.html(document.querySelector("#onlinePayRepo"),{
            callback:function(pdf){
                const pageCount = doc.internal.getNumberOfPages(0);
                pdf.save("Online Payments Details");
            }
        });
    };

    componentDidMount() {
        this.retrieveposts();
    }

    retrieveposts(){
        axios.get("/onlinePay").then(res =>{
            if(res.data.success){
                this.setState({posts:res.data.existingOnline});
                console.log(this.state.posts);
            }
        });
    }

    filterData(posts,searchKey){
        const result = posts.filter((post) =>
            post.orderID.toLowerCase().includes(searchKey)||
            post.orderID.toUpperCase().includes(searchKey)||
            post.cusID.toLowerCase().includes(searchKey)||
            post.cusID.toUpperCase().includes(searchKey)||
            post.date.toLowerCase().includes(searchKey))

        this.setState({posts:result})
    }

    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
          axios.get("/onlinePay").then(res =>{
              if(res.data.success){
                  this.filterData(res.data.existingOnline,searchKey)
              }
          });
  
      }

   render (){
    return (
        <div className="card">
            <div style={{margin:"40px"}}>
            <Allbtns/>
            <div className='row'>
                   
                    <div className='col-lg-9 mt-2 mb-2'>

                    <span className='alignSupBtn'><button className="btn-grad8" onClick={this.generatePDF}>&nbsp;Download PDF</button>
                        <DropdownButton id='btngenreport' >
                            <Dropdown.Item eventKey="1" href='/ViewHistoryCashPay' >Cash Payments</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href='/ViewHistoryOnlinePay' active>Online Payments</Dropdown.Item>
                        </DropdownButton> </span>
                        
                        {/* <Breadcrumb>
                            <Breadcrumb.Item href="#" style={{color:"black"}} active><b>Online Payments</b></Breadcrumb.Item>
                            <Breadcrumb.Item href="./ViewHistoryCashPay" style={{textDecoration:"none"}}>Cash Payments</Breadcrumb.Item>
                        </Breadcrumb> */}

                    </div>
                    
                </div>

                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        
                        <h3>Online Payments Report Preview</h3>

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
                
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>

                    {/* <button className="btn-grad8" onClick={this.generatePDF}>&nbsp;Download PDF</button> */}
                        
                    {/* <a class="btn bg-white btn-light mx-1px text-95"  data-title="PDF" onClick={this.generatePDF}>
                            <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                            Export
                        </a> */}

                    </div>
                </div>

                <div className='row'>
                    <hr/>
                    <br/>
                </div>

                <div id="onlinePayRepo">
                    <img src={gqheader} alt='' style={{width:'100%'}}/>
                    <hr/>

                    <table id="onlinePayRepo">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Order Number</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.posts.map((posts,index) =>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                               <a href={`/OnlinePaySpecificView/${posts._id}`}>
                                    {posts._id}
                               </a>
                            </td>
                            <td>{posts.date}</td>
                            <td>{posts.orderID}</td>
                            <td>{posts.cusID}</td>
                            <td>{posts.productCode}</td>
                            <td>{posts.amount}</td>

                        </tr>

                    ))}
                    </tbody>
                    </table>

                    <br/>
                        <h3 id="gqcenter" style={{marginLeft:'-200px'}}>
                            GQ - International
                            Cash Payment summary report <br/>
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
            </div>
        </div>

        );
    }
    
}
