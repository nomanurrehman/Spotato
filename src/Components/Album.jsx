import React from 'react';

const Album = function album() {
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success" href="track.html">Batman Begins</a>
      </td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success" href="track.html">James Newton Howard</a>
        <a className="btn btn-sm btn-success" href="track.html">Hans Zimmer</a>
      </td>
      <td>12</td>
    </tr>
  );
};

Album.propTypes = {};
Album.defaultProps = {};

export default Album;