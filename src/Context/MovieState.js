import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieState = (props) => {

    const [movieData, setMovieData] = useState({});

    const update = (movie) => {
        setMovieData(movie);
    }

    return (
        <MovieContext.Provider value = {{movieData, update}}>
            {props.children}
        </MovieContext.Provider>
    );

}

export default MovieState;