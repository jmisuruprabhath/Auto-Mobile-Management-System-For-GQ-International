import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GQ from '../../../images/footer-logo.png'
//import { Button } from './Button';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'



function NavBar() {
    const [click, setClick] = useState(false);

    const handleclick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);



    const  [button, setButton] = useState (true);



    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton (false);


        }else{
            setButton (true);
        }
    };

    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className='navbar'>


                <div className="navbar-container">

                        <Link to= '/' className='navbar-log'>
                            <img src={GQ} height='90px' width='80px;' alt="GQ logo" className="gq-logo"/>
                            
                         </Link>

                         <h3 className='gq-title'>GQ IN<span style={{color:'red'}}>TERNATIONAL</span></h3>

                        <div className= 'menu-icon' onClick = {handleclick}>

                            <i className={click ? 'fas fa-times': 'fas fa-bars'}/>

                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className = 'nav-item' style={{backgroundColor:'#2f2d2d'}}>
                                <Link to='/SlideShow' className = 'nav-links' onclick = {closeMobileMenu}>
                                    HOME
                                </Link>
                            </li>

                            <li className = 'nav-item'>
                                <Link to='/item' className = 'nav-links' onclick = {closeMobileMenu}>
                                    ITEMS
                                </Link>
                            </li>

                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links' onclick = {closeMobileMenu}>
                                    CONTACT US
                                </Link>
                                
                            </li>


                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links' onclick = {closeMobileMenu}>
                                    ABOUT US
                                </Link>
                                
                            </li>

                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links-mobile' onclick = {closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>


                       <Button variant="outline-danger" style={{marginBottom : '10px', borderRadius: "15px" }}  > LOGIN </Button>

                       


                   
                </div>
            </nav>

 
            
        </>
    )
}

export default NavBar
