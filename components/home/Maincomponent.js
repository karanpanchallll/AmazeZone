import React, { useEffect } from 'react'
import Banner from "./Banner.js"
import "./home.css";
import Slide from "./Slide.js"
import {getProducts} from "../redux/actions/action.js"
import {useDispatch,useSelector} from "react-redux"


const Maincomponent = () => {

  const  {products}  = useSelector((state) => state.getProductsdata|| {});
  console.log(products);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch( getProducts() )
  },[dispatch]);
  
  

console.log(products);
  
 
  
  return (
    <div className='home_section'>
      <div class="banner_part">
        <Banner />
        
      </div>
    
    <div class="slide_part">
      <div class="left_slide">
        <Slide title ="Deal of the day" products={products}/>
      </div>
      <div class="right_slide">
        <h4>Festive latest launches</h4>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="alternate-image"/>
        <a href="#">See more</a>
      </div>
    </div>
    <Slide title="Todays Deal" products={products}/>
    <div class="center_img">
      <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
    </div>
    <Slide title="Best Seller" products={products}/>
    <Slide title="Upto 80% off" products={products}/>
    

    </div>
  )
}

export default Maincomponent
