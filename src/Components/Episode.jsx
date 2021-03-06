import React from 'react';
import { Link } from 'react-router-dom';

const Episode = function episode(props) {
  const {episode} = props;
  return (
    <tr>
      <td className="align-middle fit">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/episodes/${episode.id}`}>{episode.name}</Link>
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
