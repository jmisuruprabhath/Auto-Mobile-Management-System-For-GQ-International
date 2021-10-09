import React from 'react';
//import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import './supplierNav.css';


const supplierNav = () => {
    return (
        <Nav justify variant="button" defaultActiveKey="/home" className='navSupplier'>
            <Nav.Item>
                <Nav.Link href="/supplier"  className='navitemsSupplier' ><span className='supplierNavbar'>Supplier Information</span></Nav.Link>
            </Nav.Item >

           {/* <Nav.Item>
                <Nav.Link  eventKey="link-1" className='navitemsSupplier'><span className="supplierNavbar">Order</span></Nav.Link>
           </Nav.Item> */}

            <Nav.Item>
                <Nav.Link href="/upcomingorder" eventKey="link-2" className='navitemsSupplier'><span className="supplierNavbar">Upcomming Order</span></Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/reportsGenerator" className='navitemsSupplier'>
                    <span className="supplierNavbar"> Reports </span>
                </Nav.Link>
            </Nav.Item>
        </Nav>

        

    );
}

export default supplierNav;