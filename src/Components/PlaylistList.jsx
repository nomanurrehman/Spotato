import React from 'react';
import PropTypes from 'prop-types';
import Playlist from './Playlist';

const PlaylistList = function playlistList(props) {
  const {playlists} = props;

  if(playlists.items.length) {
    return (
      <div className="col-lg-12 mb-3">
        <h3 className="text-success text-center mb-3">Playlists</h3>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Owner</th>
              <th scope="col">Handle</th>
              <th scope="col">Total Tracks</th>
            </tr>
          </thead>
          <tbody>
            { playlists.items.map((playlist) => <Playlist key={playlist.id} playlist={playlist} />) }
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};

// AlbumList.propTypes = {
//   albums: PropTypes.shape({
//     items: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       artist: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string
//       })),
//       total_tracks: PropTypes.number,
//     })),
//   }),
// };

PlaylistList.defaultProps = {
  playlists: {
    items: []
  }
};

export default PlaylistList;
