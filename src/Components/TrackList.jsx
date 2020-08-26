import React from 'react';
import Track from './Track';

const TrackList = function trackList(props) {
  const {tracks} = props;
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
          { tracks.items.map((track) => <Track key={track.id} track={track} />) }
        </tbody>
      </table>
    </div>
  );
};

TrackList.propTypes = {};
TrackList.defaultProps = {};

export default TrackList;