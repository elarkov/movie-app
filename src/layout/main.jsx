import React from 'react';

import { MoviesList } from '../components/movies-list/movies-list.jsx';
import { Search } from '../components/search/search.jsx';
import { getMovies, searchMovie } from '../api/server.js';

class Main extends React.Component {
  state = {
    movies: [],
  };

  getMoviesList = () => {
    getMovies().then((data) => {
      this.setState({
        movies: data.Search,
      });
    });
  };

  findMovie = (str, type) => {
    searchMovie(str, type).then((data) => {
      this.setState({
        movies: data.Search,
      });
    });
  };

  componentDidMount() {
    this.getMoviesList();
  }

  render() {
    const { movies } = this.state;

    return (
      <main className='content'>
        <div className='container'>
          <Search searchMovie={this.findMovie} />
          {movies.length ? (
            <MoviesList movies={movies} />
          ) : (
            <h3>Загрузка...</h3>
          )}
        </div>
      </main>
    );
  }
}

export { Main };
