import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieState = (props) => {

    // const [movieData, setMovieData] = useState({});

    const [upcoming, setComing] = useState([]);
    const [popular, setPopular] = useState([])
    // const [loader, setLoader] = useState(false)
    const [nowPlaying, setNowPlaying] = useState([]);
    const [highRated, setHighRated] = useState([])
    const [trending,setTrending] = useState([])

   function updateUpcomig(data){
    setComing(data);
   }

   function updatePopular(data){
    setPopular(data);
   }

   function updateNowPlaying(data){
    setNowPlaying(data);
   }

   function updateHighRated(data){
    setHighRated(data);
   }

function updateTrending(data){
    setTrending(data);
}




    return (
        <MovieContext.Provider value = {{upcoming,updateUpcomig,popular,updatePopular,nowPlaying,updateNowPlaying,highRated,updateHighRated,trending,updateTrending}
    }>
            {props.children}
        </MovieContext.Provider>
    );

}

export default MovieState;