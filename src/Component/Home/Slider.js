import React, {  useContext, useState } from "react";
import MovieContext from "../../Context/MovieContext";
import {FcPrevious,FcNext} from "react-icons/fc"
import "./Slider.css";

const Banner = () => {
const movieData = useContext(MovieContext)

const [currentIndex, setCurrentIndex] = useState(0);
 
 const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex < 0 ? movieData.trending.results.length : prevIndex);
  };
  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex === movieData.trending.results.length ? 0 : nextIndex);
  };

  return (
    <div className="slider-banner">
      <img src={`https://image.tmdb.org/t/p/original/${movieData.trending.results[currentIndex].poster_path} `}  />
      <p style={{zIndex:"99"}}>
        {movieData.trending.results[currentIndex].overview}
      </p>
      <button className="prev-btn" onClick={handlePrev}>
        <FcPrevious/>
      </button>
      <button className="next-btn" onClick={handleNext}>
       <FcNext />
      </button>
    </div>
  );
};

export default Banner;
