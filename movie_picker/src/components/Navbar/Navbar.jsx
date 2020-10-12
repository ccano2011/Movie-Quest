import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="Navi">
                <h1 className="navTitle">Movie Quest</h1>
                <div className="navLinks">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">My List</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar