import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../../Context/MovieContext";
import RoutesCard from "./RoutesCard";
import { useParams } from "react-router-dom";

function Upcoming() {
  const [moviedata, setMovieData] = useState([]);
  const params = useParams();

  console.log(params.path)
  useEffect(() => {
    const upcomigFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.path}?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1`
        );
        const data = await response.json();
        console.log(data + "heyyyyyyyyyyy");
        setMovieData(data);
        // setLoader(true);
      } catch (err) {
        console.log("error hai bhai");
      }
    };
    upcomigFetch();
  }, []);

  // const upcomingInfo = useContext(MovieContext);

  return <>{moviedata && <RoutesCard arr={moviedata} />}</>;
}

export default Upcoming;
