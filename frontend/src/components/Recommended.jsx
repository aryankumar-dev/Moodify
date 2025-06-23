import { useEffect, useState } from "react";
import rapidApiClient from "../../service/rapidApiClient.js";
import { useParams } from 'react-router-dom';
import './Recommended.css'; 

function Recommended() {
    const { id } = useParams();
    const [tracks, setTracks] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [playingTrackId, setPlayingTrackId] = useState(null);

    useEffect(() => {
        rapidApiClient.getPlaylist(id)
            .then((data) => {
                setTracks(data.items || []);
            })
            .catch((error) => {
                console.error("Failed to fetch playlist:", error);
            });
    }, [id]);

    const handleAddToFav = (songId) => {
        console.log(`Add to fav clicked for ID: ${songId}`);
    };

    const togglePlay = (trackId, previewUrl) => {
        if (!previewUrl) {
            alert("No preview available for this track.");
            return;
        }

        if (playingTrackId === trackId) {
            currentAudio.pause();
            setPlayingTrackId(null);
            setCurrentAudio(null);
        } else {
            if (currentAudio) {
                currentAudio.pause();
            }
            const audio = new Audio(previewUrl);
            audio.play();
            setCurrentAudio(audio);
            setPlayingTrackId(trackId);
        }
    };

    return (
        <div className="recommended-container">
            <h2>Recommended Tracks</h2>
            <div className="track-list">
                {tracks.map((item, index) => (
                    <div key={index} className="track-row">
                        <div 
                            className="image-container" 
                            onClick={() => togglePlay(item.track?.id, item.track?.preview_url)}
                        >
                            <img
                                src={item.track?.album?.images[0]?.url}
                                alt={item.track?.name || "No title"}
                                className="track-image"
                            />
                            <div className="play-icon">
                                {playingTrackId === item.track?.id ? "⏸" : "▶"}
                            </div>
                        </div>

                        <div className="track-info">
                            <p className="track-name">{item.track?.name || "Unknown Title"}</p>
                            <p className="track-artist">{item.track?.artists[0]?.name || "Unknown Artist"}</p>
                        </div>

                        <div className="track-actions">
                            <button
                                className="fav-btn"
                                onClick={() => handleAddToFav(item.track?.id)}
                            >
                                Add to Fav
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommended;
