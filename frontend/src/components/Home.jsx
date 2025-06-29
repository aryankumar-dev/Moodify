import Nav from "./Nav.jsx";
import "./Home.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

function Home() {

    const [activeMood, setActiveMood] = useState("");

    const handleClick = (mood) => {
        setActiveMood(mood);
    };

    return (
        <>
            <Nav />
            <div className="choosemood-box col-8 mx-auto mt-5 text-white">
                <div>
                    <p className='display-5 fw-bolder'>Choose Your Mood</p>
                    <p>Select your current mood and we'll create a playlist just for you.</p>
                    <Link to={`/recommended/37i9dQZF1DX4Wsb4d7NKfP`}>
                        <button className="bg-primary text-white" >Happy</button>
                    </Link>
                </div>
            </div>

            <div className="moods text-white col-4 mx-auto mt-5">
                <Link to={`/recommended/37i9dQZF1DX4Wsb4d7NKfP`}>
                    <button 
                        className={activeMood === "Sad" ? "active" : ""} 
                        onClick={() => handleClick("Sad")}
                    >
                        Sad
                    </button>
                </Link>

                <Link to={`/recommended/37i9dQZF1DX4Wsb4d7NKfP`}>
                    <button 
                        className={activeMood === "Energetic" ? "active" : ""} 
                        onClick={() => handleClick("Energetic")}
                    >
                        Energetic
                    </button>
                </Link>

                <Link to={`/recommended/37i9dQZF1DX4Wsb4d7NKfP`}>
                    <button 
                        className={activeMood === "Chill" ? "active" : ""} 
                        onClick={() => handleClick("Chill")}
                    >
                        Chill
                    </button>
                </Link>

                <Link to={`/recommended/37i9dQZF1DX4Wsb4d7NKfP`}>
                    <button 
                        className={activeMood === "Focus" ? "active" : ""} 
                        onClick={() => handleClick("Focus")}
                    >
                        Focus
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Home;
