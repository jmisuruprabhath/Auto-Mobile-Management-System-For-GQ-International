import React, { useEffect } from "react";
import axios from "axios";



export default function DeleteOrder({ id }) {

    //alert(id);

    useEffect(() => {
        function deleteOrder() {
            if (window.confirm('Do you want to delete this order?')) {
                axios
                    .delete(`http://localhost:8000/upcomingorder/delete/${id}`)
                    .then(res => {
                        console.log(res);
                        window.alert('Delete successfull');
                        window.location.href='/upcomingorder';

                    }).catch(err => {
                        alert(err.message);
                    })
            }
        }
        deleteOrder();

    }, [id])


    return (
        <>
        </>
    )
}