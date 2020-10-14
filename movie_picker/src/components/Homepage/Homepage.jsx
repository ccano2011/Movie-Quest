import React from 'react';
import { Link } from "react-router-dom"
function Homepage(props) {

    return (
        <>
            <div className="popularList">
                {/* Redirects to options Component */}
                <Link to="/choices">
                    <button>See what's popular now!</button>
                </Link>
            </div>
            {/* <div className="pickButton"> */}
            {/* Redirects to Pick Component */}
            {/* <Link to="/pick"> */}
            {/* <button>Find the best movies by Year & Genre</button> */}
            {/* </Link> */}
            {/* </div> */}
            <div className="myListButton">
                {/* Redirects to List Component */}
                <Link to="list">
                    <button>My List</button>
                </Link>
            </div>
        </>
    );
}

export default Homepage;