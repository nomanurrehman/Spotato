import React from 'react';
import { Link } from 'react-router-dom';

const ShowEpisode = function showEpisode(props) {
  const {episode} = props;
  return (
    <tr>
      <td className="align-middle fit">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/episodes/${episode.id}`}>{episode.name}</Link>
      </td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success" href="http://www.google.com">Show Name Not Available</a>
      </td>
      <td className="align-middle">{episode.duration_ms}</td>
      <td className="align-middle">
        <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal">Add to Playlist</button>
      </td>
    </tr>
  );
};

ShowEpisode.propTypes = {};
ShowEpisode.defaultProps = {};

export default ShowEpisode;
