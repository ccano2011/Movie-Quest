import React from "react";
import { useState } from "react";
import axios from "axios";


//FOR BEST OF YEAR & GENRE
function Pick(props) {
    const [bestOfYear, setBestOfYear] = useState([]);
    // const [added, setAdded] = useState(false)
    const [year, setYear] = useState("1999")
    const [added, setAdded] = useState(false)

    const handleYear = (e) => {
        e.preventDefault()
        console.log(year)
        const fetchMovies = async () => {
            const movieEndpoint = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_count.gte=500`);
            setBestOfYear(movieEndpoint.data.results);
        };
        fetchMovies();
    };


    const handleSubmit = async (movie) => {
        let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        setAdded(true);
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
    }

    console.log(bestOfYear)
    const imageURL = `https://image.tmdb.org/t/p/w500`;
    return (
        <div>
            <div className="bestOfYear">
                <form onSubmit={handleYear}>
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
                        <img className="pickPoster" src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br />
                        <p className="title">{movie.title} <br /></p>
                        <p className="plotSummary">{movie.overview} <br /></p>
                        <p className="userScore" >User ratings: {movie.vote_average}/10</p>
                        <button className="button" onClick={() => handleSubmit(movie)}>{added ? "Added to My List!" : "Add to My List"}</button>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default Pick