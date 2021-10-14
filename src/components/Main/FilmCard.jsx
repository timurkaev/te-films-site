import React from 'react'
import { Link } from 'react-router-dom'

function FilmCard({ movie }) {
  return (
    <div className="film">
      <Link to={`/info/${parseInt(movie.id)}`}>
      <img src={movie?.medium_cover_image} alt="img" />
      <div className="movie-name">{movie?.title}</div>
      </Link>
      <div className="genres">{movie.genres.join().split("")}</div>
    </div>
  );
}

export default FilmCard;
