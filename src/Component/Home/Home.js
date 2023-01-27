import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import Card from '../Card/Card';
import TvShows from '../Router/TvShows';
import MovieContext from '../../Context/MovieContext';
function Home() {
    const urlUpcomig = "https://api.themoviedb.org/3/movie/upcoming?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1"
    const urlPopular = "https://api.themoviedb.org/3/movie/popular?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1"
    const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1";
    const UrlhighRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=82f112e2551f5794e06374be9d493cad&language=en-US&page=1"
    const urlTrending = "https://api.themoviedb.org/3/trending/all/day?api_key=82f112e2551f5794e06374be9d493cad"
    const [upcoming, setComing] = useState([]);
    const [popular, setPopular] = useState([])
    const [loader, setLoader] = useState(false)
    const [nowPlayingState, setNowPlaying] = useState([]);
    const [highRated, setHighRated] = useState([])
    const [trending,setTrending] = useState([])

    const movieInfo = useContext(MovieContext);

    // const firstName = useContext();
    useEffect(() => {
        movieInfo.update({id:'1', title: 'Kantara', desciption: 'A Good Movie'});
        
        const upcomigFetch = async () => {

            try {
                const response = await fetch(urlUpcomig);
                const data = await response.json();
             
                setComing(data);
                setLoader(true)
            } catch (err) {
                console.log("errr")
            }

        }
        upcomigFetch();


        const popularFun = async () => {

            try {
                const response = await fetch(urlPopular);
                const data = await response.json();
               
                setPopular(data);
               
                   
            } catch (err) {
                console.log("errr")
            }


        }
        popularFun();

        const nowPlayingFun = async () => {

            try {
                const response = await fetch(nowPlaying);
                const data = await response.json();
            
                setNowPlaying(data);
            } catch (err) {
                console.log("errr")
            }


        }

        nowPlayingFun()

        const highRatedFun = async () => {

            try {
                const response = await fetch(UrlhighRated);
                const data = await response.json();
            
                setHighRated(data);
            } catch (err) {
                console.log("errr")
            }
            }

        highRatedFun()

        const trendingFun = async () => {

            try {
                const response = await fetch(urlTrending);
                const data = await response.json();
            
                setTrending(data);
            } catch (err) {
                console.log("errr")
            }
            }

        trendingFun()


    }, [])

    if (!loader) {
        return <h1 style={{ textAlign: "center" }}> LOADING......  </h1>
    }


    return (
        <div>
            <div className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${popular.results[0].poster_path}")`}} >
              
            </div>
            <h2 className='title'> Upcoming Movies </h2>
            <Card arr={upcoming} />

            <h2 className='title'> popular shows </h2>
            <Card arr={popular} />

            <h2 className='title'> Now Playing </h2>
            <Card arr={nowPlayingState} />

            <h2 className='title'> Now Playing </h2>
            <Card arr={highRated} />
            <h2 className='title'> Trending </h2>
            <Card arr={trending} />
           
           {/* <firstName.provider >
              <TvShows value={"very popular"} />
           </firstName.provider> */}
        
        </div>
        
    )
}

export default Home;
