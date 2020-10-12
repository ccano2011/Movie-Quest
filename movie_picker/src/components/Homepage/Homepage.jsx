import React from 'react';
import { Link } from "react-router-dom"
function Homepage(props) {

    return (
        <>
            <div className="homePageTitle">
                <h1>Movie Quest!</h1>
                <h5>Find what to watch</h5>
            </div>
            <div className="popularList">
                {/* Redirects to Choice Component */}
                <Link to="/options">
                    <button>See what's popular now!</button>
                </Link>
            </div>
            {/* <div className="bestOf"> */}
            {/* Redirects to Options Component */}
            {/* <button>Find the best movies by Year & Genre</button> */}
            {/* </div> */}
            <div className="myList">
                {/* Redirects to List Component */}
                <button>My List</button>
            </div>
        </>
    );
}

export default Homepage;