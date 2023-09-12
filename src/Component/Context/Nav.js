import React from 'react'
 import "./Nav.css";
 import { useContext } from 'react';
import { allContext } from './Context';
import {Link} from 'react-router-dom'

const Nav = ({state}) => {
    const {setIslogedin,user,cartCount}  = useContext(allContext);

  return (
    <div className='nav'>
         <div id='title'>
            <h2>Bharat Market</h2>
         </div>
         <div id='menu'>
            <Link to="/"><i>Home</i></Link>
            <Link to="/Product"><i>Product</i></Link>
            <Link to="/Technologies"><i>Technologies</i></Link>
             
             <button style={{width:"70px", height:"30px"}}  onClick={()=>{setIslogedin(false)}} ><h5 >Logout</h5></button>
           
            
             
         </div>
         <div className='add'>
  <Link to={'/cart'} style={{ position: "relative", display: "inline-block" }}>
    <img src="https://w7.pngwing.com/pngs/317/428/png-transparent-shopping-cart-computer-icons-add-to-cart-button-angle-text-service-thumbnail.png" style={{ width: "30px", marginTop: "10px", backgroundColor: "transparent", border: "none" }} />
    {cartCount > 0 ? <span style={{ position: "absolute", top: "0", left: "0", background: "red", color: "white", borderRadius: "50%", padding: "4px 8px", fontSize: "12px" }}>{cartCount}</span> : null}
  </Link>
</div>


    </div>
  )
}

export default Nav