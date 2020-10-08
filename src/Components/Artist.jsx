import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = function artist(props) {
  const {artist} = props;
  return (
    <tr>
      <td className="align-middle fit">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/artists/${artist.id}`}>{artist.name}</Link>
      </td>
    </tr>
  );
};

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string
  })
};

Artist.defaultProps = {
  artist: {}
};

export default Artist;
