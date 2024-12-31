import React,{useContext, useEffect, useState} from 'react'
import "./Navbar.css"
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import {NavLink, useNavigate} from "react-router-dom";
import { loginContext } from '../context/ContextProvider.js'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from './Rightheader.js';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {

    const {account,setAccount}=useContext(loginContext)
    //console.log(account);

    const history =useNavigate();
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [text,setText]=useState("");
    console.log(text);
    const [liOpen,setLiopen]=useState(true);
    const  {products}  = useSelector((state) => state.getProductsdata|| {});
  
    const [drOpen,setDrOpen]=useState(false)

    const getDetailValidUser =async()=>{
        const res = await fetch("/validuser",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            credentials:"include"
        })


        const data=await res.json()
        console.log(data);
        if(res.status!==201){
            console.log("error")
        }else{
            console.log("data valid")
            setAccount(data)
        }

    };

    const handleOpen =()=>{
        setDrOpen(true)
    }

    const handledrClose=()=>{
        setDrOpen(false)
    }

    const logoutUser =async()=>{
        const res2 = await fetch("/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            credentials:"include"
        })


        const data2=await res2.json()
        console.log(data2);
        if(res2.status!==201){
            console.log("error")
        }else{
            console.log("data valid")
            alert("user logged out");
            setAccount(false);
            history("/");
            
        }

    };


    const getText=(items)=>{
        setText(items);
        setLiopen(false)
    }

    useEffect(()=>{
        getDetailValidUser();
    },[])

  return (
    <header>
        <nav>
            <div className='left'>

                <IconButton className='hamburgur' onClick={handleOpen}>
            <MenuIcon style={{color:'white'}}/>
          </IconButton>
            <Drawer open={drOpen} >
                <Rightheader Logclose={handledrClose}/>
            </Drawer>

                <div className='navlogo'>
                   <NavLink to=""> 
                    <img src='https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png' alt='amazon.in' />
                    </NavLink>
                </div>
                <div className='nav_searchbaar'>
                    <input type='text' name='' 
                    onChange={(e)=>getText(e.target.value)}
                    placeholder='Search for products'
                    id=''/>
                    <div className="search_icon">
                    <SearchIcon id ='search'/>
                </div>
                {/* search filter*/ }
                {
                    text &&
                    <List className='extrasearch' hidden={liOpen}>
                        {
                            products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                    <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setLiopen(true)}> 
                                    {product.title.longTitle}
                                    </NavLink>
                                    
                                </ListItem>
                            ))
                        }
                    </List>
                }

                </div>
            
                
                </div>
                
            <div className='right'>
                <div className="nav_btn">

                    
                  <NavLink to='/login'>signin</NavLink>  
                </div>
                <div className="cart_btn">

                    {
                        account ?<NavLink to="/buynow/">
                        <Badge badgeContent={account.carts?.length} color="primary">
                            <ShoppingCartIcon color="white" id='icon'/>
                        </Badge>
                        </NavLink>:<NavLink to="/login">
                        <Badge badgeContent={0} color="primary">
                            <ShoppingCartIcon color="white" id='icon'/>
                        </Badge>
                        </NavLink>
                    }
                   
                <p>Cart</p>
                </div>
                {
                    account ?<Avatar className='avatar2'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                        {account.fname?.[0].toUpperCase()}
                    </Avatar>:<Avatar className='avatar' 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} 
                    >
                      
                    </Avatar>
                }
              
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {
            account ?<MenuItem onClick={()=>{handleClose();logoutUser();}} ><LogoutIcon style={{fontSize:"16",marginRight: "3"}}/>Logout</MenuItem>:""
        }
        
      </Menu>
            </div>
        </nav>
    </header>
  )
}
export default Navbar
