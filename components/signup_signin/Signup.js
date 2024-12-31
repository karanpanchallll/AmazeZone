import React, { useState } from 'react'
import './signup.css';
import {NavLink} from"react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

    const [udata,setUdata]=useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:"",
    })
    

    const addUdata =(event)=>{
        const {name,value}=event.target;

        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }
    const sendData =async(e)=>{
        e.preventDefault();
        const {fname , email, mobile , password , cpassword}=udata
        
        if(fname===""){
            toast.warning("Name cannot be Empty", {
                position: "top-center",
                autoClose: 3000}
            )}
    

    if(email===""){
        toast.warning("email cannot be Empty", {
            position: "top-center",
            autoClose: 3000}
    )}


if(mobile===""){
    toast.warning("Mobile cannot be Empty", {
        position: "top-center",
        autoClose: 3000}
    )}


if(password===""){
    toast.warning("password cannot be Empty", {
        position: "top-center",
        autoClose: 3000}
    )}


if(cpassword===""){
    toast.warning("Confirm Password cannot be Empty",{
        position: "top-center",
        autoClose: 3000}
    )}


        const res =await fetch("/register",{
            method:"POST",
            headers:{
               "Content-Type":"application/json" 
            },
            body:JSON.stringify({fname , email, mobile , password , cpassword})
        });
        const data = await res.json();
        //console.log(data);
        
        if(res.status===422 || !data){

            //alert("FILL PROPERLY")
            toast.warning("FILL PROPERLY", {
                position: "top-center",
                autoClose: 5000
        })
        }
        else{
            //alert("SUCCESSFULLY ADDED")
            setUdata({
                fname: "",
                email: "",
                mobile: "",
                password: "",
                cpassword: ""
            });

            toast.success("DATA SUCCESSFULY ADDED", {
                position: "top-center",
                autoClose: 5000,
                })

                
        }

        
    };

  return (
    <>
    <section>
       <div class="sign_container">
            <div class="sign_header">
                <img src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png" alt="amazon_logo"/>
            </div>
            <div class="sign_form">
                <form method='POST'>
                    <h1>Sign-Up</h1>
                    <div class="form_data">
                        <label for="fname">Your Name</label>
                        <input type="text" 
                        onChange={addUdata}
                        name="fname" id="fname"/>
                    </div>
                    <div class="form_data">
                        <label for="email">Email</label>
                        <input type="email" 
                        onChange={addUdata}                        
                        name="email" id="email"/>
                    </div>
                    <div class="form_data">
                        <label for="number">Mobile Number</label>
                        <input type='text' 
                        onChange={addUdata}
                        name="mobile" id="mobile"/>
                    </div>
                    <div class="form_data">
                        <label for="password">Password</label>
                        <input type="password" 
                        onChange={addUdata}
                        name="password" placeholder="Atleast 6 character" id="password"/>
                    </div>
                    <div class="form_data">
                        <label for="password">Password Again</label>
                        <input type="password"
                        onChange={addUdata}
                        name="cpassword"  id="cpassword"/>
                    </div>
                    <button className='signin_btn'onClick={sendData}>Continue</button>

                    <div class="signin_info">
                        <p>Already have an account?</p>
                        <NavLink to="/login">Signin</NavLink>
                    </div>

                </form>
            </div>
            <ToastContainer/>
        </div> 
    </section>
    </>
  )
}

export default Signup
