
import './App.css';
import Navbar from "./components/header/Navbar.js"
import Newnavbar from "./components/header/newnavbar/Newnav.js"
import Maincomponent from './components/home/Maincomponent.js';
import Footer from "./components/footer/Footer.js"
import Signin from "./components/signup_signin/Signin.js";
import Signup from "./components/signup_signin/Signup.js"
import {Routes,Route} from "react-router-dom";
import Cart from './components/cart/Cart.js';
import Buynow from './components/buynow/Buynow.js';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true);
    },2000)
  },[])
  return (
    
    <div className="App">
      {
        data ? (<>
        <Navbar />
      <Newnavbar/>
      <Routes>
        <Route path="/" element={<Maincomponent/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path ="/getproductsone/:id" element={<Cart/>}/>
        <Route path ="/buynow/" element={<Buynow/>}/>
      </Routes>
      
      <Footer/>
        </>):(<div className='circle'>
            <CircularProgress/>
            <h2>Loading...</h2>
          </div>
        )
      }
      
    </div>
    
  );
}

export default App;
