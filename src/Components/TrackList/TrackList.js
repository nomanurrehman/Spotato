import React from 'react';
import PropTypes from 'prop-types';
import Track from './../Track/Track';

class TrackList extends React.Component {
  render(){
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{width: '10px'}}>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { this.props.tracks.map(track => { return <Track key={track.id} track={track} onSelect={this.props.onSelect} buttonText={this.props.buttonText} /> }) }
        </tbody>
      </table>
    );
  }
}

TrackList.propTypes = {
  buttonText: PropTypes.string,
  tracks: PropTypes.array,
  onSelect: PropTypes.func
};

TrackList.defaultProps = {
  buttonText: '',
  tracks: [],
  onSelect: () => {}
};

export default TrackList;
