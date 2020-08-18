import React from 'react';
import Episode from './Episode';

const EpisodeList = function episodeList() {
  return (
    <div className="col-lg-12 mb-3">
      <h3 className="text-success text-center mb-3">Episodes</h3>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Show</th>
            <th scope="col">Duration</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <Episode />
        </tbody>
      </table>
    </div>
  );
};

EpisodeList.propTypes = {};
EpisodeList.defaultProps = {};

export default EpisodeList;
