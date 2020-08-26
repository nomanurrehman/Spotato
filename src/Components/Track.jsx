import React from 'react';

const Track = function track(props) {
  const {track} = props;
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">{track.name}</a>
      </td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">{track.album.name}</a>
      </td>
      <td className="align-middle">
        { track.album.artists.map((artist) => <a key={artist.id} className="btn btn-sm btn-success mr-2" href="track.html">{artist.name}</a>) }
      </td>
      <td className="align-middle">
        <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal">Add to Playlist</button>
      </td>
    </tr>
  );
};

Track.propTypes = {};
Track.defaultProps = {};

export default Track;
