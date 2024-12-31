import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css"
import {Divider} from '@mui/material'
import { useNavigate,  useParams } from 'react-router-dom'
import { loginContext } from '../context/ContextProvider.js'

const Cart = () => {

  const {id}=useParams("");

  const history =useNavigate("")

  const {account,setAccount}= useContext(loginContext)
  console.log({ account, setAccount });

  const[indData,setindData]=useState([]);
  console.log(indData);

  const getindData=async()=>{
    const res = await fetch(`/getproductsone/${id}`,{
      method:"GET",
      headers:{
      "Content-Type":"application/json"
      }
      });

      const data = await res.json();
      //console.log(data)


      if(res.status !==201){
        console.log("no data available")
    
    
      }else{
        console.log("Got data");
        setindData(data)
      }
  }

 


  useEffect(()=>{
    getindData()
   
  },[id]);

  //add to cart
const addToCart =async(id)=>{
  const checkRes =await fetch(`/addcart/${id}`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({indData}),
    credentials:"include",
  })

  const data1 =await checkRes.json();
  console.log(data1);
    
  if(checkRes.status===401|| !data1){
    console.log("user invlaid")
    alert("user invalid")
  }else{
    //alert("item added to the cart")
    setAccount(data1)
    history("/buynow/")
    
  }

}


  return (
    <div className='cart_section'>
      <div class="cart_container">
        <div class="left_cart">
        <img src={indData.detailUrl} alt="cart_img"/>
        <div class="cart_btn">
            <button className='cart_btn1' onClick={()=>addToCart(indData.id)}>
                Add to Cart
            </button>
            <button className='cart_btn2'>
                Buy Now
            </button>

        </div>
        </div>
        <div class="right_cart">
            <h3>{indData.title?.shortTitle }</h3>
            <h4>{indData.title?.longTitle }</h4>
            <Divider/>
            <p className='mrp'>M.R.P : ₹{indData.price?.mrp }</p>
            <p>Deal of the day: <span style={{color:"#B12704"}}> ₹{indData.price?.cost }</span>
            </p>
            <p>You save: <span style={{color:"#B12704"}}>  ₹{indData.price?.mrp - indData.price?.cost  }  ({indData.price?.discount})</span></p>
            
            <div class="discount_box">
                <h5>Discount: <span style={{color:"#111"}}> {indData.discount}</span></h5>
                <h4>Free Delivery :<span style={{color:"#111",fontWeight: 600}}> Oct-8 - 21</span> Details </h4>
                <p>Fastest delivery: <span style={{color:"#111",fontWeight:600}}> Tomorrow by 11AM</span></p>

           </div>
           <p className='description'>About the Item: <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:"0.4"}}> {indData.description}</span></p>
        
        </div>
      </div>
      
      
    </div>
  )
}

export default Cart
