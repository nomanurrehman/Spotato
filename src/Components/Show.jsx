import React from 'react';

const Show = function show(props) {
  const {show} = props;
  return (
    <tr>
      <td className="align-middle">1</td>
      <td className="align-middle">
        <a className="btn btn-sm btn-success">{show.name}</a>
      </td>
      <td className="align-middle">{show.publisher}</td>
      <td className="align-middle">{show.total_episodes}</td>
    </tr>
  );
};

Show.propTypes = {};
Show.defaultProps = {};

export default Show;
