import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "react-router";

class AttendanceDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            attendance:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/attendance/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    attendance:res.data.attendance
                });
                console.log(this.state.attendance);
            }
        });
  }
  render() {
    const { FullName, Emp_ID, Date, Days, Time_IN, Time_OUT } =
      this.state.attendance;
    return (
      <div
        className="card"
        style={{
          marginTop: "20px",
          alignItems: "center",
          width: "70%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            marginLeft: "50px",
            marginRight: "200px",
          }}
        >
          &nbsp;&nbsp;&nbsp;
          <h4 style={{ color: "blue", marginRight: "100px" }}>{FullName}</h4>
          <hr />
          <dl className="row">
            <dt className="col-sm-3">Employee ID</dt>
            <dd className="col-sm-9">{Emp_ID}</dd>
            <hr />
            <dt className="col-sm-3">Date</dt>
            <dd className="col-sm-9">{Date}</dd>
            <hr />
            <dt className="col-sm-3">Days</dt>
            <dd className="col-sm-9">{Days}</dd>
            <hr />
            <dt className="col-sm-3">Time_IN</dt>
            <dd className="col-sm-9">{Time_IN}</dd>
            <hr />
            <dt className="col-sm-3">Time_OUT</dt>
            <dd className="col-sm-9">{Time_OUT}</dd>
          </dl>
        </div>
        <button
          className="btn-grad"
          style={{ margin: "20px", marginLeft: "400px", float: "right" }}
        >
          <a
            href="/viewAttendance"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Back To Dashboard
          </a>
        </button>
      </div>
    );
  }
}
export default withRouter(AttendanceDetails);
