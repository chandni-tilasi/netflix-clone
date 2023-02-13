import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "./imglogo.jpg"
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx";
import MovieContext from "../../Context/MovieContext"


function Header() {

  const movieInfo = useContext(MovieContext);
  function handleChange(e) {
    movieInfo.updateSearchText(e.target.value)
  }
  const [showHamburger, setHamburger] = useState(false);

  function clickHandler() {
    setHamburger(!showHamburger);
  }
  // https://api.themoviedb.org/3/movie/now_playing?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1
  return (
    <div className='headerComponent'>
      <Link to="/" ><img className='logo' src={logo} alt="logo" /></Link>

      <div className='anchorTag' id={(!showHamburger) ? "active" : null}>
        <Link to="/upcoming" >Upcoming</Link>
        <Link to="/popular" >Popular</Link>
        <Link to="/top_rated" >Top Rated</Link>
        <Link to="/now_playing" >now playing</Link>
      </div>
      <p className='iconSearch'>
        <input type="text" placeholder='search here' value={movieInfo.searchText} className='headerSearch' onChange={handleChange} />

        <FaSearch /> </p>
      <p className='burger' onClick={clickHandler} > {(!showHamburger) ? <GiHamburgerMenu /> : <RxCross1 />}    </p>
      {/* <p className='cross'> <RxCross1 /> </p> */}

    </div>
  )
}

export default Header