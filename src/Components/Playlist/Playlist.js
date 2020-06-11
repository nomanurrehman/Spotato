import React from 'react';
import PropTypes from 'prop-types';
import TrackList from './../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{this.props.playlistName}</h3>
            </div>
            <div className="card-body p-0">
              <TrackList tracks={this.props.playlistTracks} onAdd={this.props.onAdd} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TrackList.propTypes = {
  playlistName: PropTypes.string,
  playlistTracks: PropTypes.array,
  onRemove: PropTypes.func
};

TrackList.defaultProps = {
  playlistName: '',
  playlistTracks: [],
  onRemove: () => {}
};

export default Playlist;
