import React from 'react';
import PropTypes from 'prop-types';
import Playlist from '../Playlist/Playlist';
import Navigation from '../Navigation/Navigation';
import RemoveModal from '../RemoveModal/RemoveModal';
import Footer from '../Footer/Footer';
import PlaylistNameForm from '../PlaylistNameForm/PlaylistNameForm';

class PlaylistPage extends React.Component {
  constructor(props) {
    super(props);
    const { playlistTracks } = props.location;
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
      selectedTrack: {},
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
      selectedTrack: track,
    });
  }

  removeTrack(track) {
    this.setState((prevState) => ({ playlistTracks: prevState.playlistTracks.filter((playlistTrack) => playlistTrack !== track) }));
  }

  render() {
    const {
      playlistName,
      playlistTracks,
      selectedTrack,
    } = this.state;
    return (
      <div className="container-fluid">
        <RemoveModal track={selectedTrack} onAction={this.removeTrack} />
        <Navigation playlistTracks={playlistTracks} onSearch={this.search} />
        <PlaylistNameForm />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onSelect={this.selectTrack} onNameChange={this.updatePlaylistName} />
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
