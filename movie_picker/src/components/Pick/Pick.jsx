import React from "react";
import { useState } from "react";
import { Link, } from 'react-router-dom'
import axios from "axios";

function Pick() {
    const [bestOfYear, setBestOfYear] = useState([]);
    // const [added, setAdded] = useState(false)
    const [year, setYear] = useState("1999")

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
    const imageURL = `https://image.tmdb.org/t/p/w500`;
    return (
        <div>
            <div className="bestOfYear">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="clicks"
                        placeholder="1999"
                        value={year}
                        min="1900" max={new Date().getFullYear()}
                        onChange={(event) => {
                            setYear(event.target.value)
                        }}
                    />
                    <button type="submit">Submit Year</button>
                </form>
            </div>
            <div>
                {bestOfYear.map((movie) => (
                    <div key={movie.id}>
                        <Link to="movieInfo">
                            <img className="pickPoster" src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br />
                        </Link>
                        {/* <p className="title">{movie.title} <br /></p>
                        <p className="plotSummary">{movie.overview} <br /></p>
                        <p className="userScore" >User ratings: {movie.vote_average}/10</p> */}
                        {/* <button className="button" onClick={() => handleSubmit(movie)}>{added ? "Added to My List!" : "Add to My List"}</button> */}
                    </div>
                ))}
            </div>
        </div >
    );
}
export default Pick