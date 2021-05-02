import React from 'react';

import { MoviesList } from '../components/movies-list/movies-list.jsx';
import { Search } from '../components/search/search.jsx';
import { getMovies, searchMovie } from '../api/server.js';



class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  getMoviesList = () => {
    getMovies().then((data) => {
      this.setState({
        movies: data.Search,
        loading: false
      })
    });
  };

  findMovie = (str, type) => {
    searchMovie(str, type).then((data) => {
      this.setState({
        movies: data.Search,
        loading: false
      });
    });
  }

  componentDidMount() {
    this.getMoviesList();
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='content'>
        <div className='container'>
          <Search searchMovie={this.findMovie} />
          {loading ? (
            <h3>Загрузка...</h3>
          ) : (
            <MoviesList movies={movies} />
          )}
        </div>
      </main>
    );
  }
}

export { Main };
