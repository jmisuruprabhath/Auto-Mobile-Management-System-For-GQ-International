import React, { useState, useEffect } from "react";
import axios from "axios";
import './viewSupplier.css';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import AddModal from '../AddSupplier/addModal';
import UpdateForm from "../UpdateSupplier/updateForm";

import DeleteSupplier from "../DeleteSupplier/deleteSupplier";
import Spinner from 'react-bootstrap/Spinner';
import SupplierNav from '../SupplierNav/supplierNav';
//import UpdateModal from "../AddSupplier/updateModal";

//searchX
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';



//upadatemodel
import Modal from 'react-bootstrap/Modal';



export default function AllSupplier() {

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

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        function getSupplier() {
            axios.get("http://localhost:8000/supplier/").then((res) => {
                setSuppliers(res.data);
                //setID(res.data[0]._id);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getSupplier();
    }, [])

    function selectUser(id) {
        //alert("id: " + id);  
        setID(id);
    }

    function deleteSup(id) {
        setID(id);
        //alert("id: " + id);
    }


    //search functions


    //function filterData
    //let [result, setResult] = useState([]);


    function filterData(s,k){
        let result = s.filter((s) =>(
            s.name.toLowerCase().includes(k)||
            s.name.toUpperCase().includes(k)||
            s.supplierId.toLowerCase().includes(k)||
            s.supplierId.toUpperCase().includes(k)
        ))
        setSuppliers(result);
    }

    function handleSearchArea (e){
        const searchKey = e.currentTarget.value;
        console.log(searchKey);

        filterData(suppliers, searchKey);

    }



    return (
        <div className='supplierMargin'>
            <SupplierNav/>
            <br/>
            <center><h3 style={{fontWeight:"bold", color:"brown", textDecoration:"white"}}>ALL SUPPLIER INFORMATION</h3></center>

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
                        <th>SupplierID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Postal Code</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th><center><AddModal/></center></th>
                    </tr>
                </thead>

                <tbody>

                    {suppliers.map(suppliers =>

                        <tr>
                            <td>{suppliers.supplierId} </td>
                            <td>{suppliers.name}</td>
                            <td>{suppliers.address}</td>
                            <td>{suppliers.country}</td>
                            <td>{suppliers.postalCode} </td>
                            <td>{suppliers.email}</td>
                            <td>{suppliers.phone}</td>



                            <td><center>
                                <Button className='btnEdit' onClick={e => { setUpdate(true); selectUser(suppliers._id); }}>
                                    <i class="fas fa-edit"></i>
                                </Button>
                                <Button className='btnDelete' onClick={() => { deleteSup(suppliers._id); setShow(true); }}>
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
                        <Modal.Title id="example-modal-sizes-title-lg" className='formLabel'>
                            UPDATE SUPPLIER INFORMATION <br />
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
                        <DeleteSupplier id={id} />
                    </Modal.Body>

                </Modal>

            </div>

        </div>

    )

}