import React from 'react';
import PropTypes from 'prop-types'

const Artist = function artist(props) {
  const {artist} = props;
  return (
    <tr>
      <td className="align-middle fit">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">{artist.name}</a>
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
