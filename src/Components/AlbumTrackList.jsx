import React from 'react';
import PropTypes from 'prop-types';
import AlbumTrack from './AlbumTrack';

const AlbumTrackList = function albumTrackList(props) {
  const { album } = props;

  if(album.tracks.items.length) {
    return (
      <div className="col-lg-12 mb-3">
        <h3 className="text-success text-center mb-3">Tracks</h3>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { album.tracks.items.map((track) => <AlbumTrack key={track.id} album={album} track={track} />) }
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};

AlbumTrackList.propTypes = {};

AlbumTrackList.defaultProps = {
  tracks: {
    items: []
  }
};

export default AlbumTrackList;
