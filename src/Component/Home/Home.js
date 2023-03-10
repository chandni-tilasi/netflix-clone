import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
// import TvShows from '../Router/TvShows';
import MovieContext from "../../Context/MovieContext";
import Slider from "./Slider";
function Home() {
  const urlUpcomig =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1";
  const urlPopular =
    "https://api.themoviedb.org/3/movie/popular?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1";
  const nowPlaying =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1";
  const UrlhighRated =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1";
  const urlTrending =
    "https://api.themoviedb.org/3/trending/all/day?api_key=82f112e2551f5794e06374be9d493cad";

  const [loader, setLoader] = useState(false);

  const movieInfo = useContext(MovieContext);

  useEffect(() => {
    const upcomigFetch = async () => {
      try {
        const response = await fetch(urlUpcomig);
        const data = await response.json();

        movieInfo.updateUpcomig(data);
        setLoader(true);
      } catch (err) {
        console.log("errr");
      }
    };
    upcomigFetch();

    const popularFun = async () => {
      try {
        const response = await fetch(urlPopular);
        const data = await response.json();

        movieInfo.updatePopular(data);
      } catch (err) {
        console.log("errr");
      }
    };
    popularFun();

    const nowPlayingFun = async () => {
      try {
        const response = await fetch(nowPlaying);
        const data = await response.json();

        movieInfo.updateNowPlaying(data);
      } catch (err) {
        console.log("errr");
      }
    };

    nowPlayingFun();

    const highRatedFun = async () => {
      try {
        const response = await fetch(UrlhighRated);
        const data = await response.json();

        movieInfo.updateHighRated(data);
      } catch (err) {
        console.log("errr");
      }
    };

    highRatedFun();

    const trendingFun = async () => {
      try {
        const response = await fetch(urlTrending);
        const data = await response.json();

        movieInfo.updateTrending(data);
      } catch (err) {
        console.log("errr");
      }
    };

    trendingFun();
  }, []);

  if (!loader) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        {" "}
        LOADING......{" "}
      </h1>
    );
  }
 

  return (
    <>
      <Slider />

      <div>
        <h2 className="title"> Upcoming Movies </h2>
        <Card arr={movieInfo.upcoming} />

        <h2 className="title"> popular shows </h2>
        <Card arr={movieInfo.popular} />

        <h2 className="title"> Now Playing </h2>
        <Card arr={movieInfo.nowPlaying} />

        <h2 className="title"> High Rated </h2>
        <Card arr={movieInfo.highRated} />
        <h2 className="title"> Trending </h2>
        <Card arr={movieInfo.trending} />
      </div>
    </>
  );
}

export default Home;
