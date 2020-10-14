import React, { useState } from 'react';
import axios from 'axios';
import Pick from './components/Pick/Pick';

function MovieInfo(props) {
    const [added, setAdded] = useState(false)
    const handleSubmit = async (movie) => {
        setAdded(true);
        let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const fields = {
            title: movie.title,
            poster: image,
            userRating: movie.vote_average,
        };
        const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list`
        await axios.post(airTableURL, { fields }, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            },
        });
        props.setFetchList(!props.fetchList);
        // setAdded(false);
    }
    return (
        props.bestOfYear.map((movie) => (
            <div key={movie.id}>
                {/* <img src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br /> */}
                <p className="title">{movie.title} <br /></p>
                <p className="plotSummary">{movie.overview} <br /></p>
                <p className="userScore" >User ratings: {movie.vote_average}/10</p>
                <button className="button" onClick={() => handleSubmit(movie)}>{added ? "Added to My List!" : "Add to My List"}</button>
            </div>
        ))

    );
}

export default MovieInfo;