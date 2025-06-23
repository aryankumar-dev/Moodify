import Nav from "./Nav.jsx";
import "./Home.css"
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <Nav />
            <div className="choosemood-box col-8 mx-auto mt-5 text-white">
                <div>

                    <p className='display-5 fw-bolder' >Choose Your Mood</p>
                    <p>Select your current mood and we'll create a playlistjust for you. </p>
                    <Link to={`/recommended/${'37i9dQZF1DX4Wsb4d7NKfP'}`}>
                        <button>Happy</button>
                    </Link>
                </div> </div>

            <div className="moods text-white col-4 mx-auto mt-5">
                <Link to={`/recommended/${'37i9dQZF1DX4Wsb4d7NKfP'}`}>
                    <button>Sad</button>
                </Link>

                <Link to={`/recommended/${'37i9dQZF1DX4Wsb4d7NKfP'}`}>
                    <button>Energetic</button>
                </Link>
                <Link to={`/recommended/${'37i9dQZF1DX4Wsb4d7NKfP'}`}>
                    <button>Chill</button>
                </Link>
                <Link to={`/recommended/${'37i9dQZF1DX4Wsb4d7NKfP'}`}>
                    <button>Focus</button>
                </Link>

            </div>
        </>
    );
}

export default Home;
