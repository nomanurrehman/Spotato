import React from 'react';
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
        <a className="btn btn-sm btn-success" href="track.html">{shortenName(album.name)}</a>
      </td>
      <td className="align-middle">
        { album.artists.map((artist) => <a key={artist.id} className="btn btn-sm btn-success mr-2" href="track.html">{artist.name}</a>) }
      </td>
      <td>{album.total_tracks}</td>
    </tr>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
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
