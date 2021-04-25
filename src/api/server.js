const getMovies = async () => {
  const response = await fetch('http://www.omdbapi.com/?apikey=f8173c17&s=matrix');
  const res = await response.json();
  return res;
};

const searchMovie = async (str) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=f8173c17&s=${str}`);
  const res = await response.json();
  return res;
}

export { getMovies, searchMovie };