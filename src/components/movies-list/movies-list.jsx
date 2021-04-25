import React from 'react';
import { MovieItem } from '../movie-item/movie-item.jsx';

const MoviesList = (props) => {

  const { movies } = props;

  return (
    <div className="movies">
      {movies.map((movie) => <MovieItem key={movie.imdbID} {...movie} />)}
    </div>
  )
};

export { MoviesList };