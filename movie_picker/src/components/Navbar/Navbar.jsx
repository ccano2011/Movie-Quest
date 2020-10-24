import React from 'react';
import { Link } from "react-router-dom"
// import easterEgg from '../easterEgg/easterEgg';
// import Grindhouse from '../videos/EasterEggBackground.mp4'

function Navbar() {

    // const handleClick = (easterEgg) => {
    //     <video className="easter-egg" autoPlay loop>
    //         <source src={Grindhouse} type="video/mp4" />
    //     </video>
    // }
    /* <Link to="/easterEgg" onClick={() => handleClick(easterEgg)}></Link> */

    return (
        <div className="navLinks">
            <p className="navbar">Movie Quest</p>
            <p className="navbar">
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
export default Navbar