import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddForm from "./addUOForm";



export default function AddModal() {

    const [lgShow, setLgShow] = useState(false);

    return (
        <>

            <div>
                <Button className='addbtn1' variant="success" onClick={() => setLgShow(true)}><i class="far fa-plus-square"></i>   Add Order</Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Add Order
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                            <AddForm />

                    </Modal.Body>
                </Modal>


                
            </div>
        </>
    );
}

//   render(<addForm />);

