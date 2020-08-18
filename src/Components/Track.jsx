import React from 'react';

const Track = function track() {
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">Kiss from a rose</a>
      </td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">Batman Forever</a>
      </td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">Seal</a>
      </td>
      <td className="align-middle">
        <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal">Add to Playlist</button>
      </td>
    </tr>
  );
};

Track.propTypes = {};
Track.defaultProps = {};

export default Track;
