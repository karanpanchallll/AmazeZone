import React,{useContext} from 'react'
import { loginContext } from '../context/ContextProvider'
import { ToastContainer, toast } from 'react-toastify';


const Option = ({deletedata,get}) => {
  
  const {account,setAccount}=useContext(loginContext)
  const removeData =async (req,res)=>{
    try {
      const res =await fetch(`/remove/${deletedata}`,{
        method:"DELETE",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
        },
        credentials:"include"
      });

      const data= await res.json()
      console.log(data);
      if(res.status===400||!data){
        console.log("error");
      }else{
        console.log("item deleted from the cart")
        setAccount(data);
        toast.success("Item deleted from the cart", {
          position: "top-center",
          autoClose: 5000,
          })
        get()
      }
    } catch (error) {
      console.log("error");
    }
  }
  
  return (
    <div className='add_remove_select'>
    
     <select >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{cursor:"pointer"}} onClick={(deletedata)=>removeData()}>Delete</p> <span>|</span>
      
      <p className='forremovemedia'>Save or Later</p> <span>|</span>
      <p className='forremovemedia'>See more like this</p>
     
     
      </div>
    
  )
}

export default Option
