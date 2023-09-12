import React from 'react'
 import { useParams } from 'react-router-dom'
 import { useEffect,useState } from 'react';
 import "./Productdetails.css";
const Productdetails = () => {
     const {id}=useParams();

     const[state,setState]=useState({
        id:0,
        title:"",
        description:"",
        image:"",
        price
        :0,
        category:"",
     });
     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)  
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
           setState(data);
           
         })
 
     },[])
  return (
     <div className='flex'>
    <div className='productdetails'>
     <h2>{state.category}</h2>
     <img src={state.image} width={300} height={300}/>
     </div>
     <div className='timepass'>
     <h5>{state.description}</h5>
     <h3>{state.title}</h3>
     <h2>${state.price}</h2>
     <button>Buy Now</button>
     </div>
     
    </div>
  )
}

export default Productdetails
