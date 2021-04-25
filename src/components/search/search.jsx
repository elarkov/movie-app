import React from 'react';

class Search extends React.Component {

  

  state = {
    search: '',
  }

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchMovie(this.state.search);
    }
  }

  handleOnButton = () => {
    this.props.searchMovie(this.state.search);
  }

  render() {
    return (
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
    )
  }
}

export { Search };