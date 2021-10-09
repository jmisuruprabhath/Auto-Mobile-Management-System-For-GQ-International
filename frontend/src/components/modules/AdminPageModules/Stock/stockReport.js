import React, { Component } from 'react';
import axios from 'axios';
import './stock.css';
import jsPDF from "jspdf";
import gqheader from '../../../../images/gqheader.png';
import './stockReport.css';

export default class stockReport extends Component {
    constructor(props){
        super(props);

        this.state={
            stocks:[],
             date: new Date(),
             hours:new Date().getHours(), //To get the Current Hours
             min:new Date().getMinutes(), //To get the Current Minutes
             sec:new Date().getSeconds() //To get the Current Seconds

        };
    }

    generatePDF=()=>{
        const doc = new jsPDF('p','pt',[1120, 1310]);//(p,pt= points (mm,cm),page size)
        doc.html(document.querySelector("#stockRepo"),{
            callback:function(pdf){
                const pageCount = doc.internal.getNumberOfPages(0);
                pdf.save("Summary stock Details");
            }
        });
    };


    componentDidMount(){
        this.retrieveStocks();
    }

    retrieveStocks(){
        axios.get("/stocks").then(res=>{
            if(res.data.success){
                this.setState({
                    stocks:res.data.existingStocks
                });

                console.log(this.state.stocks)
            }
        });
    } 

    onDelete = (id) =>{
        if (window.confirm('Do you want to delete this Stock?')) {
            axios.delete(`/stock/delete/${id}`).then((res) => {
                alert("Item Deleted Successfully!");
                this.retrieveStocks();
            })
        }
    }

   
        
    render() {
        return (
            <div className='card' style={{marginTop:'0px',width:'100%',alignItems:'center',marginLeft:'0px',border:'none'}} >
            

                <div className="row">
                
                <br/>
                <br/>
                <div className="col-lg-9 mt-2 mb-2"><br/><br/>
            
                    &nbsp;&nbsp;&nbsp;
            <button className="btn-grad8" style={{width:'160px',fontWeight:'bold'}} onClick={this.generatePDF}>
                   
                    Generate report
                   
                    </button>

                    &nbsp;&nbsp;&nbsp;
            <button className="btn-grad" style={{width:'160px'}}>
                   <a href="/Stock" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    View Stocks
                    </a>
                    </button>
                    <br/><br/>
                   
                </div>

                    {/* Stock report  */}
                <div id="stockRepo">
                    <img src={gqheader} alt='' style={{width:'100%'}}/>
                    <hr/>
                <h2 style={{marginLeft:'400px',color:'black'}}>Summary Stock Report</h2>
                <h4 style={{color:'black',fontWeight:'bolder',marginTop:'50px',marginLeft:'400px'}}> Total number of Stocks: {this.state.stocks.reduce(
                           (sum,stock)=>stock.Quantity+sum,0
                       )}
                </h4>
            
               <table style={{marginTop:'40px',backgroundColor:'#ffff',borderRadius:'30px',borderColor:'#ffff'}}>
                   <thead>
                    <tr  style={{fontWeight:'bold',color:'black',fontSize:'20px'}}>
                        <th scope="col">#</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                
                    </tr>
                    </thead>
                <tbody>
                    {this.state.stocks.map((stocks,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            
                                {stocks.ItemCode}
                           
                        </td>
                        <td>{stocks.Category}</td>
                        <td>{stocks.Quantity}</td>
                       
                    </tr>
                    ))}
                </tbody>
               </table>
               <br/>
                    <hr/>
                    <h2 id="gqcenter" style={{marginLeft:'50px'}}>
                    GQ - International
                    Stock summary report <br/>
                    on {this.state.date.toLocaleDateString()}<br/>
                    At {this.state.hours}:{this.state.min}:{this.state.sec}
                    </h2>
                    <br/>
                    <div style={{marginLeft:'900px'}}>
                    <p>.................................</p>
                    <h4>Signature</h4></div>
                    <div className="date" style={{marginLeft:'900px'}}>
                        <p> Date {this.state.date.toLocaleDateString()}</p>
                    </div>


                    
            </div>
            
            </div>
            </div>
            
            
        )
    }
}