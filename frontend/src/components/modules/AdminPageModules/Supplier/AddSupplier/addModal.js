import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddForm from "./addForm";



export default function AddModal() {

    const [lgShow, setLgShow] = useState(false);

    return (
        <>

            <div>
                <Button className='addbtn1' variant="danger" onClick={() => setLgShow(true)}><i class="far fa-plus-square"></i>   Add Supplier</Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" className='formLabel'>
                            ADD SUPPLIER INFORMATION
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

