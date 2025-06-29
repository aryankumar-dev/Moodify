import { useState } from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-3">
            <a className="navbar-brand" href="#">Moodify</a>
            <div className="d-flex align-items-center">
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Explore</a>
                <a className="nav-link" href="#">Your Library</a>
                <a className="nav-link" href="#">@</a>
                <a className="nav-link" href="#">Logo</a>
            </div>
        </nav>
    );
}

export default Nav;
