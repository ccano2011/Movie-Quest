import React from 'react';

function Homepage(props) {
    return (
        <div>
            <body>
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
            </body>
        </div>
    );
}

export default Homepage;