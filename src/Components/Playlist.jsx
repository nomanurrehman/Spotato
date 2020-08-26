import React from 'react';

const Playlist = function playlist(props) {
  const {playlist} = props;
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">{playlist.name}</a>
      </td>
      <td className="align-middle">{playlist.owner.display_name}</td>
      <td className="align-middle">{playlist.owner.id}</td>
      <td className="align-middle">{playlist.tracks.total}</td>
    </tr>
  );
};

Playlist.propTypes = {};
Playlist.defaultProps = {};

export default Playlist;
