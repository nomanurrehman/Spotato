import React from 'react';
import { Link } from 'react-router-dom';

const Playlist = function playlist(props) {
  const {playlist} = props;
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
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
