import './ItemHomeScreen.css';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
//import React, { Component } from 'react';
import axios from 'axios';
//import filterData from 'react'
//import handleSearchArea from 'react'
import Item from "../components/modules/CustomerPageModules/Stock/Item";

//actions
import {getItems as listItems} from '../redux/actions/itemActions'; //using as litItems it wont clash with the const getItems in the useSelector


const ItemHomeScreen = () => {


    const dispatch = useDispatch();

    const getItems = useSelector((state) => state.getItems);

    const {items,loading,error} = getItems;

  
    

    useEffect(()=>{
        dispatch(listItems());
    }, [dispatch]);


//Item home screen appears in the item
    return <div className="itemHomeScreen">
        <h1 class="jt --debug" style={{marginLeft:'800px'}}>
  <span class="jt__row">
    <span class="jt__text">Latest Items!</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Latest Items!</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Latest Items!</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Latest Items!</span>
  </span>
</h1>
            <br/>
            &nbsp;&nbsp;
            <button className="btn btn-outline-secondary"><i className="fas fa-shopping-cart"><a href="/cart" style={{textDecoration:'none',color:'black',fontWeight:'bolder',borderRadius:'8px'}}>
                <span>
                Cart<span className="cartLogo__badge">0</span></span></a></i></button>
        <br/><br/>
        <div className="itemHomeScreen__items">
            { loading ? (
                <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                 items.map((item) => <Item 
                    key ={item._id} 
                    itemId={item._id}
                    itemCode={item.itemCode}
                    unitPrice={item.unitPrice}
                    description={item.description}
                    color={item.color}
                    imageUrl={item.imageUrl}
                />)
            )}
        </div>
        </div>;
};

export default ItemHomeScreen;
