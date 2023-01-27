import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../../Context/MovieContext';
// import {firstName} from "../Home/Home"
function TvShows() {
  const movieInfo = useContext(MovieContext);
  // const name = useState(firstName);
  useEffect(() => {
    console.log(movieInfo);
  }, []);
  return (
    <h1>name</h1>
  )
}

export default TvShows;