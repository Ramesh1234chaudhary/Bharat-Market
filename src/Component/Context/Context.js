import { createContext, useState,useEffect } from "react";

 export const allContext =createContext();

function CustomProvider({children}){
    const [islogedin,setIslogedin]=useState(false);
    const[product,setProduct]=useState([]);
    const[cart,setCart]=useState([])
    const [cartCount,setCartCount]=useState(0);
    const [user,setUser]=useState({
        name:"",
        password:""
    });
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>{
          setProduct(data);
        })

    },[])
    
    return <allContext.Provider value={{cart,setCart,cartCount,setCartCount ,islogedin, setIslogedin,user,setUser,product,setProduct}}>
        {children}
    </allContext.Provider>
}
export  default  CustomProvider;