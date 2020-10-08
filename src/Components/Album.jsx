import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Album = function album(props) {
  const {album} = props;

  function shortenName(name){
    if(name.length > 50){
      return name.substr(0, 50) + '...';
    }
    return name;
  }

  return (
    <tr>
      <td className="align-middle fit">1</td>
      <td className="align-middle fit">
        <Link className="btn btn-sm btn-success" to={`/albums/${album.id}`}>{shortenName(album.name)}</Link>
      </td>
      <td className="align-middle">
        { album.artists.map((artist) => <Link className="btn btn-sm btn-success mr-2" to={`/artists/${artist.id}`}>{artist.name}</Link>) }
      </td>
      <td>{album.total_tracks}</td>
    </tr>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    total_tracks: PropTypes.number,
  }),
};

Album.defaultProps = {
  album: {}
};

export default Album;
