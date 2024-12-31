import React, { useEffect, useState } from 'react'
import "./Buynow.css"
import {Divider} from "@mui/material"
import Option from './Option.js'
import Subtotal from './Subtotal.js'
import Right from './Right.js'
const Buynow = () => {
  const [cartData,setCartData]=useState("")
  //console.log(cartData.carts);
  
  const getDataBuy = async()=>{
    const res =await fetch("/cartdetails",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    })

    const data = await res.json();

    if(res.status!==201){
      console.log("error");
    }else{
      setCartData(data.carts);
    }
  };

  useEffect(()=>{
    getDataBuy();
  },[])


  return (
    <>
    {
      cartData.length ? <div className='buynow_section'>
      <div class="buynow_container">
        <div class="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className='leftbuyprice'> Price</span>
            <Divider/>
            {
              cartData.map((e,k)=>{
                return(<>
                  <div class="item_container">
                  <img src={e.detailUrl} alt="item_img"/>
                  <div class="item_details">
                      <h3>{e.title.longTitle}</h3>
                      <h3>{e.title.shortTitle}</h3>
                      <h3 className='differentprice'></h3>
                      <p className='unusual'>Usually dispatched in 1-2 days</p>
                      <p>Eligible for FREE shipping</p>
                      <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="amazon_fulfilled"/>
                      <Option deletedata={e.id} get={getDataBuy}/>
                  </div>
                  <h3 className='item_price'>₹{e.price.cost}.00</h3>
              </div>
              <Divider/>
              </>
                )
              })
            }
           
            
            <Subtotal item={cartData}/>

        </div>
        <Right item={cartData} />
      </div>
    </div>:" "
    }
    
    </>
  )
    
    
  
}

export default Buynow
