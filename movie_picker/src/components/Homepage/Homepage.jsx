import React from 'react';
import { Link } from "react-router-dom"
function Homepage(props) {

    return (
        <body>
            <div className="HomepageDiv">
                <div id="popularList" className="homeButton">
                    {/* Redirects to options Component */}
                    <Link to="/choices">
                        <button className="actualButton">See what's popular now!</button>
                    </Link>
                </div>
                <div id="pickButton" className="homeButton">
                    {/* Redirects to Pick Component */}
                    <Link to="/pick">
                        <button className="actualButton">Find the best movies by Year & Genre</button>
                    </Link>
                </div>
                <div id="myListButton" className="homeButton">
                    {/* Redirects to List Component */}
                    <Link to="list">
                        <button className="actualButton">My List</button>
                    </Link>
                </div>
            </div>
        </body>
    );
}

export default Homepage;