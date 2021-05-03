import React, {useState} from 'react';

const Search = (props) => {

  const {
    
    searchMovie = Function.prototype,
  
  } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      searchMovie(search, type);
    }
  };

  const handleOnButton = () => {
    searchMovie(search, type);
  };

  const handleFilter = (evt) => {
    setType(evt.target.dataset.type);
    searchMovie(search, evt.target.dataset.type);
  };

    return (
      <>
      <div className="search">
        <input
          className="search__input"
          type="search"
          placeholder="Поиск..."
          value={search}
          onChange={ (evt) => setSearch(evt.target.value) }
          onKeyDown={handleKey}
        />
        <button className="search__button" onClick={handleOnButton}>Поиск</button>
      </div>
      <fieldset className="form-group">
        <div className="form-check">
          <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                data-type="all"
                checked={type === 'all'}
                onChange={handleFilter}
              />
            Все
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
                data-type="movie"
                checked={type === 'movie'}
                onChange={handleFilter}
                
              />
            Фильмы
          </label>
        </div>
        <div className="form-check disabled">
          <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios3"
                value="option3"
                data-type="series"
                checked={type === 'series'}
                onChange={handleFilter}
              />
            Сериалы
          </label>
        </div>
    </fieldset>
    </>
    )
}

export { Search };