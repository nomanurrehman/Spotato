import React from 'react';
import { Link } from 'react-router-dom';

const Show = function show(props) {
  const {show} = props;
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <Link className="btn btn-sm btn-success" to={`/shows/${show.id}`}>{show.name}</Link>
      </td>
      <td className="align-middle">{show.publisher}</td>
      <td className="align-middle">{show.total_episodes}</td>
    </tr>
  );
};

Show.propTypes = {};
Show.defaultProps = {};

export default Show;
