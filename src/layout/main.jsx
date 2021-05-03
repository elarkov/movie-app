import React, {useState, useEffect} from 'react';

import { MoviesList } from '../components/movies-list/movies-list.jsx';
import { Search } from '../components/search/search.jsx';
import { getMovies, searchMovie } from '../api/server.js';



const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMoviesList = () => {
    getMovies().then((data) => {
      setMovies(data.Search);
      setLoading(false);
    });
  };

  const findMovie = (str, type) => {
    searchMovie(str, type).then((data) => {
      setMovies(data.Search);
      setLoading(false);
    });
  };

  useEffect(() => {
    getMoviesList()
  }, [])

    return (
      <main className='content'>
        <div className='container'>
          <Search searchMovie={findMovie} />
          {loading ? (
            <h3>Загрузка...</h3>
          ) : (
            <MoviesList movies={movies} />
          )}
        </div>
      </main>
    );
}

export { Main };
