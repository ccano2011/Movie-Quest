import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <nav className="Navi">

                <div className="navLinks">
                    <p className="Link"  >
                        <Link to="/">
                            Home
                            </Link>
                    </p>
                    <p className="Zelda">
                        <Link to="list" >
                            My List
                            </Link>
                    </p>
                    <h1 className="navTitle">Movie Quest</h1>
                </div>
            </nav>
        )
    }
}

export default Navbar