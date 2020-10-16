import React, { useState, useEffect } from 'react';
import axios from 'axios';

//FOR POPULAR MOVIES
function Choices(props) {
    const [popEndpoint, fetchPopEndpoint] = useState([]);
    const [added, setAdded] = useState(false)
    useEffect(() => {
        const popularMovies = async () => {
            const popularMoviesEndpoint = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            fetchPopEndpoint(popularMoviesEndpoint.data.results.slice(0, 10));
        };
        popularMovies();
    }, []);

    console.log(popEndpoint)

    const handleSubmit = async (movie) => {
        setAdded(true);
        let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const fields = {
            title: movie.title,
            poster: image,
            plotSummary: movie.overview,
            userRating: movie.vote_average,

        };
        const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list`
        await axios.post(airTableURL, { fields }, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            },
        });
        props.setFetchList(!props.fetchList);
    }

    console.log(popEndpoint)
    const imageURL = `https://image.tmdb.org/t/p/w500`;
    return (
        popEndpoint.map((movie) => (
            <div key={movie.id}>
                <img className="pickPoster" src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br />
                <p className="title">{movie.title} <br /></p>
                <p className="plotSummary">{movie.overview} <br /></p>
                <p className="userScore" >User ratings: {movie.vote_average}/10</p>
                <button className="listButton" onClick={() => handleSubmit(movie)}>{added ? "Added to My List!" : "Add to My List"}</button>
            </div>
        ))
    );
}

export default Choices;