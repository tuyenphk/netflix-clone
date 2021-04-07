import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../../axios'

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    //a snippet of code which runs based on the specific conditions
    useEffect(() => {
        //if [], run once when the row loads, and don't run again
        //if [variable], run every time the variable loads
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row-posters">
                {movies.map(movie => {
                    return <img className="row-poster"
                                src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                })}
            </div>
            
        </div>
    )
}

export default Row
