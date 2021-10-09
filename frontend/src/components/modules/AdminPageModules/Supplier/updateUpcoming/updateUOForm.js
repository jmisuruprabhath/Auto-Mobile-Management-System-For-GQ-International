import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


export default function UpdateForm({ id }) {



    //alert(id);
    const [order, setOrder] = useState({});

    //const link = ;
    function setIntitalState(){
        setShipmentDate(order.shipmentDate);
        setQuantity(order.quantity);
        setCost(order.cost);
    }

    useEffect(() => {
        function getOrder() {
            axios
                .get(`http://localhost:8000/upcomingorder/get/${id}`)
                .then(res => {
                    console.log(res);
                    setOrder(res.data);
                    setIntitalState();

                }).catch(err => {
                    alert(err.message);
                })
        }
        getOrder();

    }, [id])

    /*
    useEffect(() => {
        getSupplier();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      function getSupplier() {
        fetch(`http://localhost:8080/supplier/get/${id}`).then((result) => {
          result.json().then((resp) => {
            //console.warn(resp)
            setSuppliers(resp)
            alert(suppliers.name);
          })
        })
      } */


    let [orderId, setOrderId] = useState('');
    let [itemCode, setItemCode] = useState('');
    let [shipmentDate, setShipmentDate] = useState('');
    //let [DispatchStatus, setDispatchStatus] = useState('');
    let [quantity, setQuantity] = useState(0);
    let [cost, setCost] = useState(0);






    //validation errors
    const [sidError, SetsidError] = useState(false);
    const [itemError, SetitemError] = useState(false);

    function formValidate() {
        let isValid = true;
        SetsidError(false)
        SetitemError(false)

        if (!orderId.match(/^[O][I][D][0-9]{3}$/)) {
            SetsidError(true)
            isValid = false;
        }
        if (!itemCode.match(/^[A-Z]{3,}[0-9]{3,}$/)) {
            SetitemError(true)
            isValid = false;
        }


        return isValid;
    }

    function updateData(e) {
        e.preventDefault();
        const isValid = formValidate()

        if (isValid) {

            const newOrder = {
                orderId : order.orderId,
                itemCode,
                shipmentDate,
                //DispatchStatus,
                quantity,
                cost
            }


            axios
                .put(`http://localhost:8000/upcomingorder/update/${id}`, newOrder)
                .then(() => {
                    alert("Order updated");
                    window.location.href='/upcomingorder';
                }).catch((err) => {
                    alert("Unable to update" + err);
                })
        }
    }


    return (
        <Form onSubmit={updateData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formLabel'>Order ID</Form.Label>
                <Form.Control type="textarea" placeholder="Enter supplier id"
                    onChange={(e) => {
                        setOrderId(e.target.value);
                    }}
                    defaultValue={order.orderId}
                />

                <Toast show={sidError} animation={true}>
                    <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect order ID format: OID000</span></Toast.Body>
                </Toast>


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='formLabel'>Item Code</Form.Label>
                <Form.Control type="textarea" defaultValue={order.itemCode} placeholder="Enter name"
                    onChange={(e) => {
                        setItemCode(e.target.value);
                    }}
                />
            </Form.Group>


            <Toast show={itemError} animation={true}>
                <Toast.Body> <span style={{ color: 'red', fontSize: 15 }}>Incorrect item code format</span></Toast.Body>
            </Toast>



            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formLabel'>Shipment Date</Form.Label> 
                <Form.Control type="textarea" defaultValue={order.shipmentDate} placeholder="Enter address"
                    onChange={(e) => {
                        setShipmentDate(e.target.value);
                    }}
                />
            </Form.Group>

            {/*<Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dispatch Status</Form.Label>
                <Form.Control type="textarea" defaultValue={order.DispatchStatus} placeholder="Enter country"
                    onChange={(e) => {
                        setDispatchStatus(Number(e.target.value));
                    }}
                    
                /> 
            </Form.Group> */}


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formLabel'>Quantity</Form.Label>
                <Form.Control type="textarea" defaultValue={order.quantity} placeholder="Enter postal code"
                    onChange={(e) => {
                        setQuantity(Number(e.target.value));
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='formLabel'>Cost</Form.Label>
                <Form.Text>LKR</Form.Text>
                <Form.Control type="textarea" defaultValue={order.cost} placeholder="Enter email"
                    onChange={(e) => {
                        setCost(Number(e.target.value));
                    }}
                />
            </Form.Group>




            <center>

                <Button variant="primary" type="submit" className='submitBtnForm'>
                    Update Order
                </Button>
            </center>
        </Form>
    )
}