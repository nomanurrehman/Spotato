import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideNavigation = function sideNavigation(props) {
  const { playlistTracks } = props;
  return (
    <aside className="main-sidebar sidebar-dark-primary">
      <div className="sidebar">
        <div className="image">
          <img src="logo.png" alt="logo" width="234" />
        </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column">
            <li className="nav-item">
              <Link to={{ pathname: '/playlists', playlistTracks }} className="nav-link">
                <i className="nav-icon fas fa-list-ul" />
                <p>Current Playlist</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

SideNavigation.propTypes = {
  playlistTracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  })),
};

SideNavigation.defaultProps = {
  playlistTracks: [],
};

export default SideNavigation;
