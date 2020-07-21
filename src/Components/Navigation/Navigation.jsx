import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

const Navigation = function topNavigation(props) {
  const { onSearch, playlistTracks } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">Spotato</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={{ pathname: '/playlists', playlistTracks }} className="nav-link">
              Current Playlist
            </Link>
          </li>
          <li className="nav-item active">
            <Link to={{ pathname: '/playlists', playlistTracks }} className="nav-link">
              My Playlists
            </Link>
          </li>
        </ul>
        <SearchForm onSearch={onSearch} />
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  onSearch: PropTypes.func,
  playlistTracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  })),
};

Navigation.defaultProps = {
  onSearch: () => {},
  playlistTracks: [],
};

export default Navigation;
