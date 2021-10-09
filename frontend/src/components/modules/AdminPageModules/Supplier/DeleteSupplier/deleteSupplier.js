import React, { useEffect } from "react";
import axios from "axios";



export default function DeleteSupplier({ id }) {

    //alert(id);

    useEffect(() => {
        function delSupplier() {
            if (window.confirm('Do you want to delete this supplier information?')) {
                axios
                    .delete(`http://localhost:8000/supplier/delete/${id}`)
                    .then(res => {
                        console.log(res);
                        alert('Delete successfull');
                        window.location.href='/supplier';

                    }).catch(err => {
                        alert(err.message);
                    })
            }
        }
        delSupplier();

    }, [id])


    return (
        <>
        </>
    )
}