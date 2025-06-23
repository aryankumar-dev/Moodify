import { useEffect, useState } from "react";
import rapidApiClient from "../../service/rapidApiClient.js";
import { Link, useParams } from 'react-router-dom';

function Recommended() {
    const { id } = useParams();
    useEffect(() => {
        rapidApiClient.getPlaylist(id)
            .then((data) => {

                console.log(data);
            })
            .catch((error) => {
                console.error("Failed to fetch favorites:", error);
                // setLoading(false);
            });
    }, [id]);

    return (
        <div>iuyvf</div>
    )
}

export default Recommended;