import React from 'react';
import Album from './Album';

const AlbumList = function albumList() {
  return (
    <div className="col-lg-12 mb-3">
      <h3 className="text-success text-center mb-3">Albums</h3>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Artist</th>
            <th scope="col">Total Tracks</th>
          </tr>
        </thead>
        <tbody>
          <Album />
          <Album />
          <Album />
          <Album />
          <Album />
        </tbody>
      </table>
    </div>
  );
};

AlbumList.propTypes = {};
AlbumList.defaultProps = {};

export default AlbumList;
