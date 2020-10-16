import React from 'react';
import { Link } from "react-router-dom"
function Homepage(props) {

    return (
        <div className="HomepageDiv">
            <div id="popularList" className="homeButton">
                {/* Redirects to options Component */}
                <Link to="/choices">
                    <button>See what's popular now!</button>
                </Link>
            </div>
            <div id="pickButton" className="homeButton">
                {/* Redirects to Pick Component */}
                <Link to="/pick">
                    <button>Find the best movies by Year & Genre</button>
                </Link>
            </div>
            <div id="myListButton" className="homeButton">
                {/* Redirects to List Component */}
                <Link to="list">
                    <button>My List</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;