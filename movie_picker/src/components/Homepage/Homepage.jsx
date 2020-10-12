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
                {/* Redirects to options Component */}
                <Link to="/options">
                    <button>See what's popular now!</button>
                </Link>
            </div>
            {/* <div className="bestOf"> */}
            {/* Redirects to Choise Component */}
            {/* <Link to="/choice"> */}
            {/* <button>Find the best movies by Year & Genre</button> */}
            {/* </Link> */}
            {/* </div> */}
            <div className="myList">
                {/* Redirects to List Component */}
                <Link to="list">
                    <button>My List</button>
                </Link>
            </div>
        </>
    );
}

export default Homepage;