import React, {useState} from "react";

import axios from './axios';

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
    )
}