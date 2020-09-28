import React, { useEffect, useState } from 'react';

const IMAGE_API="https://image.tmdb.org/t/p/w1280";

function Movie(props) {
    const [vote, setvote] = useState(0);
    const {movie}= props;

    const setVoteClass = (vote)=>{
        if (vote >= 8) {
            return "green";
          } else if (vote >= 6) {
            return "orange";
          } else {
            return "red";
        }
    }
    return (
        <div className="movie-item">
            <img src={IMAGE_API+movie.poster_path} alt=""/>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
            </div>
            <div className="overview">
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}

export default Movie;