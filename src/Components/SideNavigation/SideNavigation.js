import React from 'react';
import { Link } from 'react-router-dom';

class SideNavigation extends React.Component {
  render(){
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User's avatar" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <Link to={{pathname: "/playlists", playlistTracks: this.props.playlistTracks}} className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>My Playlists</p>
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
