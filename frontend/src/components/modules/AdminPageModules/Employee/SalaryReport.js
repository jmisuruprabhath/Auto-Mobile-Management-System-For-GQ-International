import React, { Component } from 'react'
import axios from 'axios';
import jsPDF from "jspdf";
import './salrepo.css';
import gqheader from '../../../../images/gqheader.png';

export default class SalaryReport extends Component {

    constructor(props) {
        super(props);
        const today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state={
            esals:[],
            date: new Date(),
            currentTime: time
        };
    }


    componentDidMount() {
        this.retrieveposts();

    }
    retrieveposts(){
        axios.get("/esals").then(res =>{
            if(res.data.success){
                this.setState({esals:res.data.existingEsals});
                console.log(this.state.esals);
            }
        });
    }


    onDelete = (id) =>{
        if (window.confirm('Do you want to delete this Expense?')) {
            axios.delete(`/esal/delete/${id}`).then((res) => {
                alert("Deleted Successfully");
                this.retrieveposts();
            })
        }
    }

    filterData(esals,searchKey){
        const result = esals.filter((esal) =>
            esal.FullName.toLowerCase().includes(searchKey))
        this.setState({esals:result})
    }

    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
        axios.get("/esals").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingEsals,searchKey)
            }
        });

    }
    generatePDF=()=>{
        const doc = new jsPDF('p','pt',[1120, 1310]);//(p,pt= points (mm,cm),page size)

        doc.html(document.querySelector("#repo"),{
            callback:function(pdf){
                const pageCount = doc.internal.getNumberOfPages(0);

                pdf.save("Salary Details");
            }
        });
    };
    render() {
        return (
            <div className='card' style={{borderRadius:'0px',marginTop:'-10px',backgroundColor:'white',  width:'100%',alignItems:'center'}} >
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3 style={{textTransform:'uppercase',textAlign:'center',color:'#B91717'}}>All Employee Salaries</h3>
                    </div>
                    <div className='col-lg-3 mt-2 mb-2'  style={{width:'100%'}}>
                       <br/>
                        <button className="btn-grad4"> <a href='/viewSalary' style={{textDecoration:'none',color:'white'}}> View Salary</a></button>&nbsp;&nbsp;
                        <button className="btn-grad4"> <a href='/allEmp' style={{textDecoration:'none',color:'white'}}> View Employees</a></button>&nbsp;&nbsp;

                        <button className="btn-grad8" onClick={this.generatePDF}>  Generate Report</button>
                    </div>

                </div>
                <div id='repo'>
                <img src={gqheader} alt=''  style={{width:'100%'}}/>
                    <hr/>
                <h2 id="gqcenter">Employee Salary Report</h2><br/>
                <table >
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Date</th>
                        <th scope="col">Work_Hours</th>
                        <th scope="col">Hourly_Rate</th>
                        <th scope="col">Total_Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.esals.map((esals,index) =>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/esal/${esals._id}`} style={{ textDecoration:'none',color:'black'}}>
                                    {esals.FullName}
                                </a>
                            </td>
                            <td>{esals.Date}</td>
                            <td>{esals.Work_Hours}</td>
                            <td>{esals.Hourly_Rate}</td>
                            <td>{esals.Total_Amount}</td>
                        </tr>

                    ))}
                    </tbody>

                </table>
                    <br/>
                    <hr/>
                    <h1 id="gqcenter">GQ - International</h1>
                    <br/>
                    <div style={{marginLeft:'900px'}}>
                        <p>.................................</p>
                        <h4>Signature</h4></div>
                    <div className="date" style={{marginLeft:'900px'}}>
                        <p> Date {this.state.date.toLocaleDateString()}</p>
                        <p>{ this.state.currentTime }</p>
                    </div>
                </div>

            </div>

        );

    }

}


