import React from 'react';
import Show from './Show';

const ShowList = function showList() {
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
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
        </tbody>
      </table>
    </div>
  );
};

ShowList.propTypes = {};
ShowList.defaultProps = {};

export default ShowList;
