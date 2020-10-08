import React from 'react';
import { Link } from 'react-router-dom';

const AlbumTrack = function albumTrack(props) {
  const { album, track } = props;

  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/tracks/${track.id}`}>{track.name}</Link>
      </td>
      <td className="align-middle">
        { track.artists.map((artist) => <Link key={artist.id} className="btn btn-sm btn-success mr-2" to={`/artists/${artist.id}`}>{artist.name}</Link>) }
      </td> 
      <td className="align-middle">
        <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal">Add to Playlist</button>
      </td>
    </tr>
  );
};

AlbumTrack.propTypes = {};
AlbumTrack.defaultProps = {};

export default AlbumTrack;
