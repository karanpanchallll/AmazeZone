import React, { useState ,useContext} from 'react'
import "./signup.css"
import {NavLink} from"react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { loginContext } from '../context/ContextProvider';

const Signin = () => {
    const [logdata,setData]= useState({
        email:"",
        password:""
    });

    const {account,setAccount}=useContext(loginContext)

    const addData=(event)=>{
        const {name,value}=event.target;
        setData(()=>{
            return {
                ...logdata,
                [name]:value
            }
        })
    }

    const sendData=async(e)=>{
        e.preventDefault();

        const {email,password}=logdata;

        const res =await fetch("/login",{
            method:"POST",
            headers:{
               "Content-Type":"application/json" 
            },
            body:JSON.stringify({ email , password })
        }); 
        
            const data=await res.json();
            console.log(data);

            if(email===""){
                    toast.warning("email cannot be Empty", {
                        position: "top-center",
                        autoClose: 3000}
                )}
            if(password===""){
                toast.warning("password cannot be Empty", {
                    position: "top-center",
                    autoClose: 3000}
                )}

            if(res.status===400 ||!data){
                
                toast.warning("Invalid Details", {
                                position: "top-center",
                                autoClose: 5000})
            }else{
                setAccount(data);
                setData({...logdata,email:"",password:""});
                toast.success("LoggedIn successfully", {
                                position: "top-center",
                                autoClose: 5000,
                                })
            }
   
    }

    


  return (
   <>
    <section>
       <div class="sign_container">
            <div class="sign_header">
                <img src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png" alt="amazon_logo"/>
            </div>
            <div class="sign_form">
                <form method='POSt'>
                    <h1>Sign-In</h1>
                    <div class="form_data">
                        <label for="email">Email</label>
                        <input type="email" 
                        onChange={addData}
                        value={logdata.email}
                        name="email" id="email"/>
                    </div>
                    <div class="form_data">
                        <label for="password">Password</label>
                        <input type="password"
                        onChange={addData}
                        value={logdata.password}
                        name="password" placeholder="Atleast 6 character" id="password"/>
                    </div>
                    <button className='signin_btn' onClick={sendData}>Continue</button>

                </form>
            </div>
            <div class="create_accountinfo">
                <p>New to amazon?</p>
                <NavLink to="/register">
                <button>Create Your Amazon Account</button>
                </NavLink>
            </div>
        </div> 
        <ToastContainer/>
    </section>
   </>
  )
}

export default Signin
