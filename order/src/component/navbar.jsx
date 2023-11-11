import React from "react";
import { Link } from "react-router-dom";
import logo from '../asset/logos.png'

function NavBar(){
    return <>
    <nav className="nav-container">
    <div className="navbar">
        <div className="logo">
           <img src={logo} alt="" />
        </div>
        <ul className="nav-link">
            <li>
                <Link to="#" className="link">Home</Link>
            </li>
            <li>
                <Link to="#" className="link">Abouts</Link>
            </li>
            <li>
                <Link to="#" className="link">Order</Link>
            </li>
            <li>
                <Link to="#" className="link">Contact-us</Link>
            </li>
        </ul>

    </div>

    </nav>
    </>
}
export default NavBar