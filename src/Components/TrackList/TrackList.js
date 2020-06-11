import React from 'react';
import PropTypes from 'prop-types';
import Track from './../Track/Track';

class TrackList extends React.Component {
  render(){
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{width: '10px'}}>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Add to Playlist</th>
          </tr>
        </thead>
        <tbody>
          { this.props.tracks.map(track => { return <Track key={track.id} track={track} onSelect={this.props.onSelect} onRemove={this.props.onRemove} /> }) }
        </tbody>
      </table>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func
};

TrackList.defaultProps = {
  tracks: [],
  onSelect: () => {},
  onRemove: () => {}
};

export default TrackList;
