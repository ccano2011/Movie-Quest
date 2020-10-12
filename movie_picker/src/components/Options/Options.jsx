import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'


function Options() {
    const [popEndpoint, fetchPopEndpoint] = useState()

    useEffect(() => {
        const popularMovies = async (e) => {
            // e.preventDefault();
            const popularMoviesEndpoint = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            fetchPopEndpoint(popularMoviesEndpoint.data.results)
            // console.log(popMovies)
            // fetchPopEndpoint(popularMoviesEndpoint.data.results[0].title);
        }
        popularMovies()
    }, [])

    //React Documentation Example

    // const listItems = popEndpoint.title.map((test) =>
    //   <li key={test.title}>{test}</li>
    // );

    // console.log(listItems)
    const imageURL = `https://image.tmdb.org/t/p/w500`

    let title = []
    let overview = []
    let rating = []
    let poster = []
    for (let i in popEndpoint) {
        title.push(popEndpoint[i].title)
        overview.push(popEndpoint[i].overview)
        rating.push(popEndpoint[i].vote_average)
        poster.push(imageURL + popEndpoint[i].poster_path)
        // console.log(title)
    }
    // console.log(poster)
    // console.log(title)
    // console.log(overview)
    // console.log(rating)
    return (
        <div className="popularMovies">
            <p><img src={poster[0]} /> <br />{title[0]} <br />{overview[0]} <br />User ratings: {rating[0]}/10</p>
            <p><img src={poster[1]} /> <br />{title[1]} <br />{overview[1]} <br />User ratings: {rating[1]}/10</p>
            <p><img src={poster[2]} /> <br />{title[2]} <br />{overview[2]} <br />User ratings: {rating[2]}/10</p>
            <p><img src={poster[3]} /> <br />{title[3]} <br />{overview[3]} <br />User ratings: {rating[3]}/10</p>
            <p><img src={poster[4]} /> <br />{title[4]} <br />{overview[4]} <br />User ratings: {rating[4]}/10</p>
            <p><img src={poster[5]} /> <br />{title[5]} <br />{overview[5]} <br />User ratings: {rating[5]}/10</p>
            <p><img src={poster[6]} /> <br />{title[6]} <br />{overview[6]} <br />User ratings: {rating[6]}/10</p>
            <p><img src={poster[7]} /> <br />{title[7]} <br />{overview[7]} <br />User ratings: {rating[7]}/10</p>
            <p><img src={poster[8]} /> <br />{title[8]} <br />{overview[8]} <br />User ratings: {rating[8]}/10</p>
            <p><img src={poster[9]} /> <br />{title[9]} <br />{overview[9]} <br />User ratings: {rating[9]}/10</p>
        </div>
    );
}

export default Options;