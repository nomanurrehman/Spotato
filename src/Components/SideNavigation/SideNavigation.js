import React from 'react';
import { Link } from 'react-router-dom';

class SideNavigation extends React.Component {
  render(){
    return (
      <aside className="main-sidebar sidebar-dark-primary">
        <div className="sidebar">
          <div className="image">
            <img src="logo.png" alt="logo" width="234" />
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <Link to={{pathname: "/playlists", playlistTracks: this.props.playlistTracks}} className="nav-link">
                  <i className="nav-icon fas fa-list-ul"></i>
                  <p>Current Playlist</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default SideNavigation;
