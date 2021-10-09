import React, {Component} from 'react';
import axios from 'axios';
import './styleme.css';
export default class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state={
            attendances:[]
        };
    }
    componentDidMount() {
        this.retreieveattendances();
    }

    /*Retreive Data*/
    retreieveattendances(){
        axios.get("/attendances").then(res =>{
            if(res.data.success){
                this.setState({attendances:res.data.existingAttendances});
                console.log(this.state.attendances);
            }
        });
    }
    /*Delete Function*/
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
            attendance.Emp_ID.toUpperCase().includes(searchKey)||
            attendance.Date.includes(searchKey)
        )
        this.setState({attendances:result})
    }
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
            <div className='card' style={{borderRadius:'0px',marginTop:'-10px',backgroundColor:' #D3D3D3',  backgroundImage:'#D3D3D3',width:'100%',alignItems:'center'}} >
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3 style={{textAlign:'center',textTransform:'uppercase',color:'#B91717'}}>All Employee Attendances</h3>
                    </div>
                         <div className='col-lg-3 mt-2 mb-2' style={{width:'100%'}}>

                            <input className='form-control'
                                   type='search'
                                   placeholder='Search'
                                   name='SearchQuery'
                                   style={{borderColor:'red'}}
                                   onChange={this.handleSearchArea}>
                            </input><br/>
                        <button className="btn-grad4"> <a href='/addAttendance' style={{textDecoration:'none',color:'white'}}> ADD ATTENDANCE</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn-grad4"> <a href='/allEmp' style={{textDecoration:'none',color:'white'}}> View Employees</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn-grad8" style={{width:'200px'}}> <a href='/attrepo' style={{textDecoration:'none',color:'white'}}>Generate Report</a></button>
                         </div>
                </div>

                <table className="table table-striped table-hover" style={{borderRadius:'20px', backgroundColor:'#D1CCCC'}}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Employee_ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Days</th>
                        <th scope="col">Time_IN</th>
                        <th scope="col">Time_OUT</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.attendances.map((attendances,index) =>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/attendance/${attendances._id}`} style={{ textDecoration:'none'}}>
                                    {attendances.FullName}
                                </a>
                            </td>
                            <td>{attendances.Emp_ID}</td>
                            <td>{attendances.Date}</td>
                            <td>{attendances.Days}</td>
                            <td>{attendances.Time_IN}</td>
                            <td>{attendances.Time_OUT}</td>
                            <td>
                                <button className='btn-grad1' style={{borderRadius:'80px',width:'40px',alignItems:'center'}}>
                                <a  style={{textDecoration:'none', color:'antiquewhite',alignItems:'center' ,marginBottom:'-10px'}} href={`/editAttendance/${attendances._id}`}>
                                    <i className="fas fa-edit"/>&nbsp;
                                </a></button>  &nbsp;<button className='btn-grad2' style={{borderRadius:'80px',width:'40px',alignItems:'center'}}>
                                <a  href="#" onClick={()=> this.onDelete(attendances._id)} style={{textDecoration:'none', color:'antiquewhite',alignItems:'center' ,marginBottom:'-10px'}} >
                                    <i className="far fa-trash-alt"/>&nbsp;
                                </a></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


