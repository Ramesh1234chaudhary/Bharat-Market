import React, { useContext } from 'react';
import { allContext } from './Context';
import './Login.css'; // Import the CSS file

const Login = () => {
  const { setIslogedin, setUser, user } = useContext(allContext);

  const handle = () => {
    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(user.name) ||(user.password.length < 4)) {
        alert('Enter Proper Credential');
      
    } else {
        setIslogedin(true);
    }
  };

  return (
    <div className='login1'>
    <div className="login-container">
      <h3 className="animated-text"><i>Welcome To Bharat-Market</i></h3>
      <div className="field">
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div className="field">
        <input
          type="password"
          placeholder="Password "
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button className="login-button" onClick={handle}>
          Login
        </button>
         
      </div>
    
        <p style={{marginTop:"10px"}}>Not a Member ?<span style={{color:"blue"}}> Sign-up</span></p>
    </div>
    </div>
  );
};

export default Login;
