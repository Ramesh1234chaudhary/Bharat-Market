import React, { useEffect } from 'react'
 import { useState } from 'react';
 import './Product.css'
 import {Link} from 'react-router-dom'
 import { useContext } from 'react';
import { allContext } from './Context';

const Product = () => {
  const{product,setProduct,cart,setCart,cartCount,setCartCount}=useContext(allContext)
    const [search,setSearch]=useState();
   

      const handler = (event) =>{
        event.preventDefault();
        const newfilter=product.filter((value)=>{
          return value.title.toLowerCase().includes(search.toLowerCase());
         }) ;
          setProduct(newfilter);
            
   
      
      }
      const addProduct=(ele)=>{
        cart.push(ele)
        // console.log(cart);
        setCartCount(cartCount+1)
      }
    

    //  const handler=((e)=>{
    //     e.preventDefault();
     
  return (
    <div  className='product1'>
   
      
        <input type='text'  className="search-input" placeholder='Search...' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button  className="search-button" onClick={handler}>Search</button>
       

      

      {
        product.length > 0 ? <div className='container'>{
             product.map((product)=>{
              return <div className='cardstyle'>
              <img src={product.image} width="100px" height="100px"/>
              <h4>{product.title}  </h4>
              <p>${product.price}</p>
            <Link to={`/Productdetails/${product.id}`}><button><h5 style={{marginBottom:"0px"}}>Product Details</h5></button></Link>
         
            <button  onClick={()=>{
            addProduct(product)
          }}><h5>ADD TO CART</h5></button>
              </div>
             })
      }

      </div> : <h2 style={{color:"red",textAlign:"center",marginTop:"100px"}}>no product to display</h2>

      }
    </div>
  )
}

export default Product
