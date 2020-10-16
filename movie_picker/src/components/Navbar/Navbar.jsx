import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (


            <div className="navLinks">
                <p className="navbar">Movie Quest</p>
                <p className="navbar"  >
                    <Link to="/">
                        Home
                            </Link>
                </p>
                <p className="navbar">
                    <Link to="list" >
                        My List
                            </Link>
                </p>
            </div>
        )
    }
}

export default Navbar