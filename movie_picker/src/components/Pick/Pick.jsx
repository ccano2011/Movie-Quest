import React from "react";
import { useState } from "react";
import axios from "axios";

function Pick() {
    const [bestOfYear, setBestOfYear] = useState([]);
    // const [added, setAdded] = useState(false)
    const [year, setYear] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(year)
        const fetchMovies = async () => {
            const movieEndpoint = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_count.gte=500`);
            setBestOfYear(movieEndpoint.data.results);
        };
        fetchMovies();
    };

    console.log(bestOfYear)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="clicks"
                    placeholder="e.g. 1999"
                    value={year}
                    onChange={(event) => {
                        setYear(event.target.value)
                    }}
                />
                <button type="submit">Submit Year</button>
            </form>
        </div >
    );
}
export default Pick