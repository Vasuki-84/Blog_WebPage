import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div  style={{padding: "15px" ,display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "lightblue"}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/travel">Travel</Link></li>
      </ul>

    </div>
  )
}

export default Navbar