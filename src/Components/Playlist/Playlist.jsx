import React from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  savePlaylist() {
    console.log('Saving playlist...');
  }

  handleNameChange(event) {
    const { onNameChange } = this.props;
    onNameChange(event.target.value);
  }

  /*
   * If there are no tracks to display,
   * notify user else display tracks.
   */
  displayTracks() {
    const {
      playlistTracks,
      onSelect,
    } = this.props;
    if (playlistTracks.length !== 0) {
      return <TrackList tracks={playlistTracks} onSelect={onSelect} buttonText="Remove from Playlist" />;
    }
    return null;
  }

  render() {
    const { playlistName } = this.props;
    return (
      <div className="row">
        <div className="col-lg-12">
          { this.displayTracks() }
        </div>
      </div>
    );
  }
}

Playlist.propTypes = {
  playlistName: PropTypes.string,
  playlistTracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  })),
  onSelect: PropTypes.func,
};

Playlist.defaultProps = {
  playlistName: 'Unnamed Playlist',
  playlistTracks: [],
  onSelect: () => {},
};

export default Playlist;
