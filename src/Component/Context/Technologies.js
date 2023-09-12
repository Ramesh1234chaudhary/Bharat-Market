import React from 'react'
 import "./Technologies.css"
 import { Link } from 'react-router-dom'
 import { Outlet } from 'react-router-dom'
const Technologies = () => {
  return (
    <div className='Container'>
      <div className='left-panel'>
            <Link to="html">HTML</Link>
            <Link to="css">CSS</Link>
            <Link to="java">Java</Link>
            <Link to="javascript">JAVASCRIPT</Link>
      </div>
      <div className='right-panel'>
              <Outlet/>
      </div>
    </div>
  )
}

export default Technologies
