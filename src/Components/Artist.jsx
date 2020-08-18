import React from 'react';

const Artist = function artist() {
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">Hans Zimmer</a>
      </td>
    </tr>
  );
};

Artist.propTypes = {};
Artist.defaultProps = {};

export default Artist;
