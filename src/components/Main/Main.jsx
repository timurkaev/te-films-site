import React from "react";
import { useSelector } from "react-redux";
import ListMovie from "./ListMovie";
import MovieInfo from "./MovieInfo/MovieInfo";
import { Route, Switch } from "react-router-dom";

function Main() {
  const movies = useSelector((state) => state.listMovieReducer.items);
  const loading = useSelector(state => state.listMovieReducer.loading)

  const [moviePage, setMoviePage] = React.useState(1)
  const [moviePerPage] = React.useState(12)

  const lastMovieIndex = moviePage * moviePerPage
  const firstMovieIndex = lastMovieIndex - moviePerPage
  const currentMovie = movies.data?.movies.slice(firstMovieIndex, lastMovieIndex)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(movies.data?.movies.length / moviePerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => setMoviePage(pageNumber)

  return (
    <div className="main">
      {loading ? <div className='loading'>Loading...</div> :
      <Switch>
        <Route exact path={'/'}>
          <ListMovie movies={currentMovie} />
          <div className='pagination'>
            {pageNumbers.map((number) => {
              return (
                <button onClick={() => paginate(number)} key={number.id}>{number}</button>
              )
            })}
          </div>
        </Route>
        {movies?.data?.movies.map((movie) => {
          return(
          <Route path={`/info/${movie.id}`}>
            <MovieInfo movie={movie} />
          </Route>
          )
        })}
      </Switch>
      }
    </div>
  );
}

export default Main;
