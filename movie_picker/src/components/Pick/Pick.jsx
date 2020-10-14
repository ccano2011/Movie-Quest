import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Pick() {
    const [genre, setFetchGenre] = useState([]);
    // const [added, setAdded] = useState(false)
    const [year, setYear] = useState(1999)

    // const onChangeHandler = event => {
    //     event.preventDefault()
    //     setInputValue(event.target.value);
    //     const fetchMovies = async () => {
    //         const movieEndpoint = await axios.get(
    //             `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=${inputValue}&vote_count.gte=1000`);
    //         setFetchGenre(movieEndpoint.data.results);
    //     };
    //     fetchMovies();
    // };
    // useEffect(() => {
    //     console.log(year)
    //     const fetchMovies = async () => {
    //         const movieEndpoint = await axios.get(
    //             `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_count.gte=1000`);
    //         setFetchGenre(movieEndpoint.data.results);
    //     };
    //     fetchMovies();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(year)
        const fetchMovies = async () => {
            const movieEndpoint = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_count.gte=1000`);
            setFetchGenre(movieEndpoint.data.results);
        };
        fetchMovies();
    };

    console.log(genre)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="clicks"
                    value={year}
                    onChange={(event) => {
                        setYear(event.target.value)
                    }}
                />
                <button type="submit"></button>
            </form>
        </div >
    );
}
export default Pick