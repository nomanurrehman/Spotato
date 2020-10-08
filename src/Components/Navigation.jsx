import React from 'react';

const Navigation = function navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand text-success" href="/">Spotato</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Current Playlist</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Playlists</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {};
Navigation.defaultProps = {};

export default Navigation;
