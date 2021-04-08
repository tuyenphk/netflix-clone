import React, {useState, useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import requests from '../../requests'

const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios (requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return requests;
        }
        fetchData();
    }, [])

    console.log(movie)

    function truncate (str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner" 
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
                    backgroundPosition: "center center"
                }}>
            <div className="banner-content">

                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>

                <p className="banner-description">
                    {truncate(movie?.overview, 150)}
                </p>
            </div>
            <div className="banner-fadeBottom" />
        </header>
    )
}

export default Banner
