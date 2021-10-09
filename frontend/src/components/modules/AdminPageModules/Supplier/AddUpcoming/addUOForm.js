import React, { useState } from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


export default function AddForm() {


    //validation errors
    const [sidError, SetsidError] = useState(false);
    const [sidError2, SetsidError2] = useState(false);
    const [itemError, SetitemError] = useState(false);
    const [supIdError, SetSuplierIDError] = useState(false);

    const [orderId, setOrderId] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [shipmentDate, setShipmentDate] = useState('');
    const [DispatchStatus, setDispatchStatus] = useState('');
    const [suplierID, setSuplierID] = useState('SID123');
    const [quantity, setQuantity] = useState('');
    const [cost, setCost] = useState('');



    function formValidate() {
        let isValid = true;
        SetsidError(false);
        SetitemError(false);
        SetsidError2(false);
        SetSuplierIDError(false);

        if (!orderId.match(/^[O][I][D][0-9]{3}$/)) {
            SetsidError(true)
            isValid = false;
        }
        if (!itemCode.match(/^[A-Z]{3,}[0-9]{3,}$/)) {
            SetitemError(true)
            isValid = false;
        }
        if (!DispatchStatus.match(/^[S][I][D][0-9]{3}$/)) {
            SetsidError2(true);
            isValid = false;
        }
        if (!suplierID.match(/^[S][I][D][0-9]{3}$/)) {
            SetSuplierIDError(true);
            isValid = false;
        }
        return isValid;
    }
    function sendData(e) {
        e.preventDefault();
        const isValid = formValidate()

        if (isValid) {

            const newOrder = {
                orderId,
                itemCode,
                shipmentDate,
                DispatchStatus,
                quantity,
                cost
            }

            axios.post("http://localhost:8000/upcomingorder/add/", newOrder).then(() => {
                alert("New order added");
                window.location.href='/upcomingorder';
            }).catch((err) => {
                alert("Unable to add" + err);
            })
        }
    }


    return (
        <Form onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formLabel'>Order ID</Form.Label>
                <Form.Control type="textarea" placeholder="Enter order id"
                    onChange={(e) => {
                        setOrderId(e.target.value);
                    }}
                    required
                />

                <Toast show={sidError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect order ID format: OID000</span></Toast.Body>
                </Toast>


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='formLabel'>Item Code</Form.Label>
                <Form.Control type="textarea" placeholder="Enter item code"
                    onChange={(e) => {
                        setItemCode(e.target.value);
                    }}
                />


                <Toast show={itemError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect Item code format</span></Toast.Body>
                </Toast>



            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formLabel'>ShipmentDate</Form.Label>
                <Form.Control type="date" placeholder="Enter shipment date"
                    onChange={(e) => {
                        setShipmentDate(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='formLabel'>Supplier Id</Form.Label>
                <Form.Control type="textarea" placeholder="Enter status"
                    onChange={(e) => {
                        setDispatchStatus(e.target.value);
                    }}
                />
                <Toast show={sidError2} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect supplier ID format: SID000</span></Toast.Body>
                </Toast>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formLabel'>Quantity</Form.Label>
                <Form.Control type="textarea" placeholder="Enter quantity"
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='formLabel'>Cost</Form.Label>
                <Form.Text>LKR</Form.Text>
                
                <Form.Control type="textarea" placeholder="Enter cost"
                    onChange={(e) => {
                        setCost(e.target.value);
                    }}
                />
            </Form.Group>
            <center>

                <Button variant="primary" type="submit" className='submitBtnForm'>
                    Add Order
                </Button>
            </center>
        </Form>
    )
}