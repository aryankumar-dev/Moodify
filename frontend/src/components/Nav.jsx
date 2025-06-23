import { useState } from "react";

import "./Nav.css";

function Nav() {
    return (

        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Moodify</a>
            <div>
                <a className="navbar-brand">Home</a>
                <a className="navbar-brand">Explore</a>
                <a className="navbar-brand">Your Libarary</a>
                <a className="navbar-brand">@</a>
                <a className="navbar-brand">Logo</a>
            </div>

        </nav>


    );
}

export default Nav;
