import React, { useState, useEffect } from 'react';
import axios from 'axios';


//FOR POPULAR MOVIES
function Choices(props) {
    const [popEndpoint, fetchPopEndpoint] = useState([]);

    useEffect(() => {
        const popularMovies = async () => {
            const popularMoviesEndpoint = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            fetchPopEndpoint(popularMoviesEndpoint.data.results.slice(0, 10))
        };
        popularMovies();
    }, []);
    if (!popEndpoint.length) {
        return <h4>Loading...</h4>
    }
    const handleSubmit = async (movie) => {
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
    if (!popEndpoint.length) {
        return <h4>Loading...</h4>
    }
    const imageURL = `https://image.tmdb.org/t/p/w500`;

    console.log(popEndpoint)

    return (
        // <></>)
        <div className="body">
            <div className="map">{
                popEndpoint.map((movie) => (
                    <div key={movie.id} className="mappedContent">
                        <img id="pickPoster" src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br />
                        <p id="title">{movie.title} <br /></p>
                        <button className="listButton" onClick={() => handleSubmit(movie)}>Add to My List</button>
                        <p id="plotSummary">{movie.overview} <br /></p>
                        <p id="userScore" >User ratings: {movie.vote_average}/10</p>

                    </div>
                ))
            }</div>
        </div>
    );
}

export default Choices;