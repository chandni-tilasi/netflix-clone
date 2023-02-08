import React, { useContext, useState } from "react";
// import MovieContext from "../../Context/MovieContext";
// import { FcPrevious, FcNext } from "react-icons/fc";
import "./Slider.css";

const Banner = () => {
  // const movieData = useContext(MovieContext);

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   const prevIndex = currentIndex - 1;
  //   setCurrentIndex(
  //     prevIndex < 0 ? movieData.trending.results.length - 1 : prevIndex
  //   );
  // };
  // const handleNext = () => {
  //   const nextIndex = currentIndex + 1;
  //   setCurrentIndex(
  //     nextIndex === movieData.trending.results.length ? 0 : nextIndex
  //   );
  // };

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://wallpaperaccess.com/full/4856607.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Lights Of Rain</h5>
            <p>
              Embrace The Rain Of Love In The City Lights And NightSky With
              Droplets Of Rain...
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://free4kwallpapers.com/uploads/originals/2018/01/23/scenery-art-wallpaper.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>A Morning Of Hope</h5>
            <p>Wake Up In The Mist Of Faith With A Kiss Of Hope..</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://wallpapercave.com/wp/wp1900650.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>In The Game Of Life</h5>
            <p>
              A Place As Ordinary As A Home, Yet All Of Our Life, We Crave To
              Find It..
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
