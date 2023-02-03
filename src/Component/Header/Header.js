import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "./imglogo.jpg"
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross1} from "react-icons/rx"


function Header() {

  const [showHamburger,setHamburger] = useState(false);

  function clickHandler(){
    setHamburger(!showHamburger);
  }

  return (
    <div className='headerComponent'>
      <Link to="/" ><img className='logo' src={logo} alt="logo" /></Link>

      <div className='anchorTag' id={(!showHamburger)?"active":null}>
        <Link to="/upcoming" >Upcoming</Link>
        <Link to="/popular" >Popular</Link>
        <Link to="/top_rated" >High Rated</Link>
        <Link to="/trending" >Trending</Link>
      </div>
     <p className='iconSearch'>  <FaSearch  /> </p>
     <p className='burger' onClick={clickHandler} > {(!showHamburger)? <GiHamburgerMenu />:<RxCross1 />}    </p>
     {/* <p className='cross'> <RxCross1 /> </p> */}
     
    </div>
  )
}

export default Header