import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../Playlist/Playlist';
import TopNavigation from '../TopNavigation/TopNavigation';
import SideNavigation from '../SideNavigation/SideNavigation';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';

class PlaylistPage extends React.Component {
  constructor(props) {
    super(props);
    const { playlistTracks } = this.props.location;
    /*
     * TODO: When landing directly on a page,
     * React Router does not pass in data
     * and playlistTracks is set to undefined.
     * For now, the fix is to initialize with
     * an empty array in case no data is passed.
     */
    this.state = {
      playlistName: 'Unnamed Playlist',
      playlistTracks: playlistTracks || [],
      selectedPlaylistTrack: {},
    };
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }

  selectTrack(track) {
    this.setState({
      selectedPlaylistTrack: track,
    });
  }

  removeTrack(track) {
    this.setState((prevState) => { playlistTracks: prevState.playlistTracks.filter(playlistTrack => playlistTrack !== track) });
  }

  render() {
    return (
      <div className="wrapper">
        <TopNavigation />

        <SideNavigation playlistTracks={this.state.playlistTracks} />

        <div className="content-wrapper">
          <div className="content-header" />
          <section className="content">
            <div className="container-fluid">
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onSelect={this.selectTrack} onNameChange={this.updatePlaylistName} />
            </div>
            <Modal track={this.state.selectedPlaylistTrack} action="remove" onAction={this.removeTrack} />
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

PlaylistPage.propTypes = {
  location: PropTypes.object,
};

PlaylistPage.defaultProps = {
  location: {},
};

export default PlaylistPage;
