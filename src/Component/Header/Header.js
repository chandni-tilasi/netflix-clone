import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./imglogo.jpg"
import "./Header.css";
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <div className='headerComponent'>
      <img className='logo' src={logo} alt="logo" />

      <div className='anchorTag'>
        <Link to="/upcoming" >upcoming</Link>
        <Link to="/popular" >popular</Link>
        <Link to="/highrated" >High Rated</Link>
        <Link to="/trending" >Trending</Link>
      </div>
     <p className='iconSearch'>  <FaSearch  /> </p>
    </div>
  )
}

export default Header