import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <nav className="Navi">
                <h1 className="navTitle">Movie Quest</h1>
                <div className="navLinks">
                    <ul className="navUl">
                        <li id="homeLink">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li id="listLink">
                            <Link to="list">
                                My List
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar