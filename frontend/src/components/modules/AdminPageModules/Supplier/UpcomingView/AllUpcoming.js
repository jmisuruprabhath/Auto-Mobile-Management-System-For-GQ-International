import React, { useState, useEffect } from "react";
import axios from "axios";
import SupplierNav from '../SupplierNav/supplierNav';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import AddModal from '../AddUpcoming/addUOModal';
import UpdateForm from '../updateUpcoming/updateUOForm';
import './viewUpcoming.css';

import DeleteOrder from "../DeleteUpcoming/deleteOrder";
import Spinner from 'react-bootstrap/Spinner';

//import UpdateModal from "../AddSupplier/updateModal";

//seaarch
import {Row, Col,Form} from 'react-bootstrap';

//upadatemodel
import Modal from 'react-bootstrap/Modal';



export default function AllUpcomming() {

    //These are form update model
    const [uShow, setUpdate] = useState(false);
    //end


    //delete
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    //creating variables to fill form
    let [id, setID] = useState('');
    //const [item, setItem] = useState('');
    /*let [supplierId, setSupplierId] = useState('');
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    let [country, setCountry] = useState("");
    let [postalCode, setPostalCode] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState(""); */
    //

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

    function selectUser(id) {
        //setItem (suppliers[id]);
        //alert("id: " + id);  
        setID(id);
    }

    function deleteOrder(id) {
        setID(id);
        //alert("id: " + id);
    }




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
            <br/>
            <center><h3 style={{fontWeight:"bold", color:"brown"}}>ALL UPCOMING ORDERS</h3></center>



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

            <Table striped bordered hover responsive>

                <thead>
                    <tr className='tableHeader'>
                        <th>Order Id</th>
                        <th>Item Code</th>
                        <th>Shipment Date</th>
                        <th>Supplier Id</th>
                        <th>Quantity</th>
                        <th>Cost</th>

                        <th><center><AddModal /></center></th>
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

                            <td><center>
                                <Button className='btnEdit' onClick={e => { setUpdate(true); selectUser(upcomings._id); }}>
                                    <i class="fas fa-edit"></i>
                                </Button>
                                <Button className='btnDelete' onClick={() => { deleteOrder(upcomings._id); setShow(true); }}>
                                    <i class="fas fa-trash-alt"></i>
                                </Button>
                            </center></td>


                        </tr>

                    )}

                </tbody>
            </Table>


            <div>

                <Modal
                    size="lg"
                    show={uShow}
                    onHide={() => setUpdate(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Update Order <br />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <UpdateForm id={id} />

                    </Modal.Body>
                </Modal>

                <Modal show={show} onHide={handleClose}>

                    <Modal.Body>
                        <center>
                            <Spinner animation="border" />
                        </center>
                        <DeleteOrder id={id} />
                    </Modal.Body>

                </Modal>

            </div>

        </div>

    )

}