import React,{Component} from 'react';
import jsPDF from "jspdf";
import gqheader from "../../../../images/gqheader.png";

export  default  class manualStockReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            specialNote: "",
            date: new Date(),
            hours:new Date().getHours(), //To get the Current Hours
            min:new Date().getMinutes(), //To get the Current Minutes
            sec:new Date().getSeconds() //To get the Current Seconds


        };
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    createPdf = (e) => {
        if (!this.state.specialNote) {
            alert("All fields are required!");
            e.preventDefault();
        } else {
            const doc = new jsPDF('p', 'pt', [1120, 1310]);//(p,pt= points (mm,cm),page size)
            doc.html(document.querySelector("#manualStockRepo"), {
                callback: function (pdf) {
                    const pageCount = doc.internal.getNumberOfPages(0);
                    pdf.save("Manual Stock Report");
                }
            });
        }
    };

    render() {
        return (
            <>
            <div style={{background:'#fff'}}>

                &nbsp;&nbsp;
                <button onClick={this.createPdf} type="button"  className="btn-grad8"  style={{width:'160px',fontWeight:'bold',marginTop:'20px'}}>Capture as a PDF</button>

                &nbsp;&nbsp;&nbsp;
                <button className="btn-grad" style={{width:'160px'}}>
                    <a href="/Stock" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                        View Stocks
                    </a>
                </button>
                <br/><br/>

                {/* Manual stock report id declaration */}
                <form id="manualStockRepo">

                    <div>
                        <img src={gqheader} alt='' style={{width:'100%'}}/>
                        <hr/>
                        <h2 style={{marginLeft:'400px',color:'black'}}>Manual Summary Stock Report</h2>

                        <div className="form-check" style={{marginLeft:'50px'}}>
                            <input className="form-check-input" type="radio" name="title"
                                   id="flexRadioDefault1"/>Stocks

                        </div>
                        <div className="form-check" style={{marginLeft:'50px'}}>
                            <input className="form-check-input" type="radio" name="title"
                                   id="flexRadioDefault2" checked/>Items

                        </div>
                        <div className="form-check" style={{marginLeft:'50px'}}>
                            <input className="form-check-input" type="radio" name="title"
                                   id="flexRadioDefault2" checked/>Deficits

                        </div>


    <br/>
                    <div className="row mb-3" style={{marginLeft:'110px'}}>
                        <label htmlFor="specialNote" className="col-sm-2 col-form-label">Special Note</label>
                        <div className="col-sm-10"><br/>
                          <textarea onChange={this.onChange('specialNote')} placeholder='Enter Special Note...' rows="5" className="form-control" name="specialNote" id="specialNote" style={{width:'600px',border:'none'}}>

                          </textarea>
                        </div>
                    </div>
                    </div>


                <br/>
                <hr/>
                <h2 id="gqcenter" style={{marginLeft:'50px'}}>
                    GQ - International
                    Manual Stock Special Note <br/>
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
                </form>
            </div>

            </>
        )
    }
}