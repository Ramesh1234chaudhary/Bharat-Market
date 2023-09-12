import React from 'react';
  import  Nav from './Component/Context/Nav';
  import  "./App.css";
  import Login from './Component/Context/Login';
  import Home from './Component/Home';
  import { useContext } from 'react';
  import { allContext } from './Component/Context/Context';
  import {Routes,Route} from 'react-router-dom'
  import Product from './Component/Context/Product';
  import Contect from './Component/Context/Contect';
  import Technologies from './Component/Context/Technologies';
  import Productdetails from './Component/Context/Productdetails';
  import Cart from './Component/Context/Cart';
  import Html from './Component/Context/Html';
  import Css from './Component/Context/Css'
  import Java from './Component/Context/Java';
  import Javascript from './Component/Context/Javascript';
  
const App = () => {
  const {islogedin}=useContext(allContext)
  return (
    <div  className='App'>
             {
        islogedin ? <div> <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Technologies" element={<Technologies/>}>
        <Route path='' element={<Html/>}/>
        <Route path='css' element={<Css/>}/>
        <Route path='Java' element={<Java/>}/>
        <Route path='Javascript' element={<Javascript/>}/>
        

        </Route> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/Product" element={<Product/>}/>
        
        <Route path="/Contect" element={<Contect/>}/>
        <Route path="/Productdetails/:id" element={<Productdetails/>}/>
        
  
      </Routes> </div> :<Login/>
       }

      
      </div>
 
  )
}

export default App






