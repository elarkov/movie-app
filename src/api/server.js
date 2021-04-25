const getMovies = async () => {
  const response = await fetch('http://www.omdbapi.com/?apikey=f8173c17&s=matrix');
  const res = await response.json();
  return res;
};

const searchMovie = async (str, type='all') => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=f8173c17&s=${str}${type !== 'all' ? `&type=${type}` : ''}`);
  const res = await response.json();
  return res;
}

export { getMovies, searchMovie };