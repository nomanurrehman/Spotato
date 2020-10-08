import React from 'react';
import { Link } from 'react-router-dom';

const Track = function track(props) {
  const {track, onAdd} = props;

  function handleClick(event){
    event.preventDefault();
    onAdd(track);
  }

  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/tracks/${track.id}`}>{track.name}</Link>
      </td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/albums/${track.album.id}`}>{track.album.name}</Link>
      </td>
      <td className="align-middle">
        { track.album.artists.map((artist) => <Link key={artist.id} className="btn btn-sm btn-success mr-2" to={`/artists/${artist.id}`}>{artist.name}</Link>) }
      </td> 
      <td className="align-middle">
        <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal" onClick={handleClick}>Add to Playlist</button>
      </td>
    </tr>
  );
};

Track.propTypes = {};
Track.defaultProps = {};

export default Track;
