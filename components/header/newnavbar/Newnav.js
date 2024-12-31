import React from 'react'
import "./Newnav.css";

const Newnav = () => {
  return (
    <div className='new_nav'>
      <div class="nav_data">
        <div class="left_data">
        <p>ALL</p>
        <p>Mobile</p>
        <p>Bestseller</p>
        <p>Fashion</p>
        <p>Customer Services</p>
        <p>Electronics</p>
        <p>Prime</p>
        <p>Todays Deal</p>
        <p>Amazon Pay</p>
        </div>
        <div class="right_data">
            <img src="nav.jpg" alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Newnav
