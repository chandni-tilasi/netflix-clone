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
    const [searchData,forSearchData] = useState([]);
    const [allMovieData,setAllMovieData] = useState([]);
    const [searchText,setSearchText] = useState("");
    
    function updateSearchText(data){
        setSearchText(data);
    }

   function updateUpcomig(data){
    setComing(data);
    setAllMovieData([...allMovieData,data])
   }

   function updatePopular(data){
    setPopular(data);
    setAllMovieData([...allMovieData,data])
   }

   function updateNowPlaying(data){
    setNowPlaying(data);
    setAllMovieData([...allMovieData,data])
   }

   function updateHighRated(data){
    setHighRated(data);
    setAllMovieData([...allMovieData,data])
   }

function updateTrending(data){
    setTrending(data);
    setAllMovieData([...allMovieData,data])
}





    return (
        <MovieContext.Provider value = {{upcoming,updateUpcomig,popular,updatePopular,nowPlaying,updateNowPlaying,highRated,updateHighRated,trending,updateTrending,allMovieData,searchText,updateSearchText}
    }>
            {props.children}
        </MovieContext.Provider>
    );

}

export default MovieState;