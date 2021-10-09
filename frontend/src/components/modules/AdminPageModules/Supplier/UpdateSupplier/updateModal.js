import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddForm from "../AddSupplier/addForm";



export default function UpdateModal({id}) {

    const [uShow, setUpdate] = useState(false);

    return (
        <>

            <div>
                <Button variant="outline-danger" onClick={() => setUpdate(true)}><i class="fas fa-edit"></i></Button>
                <Modal
                    size="lg"
                    show={uShow}
                    onHide={() => setUpdate(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Update Supplier Information <br/>
                            {id}
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

