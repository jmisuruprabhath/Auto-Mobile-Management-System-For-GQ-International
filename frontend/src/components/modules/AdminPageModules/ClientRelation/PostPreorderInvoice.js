import React, { Component } from 'react';
import axios from 'axios';
import "./addDebtor.css";
//import {BrowserRouter as Router,Switch,Route } from "react-router-dom";

export default class PostDebtor extends Component {
    constructor(props){
        super(props);
        this.state={
            
            test:{}
        };
    }

    componentDidMount(){
        const id = this.props.match?.params.id;

        axios.get(`/postor/${id}`).then((res)=>{

            if(res.data.succes){
                this.setState({
                    test:res.data.test
                });

                console.log(this.state.test);
            }
        });
    }
    render() {

        const {DebtorID,TotalPrice} = this.state.test;

        return (
            <div
              style={{
              backgroundColor:'#C70039',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              color: 'white',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingBottom:'20px'
              
                }}>
                <a href='/CR' style={{textDecoration:'none', color:'white', alignSelf:'right'}}><button class="input-btn">Back</button></a>
                <div
                    className="container"
                    style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    maxWidth: '1200px',
                    marginTop: '10px',
                    paddingBottom: '50px',
                    paddingLeft: '180px',
                    paddingTop: '50px',
                    fontSize: '20px',
                    marginBottom:'20px'
                }}>
        
                <div style={{marginTop:'20px'}}>
                
                    <dl className="row" >
                        <dt className="col-sm-4">Debtor ID:</dt>
                        <dd className="col-sm-8">{DebtorID}</dd>

                        <dt className="col-sm-4">Item:</dt> 
                        {/* <dd className="col-sm-8">{name}</dd> */}

                        <dt className="col-sm-4">Total Price:</dt>
                        <dd className="col-sm-8">{TotalPrice}</dd>
                     </dl>
                 </div>
             </div>
         </div>
         )
     }
}
