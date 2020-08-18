import React from 'react';

const Playlist = function playlist() {
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">Batman Soundtracks</a>
      </td>
      <td className="align-middle">Jonathan Luo</td>
      <td className="align-middle">174</td>
    </tr>
  );
};

Playlist.propTypes = {};
Playlist.defaultProps = {};

export default Playlist;
