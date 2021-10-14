import React from "react";
import { Link } from "react-router-dom";

function MovieInfo({ movie }) {
  return (
    <div className="movie-info">
      <Link to={'/'}>
        <h2 className="title">Вернутся на главную страницу</h2>
      </Link>
      <h1 className="title">{movie.title_long}</h1>
      <div className="img-info">
        <img src={movie?.large_cover_image} alt="img" />
        <div className="about-movie">
          <table>
            <tr>
              <td>TITLE:</td>
              <td>{movie.title}</td>
            </tr>
            <tr>
              <td>YEAR:</td>
              <td>{movie.year}</td>
            </tr>
            <tr>
              <td>RATING:</td>
              <td className={movie.rating > 5 ? "green" : "red"}>
                {movie.rating}
              </td>
            </tr>
            <tr>
              <td>LANGUAGE:</td>
              <td>{movie.language}</td>
            </tr>
            <tr>
              <td>GENRES:</td>
              <td>{movie.genres.join().split("")}</td>
            </tr>
          </table>
          <h1>Description</h1>
          <div className="description">
            <span>{movie.description_full}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
