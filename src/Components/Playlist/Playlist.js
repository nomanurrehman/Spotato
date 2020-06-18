import React from 'react';
import PropTypes from 'prop-types';
import TrackList from './../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  savePlaylist(){
    console.log('Saving playlist...');
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  /*
   * If there are no tracks to display,
   * notify user else display tracks.
   */
  displayTracks(){
    if( this.props.playlistTracks.length !== 0 ){
      return <TrackList tracks={this.props.playlistTracks} onSelect={this.props.onSelect} buttonText="Remove from Playlist" />
    } else {
      return 'No tracks added to current playlist';
    }
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="input-group">
                <input type="text" className="form-control" placeholder={this.props.playlistName} />
                <span className="input-group-append">
                  <button type="button" className="btn btn-success" onClick={this.savePlaylist}>Save to Spotify</button>
                </span>
              </div>
            </div>
            <div className="card-body">{ this.displayTracks() }</div>
          </div>
        </div>
      </div>
    );
  }
}

Playlist.propTypes = {
  playlistName: PropTypes.string,
  playlistTracks: PropTypes.array,
  onSelect: PropTypes.func
};

Playlist.defaultProps = {
  playlistName: 'Unnamed Playlist',
  playlistTracks: [],
  onSelect: () => {}
};

export default Playlist;
