import Nav from "./Nav.jsx";
import "./Explore.css"
function Explore() {
    return (
        <div >
            <Nav />
            <div className="explore-moods col-8 mx-auto p-5 mt-5">
                <p className="display-5 fw-bolder">Your Moods</p>

                <div className="exploremoods">
                    <div className="mood">
                        <div className="logo"></div>
                        <div className="mood-texts">
                            <p>Uplifting</p>
                            <p>Happy</p>
                        </div>
                    </div>

                    <div className="mood">
                        <div className="logo"></div>
                        <div className="mood-texts">
                            <p>Chill</p>
                            <p>Relexed</p>
                        </div>
                    </div>

                    <div className="mood">
                        <div className="logo"></div>
                        <div className="mood-texts">
                            <p>Pumped</p>
                            <p>Energetic</p>
                        </div>
                    </div>

                    <div className="mood">
                        <div className="logo"></div>
                        <div className="mood-texts">
                            <p>Mellow</p>
                            <p>Reflective</p>
                        </div>
                    </div>

                    <div className="mood">
                        <div className="logo"></div>
                        <div className="mood-texts">
                            <p>Fierce</p>
                            <p>Intense</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;