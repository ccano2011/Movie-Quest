import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <nav className="Foot">
                <div className="footerLinks">
                    <p id="p">Powered by:</p>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img className="tmdbLogo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB Logo" /></a>

                </div>
            </nav>
        )
    }
}

export default Footer