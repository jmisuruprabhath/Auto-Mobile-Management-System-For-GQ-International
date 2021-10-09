import React, {Component} from 'react';
import './StylesE.css';
import axios from "axios";
class EmployeeDtails extends Component {


    constructor(props) {
        super(props);

        this.state={
            employees:[]
        };
    }

    componentDidMount() {
        this.retrieveemployees();
    }
    retrieveemployees(){
        axios.get("/employees").then(res =>{
            if(res.data.success){
                this.setState({employees:res.data.existingEmployees});
                console.log(this.state.employees);
            }
        });
    }

    onDelete = (id) =>{
        if (window.confirm('Do you want to delete this Employee?')) {
            axios.delete(`/employee/delete/${id}`).then((res) => {
                alert("Employee Deleted Successfully");
                this.retrieveemployees();
            })
        }
    }

    filterData(employees,searchKey){
        const result = employees.filter((employee) =>
            employee.FullName.toLowerCase().includes(searchKey)||
            employee.FullName.toUpperCase().includes(searchKey)||
            employee.Emp_ID.toLowerCase().includes(searchKey)||
            employee.Emp_ID.toUpperCase().includes(searchKey)
        )

        this.setState({employees:result})
    }

    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
        axios.get("/employees").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingEmployees,searchKey)
            }
        });

    }
    render() {
        return (
            <div className='card' style={{borderRadius:'0px',marginTop:'-60px',backgroundColor:' #D3D3D3',  backgroundImage:'#D3D3D3',width:'108%',alignItems:'center',marginLeft:'-40px'}} >

                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3 style={{color:'#B91717',textAlign:'center',width:'100%',textTransform:'uppercase',marginLeft:'100px'}}>All Employees</h3>
                    </div>

                    <div className='col-lg-3 mt-2 mb-2'>

                        <input className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}
                               style={{width:'600px',marginTop:'80px',float:'right',display:'flex',borderColor:'red'}}>
                        </input>
                    </div>
                </div><hr/>
                {/* head */}

                <br/><br/><br/>
                {/* button */}

                <div style={{marginTop:'-50px'}}>
                    <button className='btn-grad' > <a href='/add' style={{textDecoration:'none',textAlign:'center',color:'white'}}> ADD New Employee</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn-grad' ><a href='/viewAttendance' style={{textDecoration:'none',textAlign:'center',color:'white'}}> View Attendances</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn-grad' ><a href='/viewSalary' style={{textDecoration:'none',textAlign:'center',color:'white'}}> View Salary</a></button></div>&nbsp;&nbsp;

                {/* end button */}

                {/* table */}
                <table style={{backgroundColor:'#D1CCCC'}} className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                <tbody>
                {this.state.employees.map((employees,index) =>(

                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/employee/${employees._id}`} style={{ textDecoration:'none'}}>
                                {employees.FullName}
                            </a>
                        </td>
                        <td>{employees.Emp_ID}</td>
                        <td>{employees.Address}</td>
                        <td>{employees.Email}</td>
                        <td>{employees.Phone}</td>

                        <td><button className='btn-grad1' style={{width:'70px'}}>
                            <a href={`/edit/${employees._id}`} style={{textDecoration:'none',color:'white'}}>
                                <i className="fas fa-edit"/>&nbsp;EDIT
                            </a></button>
                            &nbsp;<button className='btn-grad2' >
                                <a  href="#" onClick={()=> this.onDelete(employees._id)} style={{textDecoration:'none',color:'white'}}>
                                    <i className="far fa-trash-alt"/>&nbsp;DELETE
                                </a></button>
                        </td>
                    </tr>

                ))}
                </tbody>

                </table>
                {/* table end*/}
            </div>
        );
    }
}

export default EmployeeDtails;