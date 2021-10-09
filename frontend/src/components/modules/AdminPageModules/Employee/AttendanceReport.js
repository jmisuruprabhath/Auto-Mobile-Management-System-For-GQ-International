import React, {Component} from 'react';
import axios from 'axios';
import './styleme.css';
import jsPDF from "jspdf";
import './salrepo.css';
import gqheader from '../../../../images/gqheader.png';
export default class AttendanceReport extends Component {

    constructor(props) {
        super(props);
        const today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state={
            attendances:[],
            date: new Date(),
            currentTime: time
        };
    }

    componentDidMount() {
        this.retreieveattendances();
    }

    retreieveattendances(){
        axios.get("/attendances").then(res =>{
            if(res.data.success){
                this.setState({attendances:res.data.existingAttendances});
                console.log(this.state.attendances);
            }
        });
    }

    onDelete = (id) =>{
        if (window.confirm('Do you want to delete this Employee?')) {
            axios.delete(`/attendance/delete/${id}`).then((res) => {
                alert("Attendance Deleted Successfully");
                this.retreieveattendances();
            })
        }
    }

    filterData(attendances,searchKey){
        const result = attendances.filter((attendance) =>
            attendance.FullName.toLowerCase().includes(searchKey)||
            attendance.FullName.toUpperCase().includes(searchKey)||
            attendance.Emp_ID.toLowerCase().includes(searchKey)||
            attendance.Emp_ID.toUpperCase().includes(searchKey)
        )
        this.setState({attendances:result})
    }

    /*Generate Report*/
    generatePDF=()=>{
        const doc = new jsPDF('p','pt',[1100, 1300]);//(p,pt= points (mm,cm),page size)
        doc.html(document.querySelector("#repo"),{
            callback:function(pdf){
                const pageCount = doc.internal.getNumberOfPages(0);
                pdf.save("Attendance Details");
            }
        });
    };
    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
        axios.get("/attendances").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingAttendances,searchKey)
            }
        });

    }
    render() {
        return (
            <div className='card' style={{borderRadius:'0px',marginTop:'-10px',backgroundColor:' white',width:'100%',alignItems:'center'}} >
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3 style={{textTransform:'uppercase',color:'white'}}>All Employee Attendances</h3>
                    </div>
                        <div className='col-lg-3 mt-2 mb-2' style={{width:'100%'}}>
                            <button className="btn-grad4"> <a href='/viewAttendance' style={{textDecoration:'none',color:'white'}}> View Attendances</a></button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn-grad8"> <a href='/spcnote' style={{textDecoration:'none',color:'white'}}> Manual Report </a></button>&nbsp;&nbsp;
                            <button className="btn-grad8" onClick={this.generatePDF}>  Generate Report</button>
                        </div>
                </div>
                {/*Calling Report ID */}
                <div id='repo'>
                    <img src={gqheader} alt=''  style={{width:'100%'}}/>
                        <hr/>
                        <h2 id="gqcenter" style={{color:'#B91717'}}>Employee     Attendances     Report</h2><br/>
                <table>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Employee_ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Days</th>
                        <th scope="col">Time_IN</th>
                        <th scope="col">Time_OUT</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.attendances.map((attendances,index) =>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/attendance/${attendances._id}`} style={{ textDecoration:'none',color:'black'}}>
                                    {attendances.FullName}
                                </a>
                            </td>
                            <td>{attendances.Emp_ID}</td>
                            <td>{attendances.Date}</td>
                            <td>{attendances.Days}</td>
                            <td>{attendances.Time_IN}</td>
                            <td>{attendances.Time_OUT}</td>
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


