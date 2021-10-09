import React, {Component} from 'react';
import jsPDF from "jspdf";
import gqheader from "../../../../images/gqheader.png";
class ManualReport extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FullName: "",
            Emp_ID: "",
            Address: "",
            Phone: "",
            specialNote: "",
            date: new Date(),
            hours: new Date().getHours(), //To get the Current Hours
            min: new Date().getMinutes(), //To get the Current Minutes
            sec: new Date().getSeconds() //To get the Current Seconds


        };
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    generatePDF = (e) => {
        if (!this.state.specialNote) {
            alert("Please Fill All the Fields!");
            e.preventDefault();
        } else {
            const doc = new jsPDF('p', 'pt', [1120, 1310]);//(p,pt= points (mm,cm),page size)
            doc.html(document.querySelector("#SpecialNotes"), {
                callback: function (pdf) {
                    const pageCount = doc.internal.getNumberOfPages(0);
                    pdf.save("Employee Special Note");
                }
            });
        }
    };


    render() {
        return (
            <div className="card" style={{width: '100%'}}>
                <button className="btn-grad8" style={{marginTop:'20px',marginLeft:'820px'}} onClick={this.generatePDF}>  Generate Report</button><br/>
                <form id="SpecialNotes">
                    <img src={gqheader} alt='' style={{width:'100%'}}/>
                    <hr/>
                    <h2 style={{marginLeft:'400px',color:'black'}}>Manual Employee Report</h2><hr/>
<div  style={{alignItems:'center',marginLeft:'70px'}}>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4" >Full Name</label>
                            <input type="email" className="form-control" style={{border:'none',marginTop:'10px'}} id="inputEmail4"  placeholder="Enter Full Name"/>
                        </div><hr/>
                        <div className="form-group col-md-6" style={{marginTop:'20px'}}>
                            <label htmlFor="inputPassword4">Employee ID</label>
                            <input type="text" className="form-control" style={{border:'none',marginTop:'10px'}} id="inputPassword4" placeholder="Enter Employee ID"/>
                        </div>
                    </div><hr/>
                    <div className="form-group" style={{marginTop:'20px'}}>
                        <label htmlFor="inputAddress">Phone</label>
                        <input type="text" className="form-control" id="inputAddress" style={{width:'510px',border:'none',marginTop:'10px'}} placeholder="Enter Phone Number"/>
                    </div><hr/>
                   {} <div className="form-group" style={{marginTop:'20px',}}>
                        <label htmlFor="inputAddress2">Address</label>
                        <input type="text" className="form-control" style={{width:'700px',border:'none',marginTop:'10px'}} id="inputAddress2"
                               placeholder="Enter Address"/>
                    </div><hr/>
                    <div className="form-group" style={{marginTop:'20px'}}>
                        <label htmlFor="exampleFormControlTextarea1">Special Notes</label>
                        <textarea  onChange={this.onChange('specialNote')}  placeholder="Special Notes" className="form-control" style={{width:'700px',border:'none',marginTop:'10px'}} id="exampleFormControlTextarea1" rows="3"/>
                    </div>
</div>
                    <hr/>
                    <h4 id="gqcenter" style={{marginLeft:'50px'}}>
                        GQ - International
                        Manual Employee Report <br/>
                       Generated on {this.state.date.toLocaleDateString()}<br/>
                        At {this.state.hours}:{this.state.min}:{this.state.sec}
                    </h4>
                    <br/>
                    <div style={{marginLeft:'900px'}}>
                    </div>
                    <div className="date" style={{marginLeft:'900px'}}>
                        <p> Date {this.state.date.toLocaleDateString()}</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default ManualReport;