import React from "react";
import FilmCard from "./FilmCard";

function ListMovie({ movies }) {
  return (
    <>
      <h1 className="title">Home page</h1>
      <div className="listMovie">
        {movies?.map((movie) => {
          return <FilmCard movie={movie} key={movie.id}/>;
        })}
      </div>
    </>
  );
}

export default ListMovie;
