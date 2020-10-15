import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <nav className="Foot">
                <div className="footerLinks">
                    <ul className="footerUl">
                        <li>
                            <img className="tmdbLogo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TMDB Logo" />
                        </li>
                        <li>
                            <p className="tmdbCopyright"><a href="https://www.themoviedb.org/">© The Movie Database</a></p>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Footer