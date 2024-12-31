import React,{useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import { loginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css"
const Rightheader = ({Logclose}) => {
  
  const {account,setAccount}=useContext(loginContext)
  
    return (
    <div>
      <div className="rightheader">
        <div className="right_nav">
        {
                    account ?<Avatar className='avatar2'>
                        {account.fname?.[0].toUpperCase()}
                    </Avatar>:<Avatar className='avatar'>
                        
                    </Avatar>
                }
            {
                account ? <h3> Hello,{account.fname?.toUpperCase()}
                </h3>: ""
            }
            
                
        </div>
        <div className="nav_btn" onClick={()=>Logclose()}>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/">Shop by Category</NavLink>
            <Divider style={{width:"100%", marginLeft:"-20px"}}/>
            <NavLink to ="/">Today's Deal</NavLink>
            {
                account ? <NavLink to ="/buynow/">Your Orders</NavLink>:<NavLink to ="/">Your Orders</NavLink>
            }
           
           <Divider style={{width:"100%", marginLeft:"-20px"}}/>
            <div className="flag">
            <NavLink to ="/">Settings</NavLink>
            <img src="" alt=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rightheader
