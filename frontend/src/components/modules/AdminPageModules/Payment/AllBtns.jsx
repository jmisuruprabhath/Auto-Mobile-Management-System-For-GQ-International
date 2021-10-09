import React, {Component} from 'react';

export default class Allbtns extends Component{

    render (){
        return (
    
                <div style={{margin:"40px"}}>

                    <div className='row'>
                    <div><button className="btn-grad4" size="lg"> <a href='/CashPayment' style={{textDecoration:'none',color:'white', paddingTop:'20px', paddingBottom:'20px' }}><b>+</b>&nbsp; Add Cash Payment</a></button> &nbsp;&nbsp;
                    <button className="btn-grad4" size="lg"> <a href='/OnlinePaymentsView' style={{textDecoration:'none',color:'white', paddingTop:'20px', paddingBottom:'20px' }}>Online Payments</a></button> &nbsp;&nbsp;
                    <button className="btn-grad4" size="lg"> <a href='/CashPaymentsView' style={{textDecoration:'none',color:'white', paddingTop:'20px', paddingBottom:'20px' }}>Cash Payments</a></button>&nbsp;&nbsp;&nbsp;
                    <button className="btn-grad4" size="lg"> <a href='/ViewHistoryOnlinePay' style={{textDecoration:'none',color:'white', paddingTop:'20px', paddingBottom:'20px' }}>Reports</a></button>&nbsp;&nbsp;
                    </div>
                    </div>
    
                </div>
    
                
    
            );
        }
        
    }
    