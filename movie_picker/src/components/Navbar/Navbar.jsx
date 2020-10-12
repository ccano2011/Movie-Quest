import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <nav className="Navi">
                <h1 className="navTitle">Movie Quest</h1>
                <div className="navLinks">
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
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