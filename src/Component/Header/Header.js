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
        <Link to="/tvshows" >TvShows</Link>
        <Link to="/movies" >Movies</Link>
        <Link to="/recent" >Recently Added</Link>
        <Link to="/home" >My List</Link>
      </div>
     <p className='iconSearch'>  <FaSearch  /> </p>
    </div>
  )
}

export default Header