import React from 'react';
import { MovieItem } from '../movie-item/movie-item.jsx';

const MoviesList = (props) => {

  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? movies.map((movie) => (<MovieItem key={movie.imdbID} {...movie} />))
      : <h4>Ничего не найдено</h4>
    }
    </div>
  )
};

export { MoviesList };