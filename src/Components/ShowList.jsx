import React from 'react';
import PropTypes from 'prop-types';
import Show from './Show';

const ShowList = function showList(props) {
  const {shows} = props;

  if(shows.items.length) {
    return (
      <div className="col-lg-12 mb-3">
        <h3 className="text-success text-center mb-3">Shows</h3>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Publisher</th>
              <th scope="col">Total Episodes</th>
            </tr>
          </thead>
          <tbody>
            { shows.items.map((show) => <Show key={show.id} show={show} />) }
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

ShowList.propTypes = {};

ShowList.defaultProps = {
  shows: {
    items: []
  }
};

export default ShowList;
