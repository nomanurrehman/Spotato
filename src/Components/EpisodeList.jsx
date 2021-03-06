import React from 'react';
import PropTypes from 'prop-types';
import Episode from './Episode';

const EpisodeList = function episodeList(props) {
  const {episodes} = props;

  if(episodes.items.length) {
    return (
      <div className="col-lg-12 mb-3">
        <h3 className="text-success text-center mb-3">Episodes</h3>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { episodes.items.map((episode) => <Episode key={episode.id} episode={episode} />) }
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};

EpisodeList.propTypes = {};

EpisodeList.defaultProps = {
  episodes: {
    items: []
  }
};

export default EpisodeList;
