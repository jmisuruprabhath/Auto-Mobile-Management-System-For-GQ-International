import React, { useState, useEffect } from "react";
import axios from "axios";
import SupplierNav from '../SupplierNav/supplierNav';
//import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
//import AddModal from '../AddUpcoming/addUOModal';
//import UpdateForm from '../updateUpcoming/updateUOForm';
import './viewSupplier.css';

//import DeleteOrder from "../DeleteUpcoming/deleteOrder";
//import Spinner from 'react-bootstrap/Spinner';

//import UpdateModal from "../AddSupplier/updateModal";

//seaarch
import {Row, Col,Form} from 'react-bootstrap';

//upadatemodel
//import Modal from 'react-bootstrap/Modal';



//report gen

import jsPDF from 'jspdf';
//import autoTable from 'jspdf-autotable';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import gqheader from '../../../../../images/gqheader.png';


function genreport(){
    const doc = new jsPDF('p','pt',[1120, 1310]);//(p,pt= points (mm,cm),page size)
    doc.html(document.querySelector("#repo"),{
        callback:function(pdf){
            //const pageCount = doc.internal.getNumberOfPages(0);
            pdf.save("upcomming_order_report");
        }
    });  
}




export default function ReportUpcome() {



    //const [item, setItem] = useState('');
    /*let [supplierId, setSupplierId] = useState('');
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    let [country, setCountry] = useState("");
    let [postalCode, setPostalCode] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState(""); */
    //


        const [date] = useState (new Date());
    
        const [time] = useState(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());

        const [upcomings, setUpcomings] = useState([]);




    useEffect(() => {
        function getOrders() {
            axios
                .get("http://localhost:8000/upcomingorder/")
                .then((res) => {
                    setUpcomings(res.data);
                    console.log(res.data);
                    
                    //setID(res.data[0]._id);
                }).catch((err) => {
                    alert(err.message);
                })
        }
        getOrders();
    }, [])




    //search functions
    function filterData(s,k){
        let result = s.filter((s) =>(
            s.shipmentDate.toLowerCase().includes(k) ||
            s.shipmentDate.toUpperCase().includes(k) ||
            s.orderId.toLowerCase().includes(k) ||
            s.orderId.toUpperCase().includes(k) ||
            s.itemCode.toLowerCase().includes(k) ||
            s.itemCode.toUpperCase().includes(k) 
        ))
        setUpcomings(result);
    }

    function handleSearchArea (e){
        const searchKey = e.currentTarget.value;
        console.log(searchKey);

        filterData(upcomings, searchKey);

    }




    return (
        <div className='upcomingMargin'>
            <SupplierNav/>
            <h3>Upcomming Order Report</h3>
            <Form>
            <Row className="align-items-center">
                <Col sm={3} className="my-1">
                    <Form.Control 
                        id="inlineFormInputName" 
                        placeholder="Search keyword"  
                        type='serach'
                        onChange={e => { handleSearchArea(e) } }/>
                </Col> 
                </Row>
             </Form>
    <span className='alignSupBtn'><Button id='btngenreport' onClick={()=>{genreport()}}> Generate Report </Button>
    <DropdownButton id='btngenreport'onClick={()=>{genreport()}} >
        <Dropdown.Item eventKey="1" href='/reportsGenerator' >Supplier information</Dropdown.Item>
        <Dropdown.Item eventKey="2" href='/reportupcome' active>Upcomming order</Dropdown.Item>
    </DropdownButton>
    </span>


             <div id='repo'>
             <img src={gqheader} alt=''  style={{width:'100%'}}/>
                    <hr/>
                    <h2 id="gqcenter">UPCOMING ORDER REPORT</h2><br/>
    
            
            <table responsive id='upcometable'>

                <thead>
                    <tr className='tableHeader'>
                        <th>Order Id</th>
                        <th>Item Code</th>
                        <th>Shipment Date</th>
                        <th>Supplier Id</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                    </tr>
                </thead>

                <tbody>

                    {upcomings.map(upcomings =>

                        <tr>
                            <td>{upcomings.orderId} </td>
                            <td>{upcomings.itemCode}</td>
                            <td>{upcomings.shipmentDate}</td>
                            <td>{String(upcomings.DispatchStatus)}</td>
                            <td>{Number(upcomings.quantity)} </td>
                            <td>{Number(upcomings.cost)}</td>

                        </tr>

                    )}

                </tbody>
            </table>

            <hr/>
                    <h1 id="gqcenter">GQ - International</h1>
                    <br/>
                    <div style={{marginLeft:'900px'}}>
                        <p>.................................</p>
                        <h4>Signature</h4></div>
                    <div className="date" style={{marginLeft:'900px'}}>
                        <p> Date {date.toLocaleDateString()}</p>
                        <p>{time}</p>
                    </div>
        </div>
        </div>

    )

}