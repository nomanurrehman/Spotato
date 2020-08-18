import React from 'react';
import Playlist from './Playlist';

const PlaylistList = function playlistList() {
  return (
    <div className="col-lg-12 mb-3">
      <h3 className="text-success text-center mb-3">Playlists</h3>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Owner</th>
            <th scope="col">Total Tracks</th>
          </tr>
        </thead>
        <tbody>
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </tbody>
      </table>
    </div>
  );
};

PlaylistList.propTypes = {};
PlaylistList.defaultProps = {};

export default PlaylistList;
