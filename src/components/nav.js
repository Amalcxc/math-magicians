import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  const li = {
    color: 'black',
    margin: '21px'
  }
  return <nav className='nav'>
    <ul className='ul'>
     <h3 className='logo'>Math Magicians</h3>
      <Link to='/'>
      <li style={li}>Home</li>
      </Link>
      <Link to='/calculator'>
      <li style={li}>Calculator</li>
      </Link>
      <Link to='/quote'> 
      <li style={li}>Quote</li>
      </Link>
    </ul>
  </nav>;
}

export default Nav;