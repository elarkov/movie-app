const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies = async () => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`);
  const res = await response.json();
  return res;
};

const searchMovie = async (str, type='all') => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`);
  const res = await response.json();
  return res;
}

export { getMovies, searchMovie };