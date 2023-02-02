import React, { useEffect, useState } from "react";
import RoutesCard from "./RoutesCard";
import { useParams } from "react-router-dom";

function Upcoming() {
  const [moviedata, setMovieData] = useState([]);
  const [loader, setLoader] = useState(false);
  const params = useParams();

  console.log(params.path);
  useEffect(() => {
    const upcomigFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.path}?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1`
        );
        const data = await response.json();

        setMovieData(data);
        setLoader(true);
      } catch (err) {
        console.log("Couldn't Fetch Data");
      }
    };
    upcomigFetch();
  }, []);

  // const upcomingInfo = useContext(MovieContext);
  if (!loader) {
    return <h1>loading...</h1>;
  }

  return <>{moviedata && <RoutesCard arr={moviedata} />}</>;
}

export default Upcoming;
