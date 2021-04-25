import React from 'react';

const MovieItem = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div id={id} className="card mb-3">
      {
        poster === 'N/A' ?
        <img src={`https://via.placeholder.com/260x370?text=${title}`} alt="" /> :
        <img src={poster} alt="" />
      }
      
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p>{year} <span>{type}</span></p>
      </div>
    </div>
  )
};

export { MovieItem };