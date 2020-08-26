import React from 'react';

const Episode = function episode(props) {
  const {episode} = props;
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">{episode.name}</a>
      </td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">Show Name Not Available</a>
      </td>
      <td className="align-middle">{episode.duration_ms}</td>
      <td className="align-middle">
        <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal">Add to Playlist</button>
      </td>
    </tr>
  );
};

Episode.propTypes = {};
Episode.defaultProps = {};

export default Episode;
