import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
//Componenets are imported below:
// import Homepage from './components/Homepage/Homepage'
import Choice from './components/Choice/Choice'
import Navbar from './components/Navbar/Navbar'

//import ".App.css"


function App() {
  //const for useStates
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

  console.log(popEndpoint)

  return (
    <div className="App">
      <>
        <header>
          <Navbar />
        </header>
        <div className="body">
          <div className="homePageTitle">
            <h1>Movie Quest!</h1>
            <h5>Find what to watch</h5>
          </div>
          <div className="popularList">
            {/* Redirects to Choice Component */}
            <button>See what's popular now!</button>
          </div>
          <div className="bestOf">
            {/* Redirects to Pick Component */}
            <button>Find the best movies by Year & Genre</button>
          </div>
          <div className="myList">
            {/* Redirects to List Component */}
            <button>My List</button>
          </div>
          {/* <p>{popEndpoint}</p> */}
        </div>
      </>
    </div>
  );
}

export default App;
