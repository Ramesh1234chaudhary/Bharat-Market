import React, { useState } from 'react';
import { Data } from './Data';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className='discountimg'>
        <img
          src='https://contents.mediadecathlon.com/s1025642/k$acc1484e4cee55a7eba9b4a46af1a5ce/Price%20drop%20sept%20app%20%201.jpg'
          className='image'
          alt='Discount'
        />
      </div>
      <div className='discountproduct'>
        {/* Map through your product data and create product containers */}
        {Data.map((product, index) => (
          <div className='product-container' key={index}>
            <img src={product.image[0]} alt={product.name} />
           
            <h3>{product.name}</h3>
            <div className='offer'>
            <p>Offer Price: <span>{product.offerPrice}</span></p>
            <p>Actual Price: <span>{product.actualPrice}</span></p>
            <p style={{color:"red"}}>Rating:  <span>{product.rating}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
