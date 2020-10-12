import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'


function Options(props) {
    const [popEndpoint, fetchPopEndpoint] = useState([]);
    useEffect(() => {
        const popularMovies = async () => {
            const popularMoviesEndpoint = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            fetchPopEndpoint(popularMoviesEndpoint.data.results.slice(0, 10));
        };
        popularMovies();
    }, []);



    const imageURL = `https://image.tmdb.org/t/p/w500`;
    return (
        popEndpoint.map((movie) => (
            <div>
                <p className="title">{movie.title} <br /></p>
                <img src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br />
                <p className="plotSummary">{movie.overview} <br /></p>
                <p className="userScore">User ratings: {movie.vote_average}/10</p>
            </div>
        ))
    );
}

export default Options;