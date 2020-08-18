import React from 'react';
import Artist from './Artist';

const ArtistList = function artistList() {
  return (
    <div className="col-lg-12 mb-3">
      <h3 className="text-success text-center mb-3">Artists</h3>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />
        </tbody>
      </table>
    </div>
  );
};

ArtistList.propTypes = {};
ArtistList.defaultProps = {};

export default ArtistList;
