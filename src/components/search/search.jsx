import React from 'react';

class Search extends React.Component {

  state = {
    search: '',
    type: 'all'
  }

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleOnButton = () => {
    this.props.searchMovie(this.state.search, this.state.type);
  };

  handleFilter = (evt) => {
    this.setState(() => ({
      type: evt.target.dataset.type
    }), () => {
      this.props.searchMovie(this.state.search, this.state.type);
    })
    
  }

  render() {
    return (
      <>
      <div className="search">
        <input
          className="search__input"
          type="search"
          placeholder="Поиск..."
          value={this.state.search}
          onChange={(evt) => this.setState({
            search: evt.target.value
          })}
          onKeyDown={this.handleKey}
        />
        <button className="search__button" onClick={this.handleOnButton}>Поиск</button>
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
                checked={this.state.type === 'all'}
                onChange={this.handleFilter}
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
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
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
                checked={this.state.type === 'series'}
                onChange={this.handleFilter}
              />
            Сериалы
          </label>
        </div>
    </fieldset>
    </>
    )
  }
}

export { Search };