import React from 'react';
import PropTypes from 'prop-types';
import Track from './Track';

const TrackList = function trackList(props) {
  const {tracks, onAdd} = props;

  if(tracks.items.length) {
    return (
      <div className="col-lg-12 mb-3">
        <h3 className="text-success text-center mb-3">Tracks</h3>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Album</th>
              <th scope="col">Artist</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { tracks.items.map((track) => <Track key={track.id} track={track} onAdd={onAdd} />) }
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};

TrackList.propTypes = {};

TrackList.defaultProps = {
  tracks: {
    items: []
  }
};

export default TrackList;
