import React from 'react';
import PropTypes from 'prop-types';
import Track from '../Track/Track';

const TrackList = function trackList(props) {
  const { tracks, onSelect, buttonText } = props;
  return (
    <table className="table table-dark table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        { tracks.map((track) => <Track key={track.id} track={track} onSelect={onSelect} buttonText={buttonText} />) }
      </tbody>
    </table>
  );
};

TrackList.propTypes = {
  buttonText: PropTypes.string,
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  })),
  onSelect: PropTypes.func,
};

TrackList.defaultProps = {
  buttonText: '',
  tracks: [],
  onSelect: () => {},
};

export default TrackList;
