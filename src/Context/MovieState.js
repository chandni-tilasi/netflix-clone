import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieState = (props) => {

    const [movieData, setMovieData] = useState({
        id: '1',
        title: 'Kantara',
        description: 'Movie Of A Tribal Land - King - God'
    });

    // const update = () => {

    // }

    return (
        <MovieContext.Provider value = {{movieData}}>
            {props.children}
        </MovieContext.Provider>
    );

}

export default MovieState;