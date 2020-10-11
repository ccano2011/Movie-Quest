// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Choice(props) {
    //    The following is a reference code from Create Review:
    // const [title, setTitle] = useState("There aren't any.");
    // const [text, setText] = useState("RIP");
    // const [author, setAuthor] = useState('Chris Cano')

    //for Airtable
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     //we have to make a fields object that holds the title, text, & author
    //     const fields = {
    //         title,
    //         poster,
    //         releaseYear,
    //         runtime,
    //     };
    //     //make a POST request to our endpoint to create new data
    //     const airtableURL = `https://api.airtable.com/v0/${process.env.
    //         REACT_APP_AIRTABLE_BASE}/list`
    //     //awat axios.methodName(URL, request.body??, options
    //     await axios.post(airtableURL, { fields }, {
    //         headers: {
    //             Authorization: `Bearer ${process.env.
    //                 REACT_APP_AIRTABLE_KEY}`
    //         },
    //     });
    //     props.setFetchReviews(!props.setFetchReviews); <--Refer to 'App.js' in 'Await-for-it'
    //     //make another GET request???
    //     //clear out our inputs so we can type something new in
    //     setTitle("");                                    <-- Refers to the useStates above; 
    //     setText("");
    //     setAuthor("");
    // };

    //Refer to "return in CreateReview.jsx"
    // return (
    //     <div>
    //      
    //     </div>
    // )
//     const popularMovies = async (e) => {
//         e.preventDefault();
//         const popularMoviesEndpoint = `https://api.themoviedb.org/3/trending/movie/week?${process.env.REACT_APP_TMDB_KEY}/`
//         console.log(popularMoviesEndpoint)
//         //api_key=78e57902e37048223b1cc02af5aa0a7d
//     }
// }

// export default Choice