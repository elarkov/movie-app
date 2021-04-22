import React from 'react';

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Movies-App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Главная
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <div className="navbar-nav ml-auto">
          <div className="nav-item active">
              &copy; {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </div>
    </nav>
  )
};

export { Footer };