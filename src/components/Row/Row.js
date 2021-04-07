import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../../axios'

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
    }, [])

    return (
        <div>
            {/* title */}
            <h2>{title}</h2>

            {/* containers -> posters */}
            
        </div>
    )
}

export default Row
