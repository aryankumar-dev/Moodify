import Nav from "./Nav.jsx";
import "./Home.css"
function Home() {
    return (
        <>
            <Nav />
            <div className="choosemood-box col-8 mx-auto mt-5 text-white">
            <div>

                <p className='display-5 fw-bolder' >Choose Your Mood</p>
                <p>Select your current mood and we'll create a playlistjust for you. </p>
                <button className="boxbtn text-white">Happy</button>
            </div> </div>

            <div className="moods text-white col-4 mx-auto mt-5">
                <button>Sad</button>
                <button>Energetic</button>
                <button>Chill</button>
                <button>Focus</button>
            </div>
        </>
    );
}

export default Home;
