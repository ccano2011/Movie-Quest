import React, { useState, useEffect } from "react";
import axios from "axios";

//FOR BEST OF YEAR & GENRE

function Pick(props) {
    const [bestOfYear, setBestOfYear] = useState([]);
    const [year, setYear] = useState("1999")
    const [added, setAdded] = useState(false)
    const [genre, setGenre] = useState([])
    //passing the input values from the dropdown and storing it in state was from a solution found in stack overflow
    const [dropdownValue, setdropdownValue] = useState(1)


    useEffect(() => {
        console.log(dropdownValue)
        const genreURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=${dropdownValue}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500`
        const fetchMovies = async () => {
            const movieEndpoint = await axios.get(
                genreURL)
            setGenre(movieEndpoint.data.results)
        }
        fetchMovies();
        //We needed to pass down dropdownValue to fulfill the dependency requirement!!
    }, [dropdownValue])


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

    const imageURL = `https://image.tmdb.org/t/p/w500`;
    return (
        <div>
            <h4 id="disclaimer">*Please refresh the page before Selecting a Genre after searching By Year*</h4>
            <div className="bestOfYear">
                <h3 className="divTitle">Enter a year!</h3>
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
                    <button className="submitButton" type="submit">Submit Year</button>
                </form>
            </div>
            <h3 id="oR">-OR-</h3>
            <div className="bestOfGenre">
                <h3 className="divTitle">Select a Genre!</h3>
                <form id="dropdown">
                    {/* This onChange function was inspired by 2 solutions on stack overflow */}
                    <select onChange={(e) => setdropdownValue(e.target.value)} value={dropdownValue} >
                        <option value="1">Select a Genre</option>
                        <option value="28">Action</option>
                        <option value="12">Adventure</option>
                        <option value="16">Animation</option>
                        <option value="35">Comedy</option>
                        <option value="80">Crime</option>
                        <option value="99">Documentary</option>
                        <option value="18">Drama</option>
                        <option value="10751">Family</option>
                        <option value="14">Fantasy</option>
                        <option value="36">History</option>
                        <option value="27">Horror</option>
                        <option value="10402">Music</option>
                        <option value="9648">Mystery</option>
                        <option value="10749">Romance</option>
                        <option value="878">Sci-Fi</option>
                        <option value="10770">TV Movies</option>
                        <option value="53">Thrillers</option>
                        <option value="10752">War</option>
                        <option value="37">Western</option>
                    </select>
                    {/* <input type="submit" value="Submit" /> */}
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
            <div>
                {genre.map((movie) => (
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