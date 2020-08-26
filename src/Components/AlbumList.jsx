import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumList = function albumList(props) {
  const {albums} = props;
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
          { albums.items.map((album) => <Album key={album.id} album={album} />) }
        </tbody>
      </table>
    </div>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      artist: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
      })),
      total_tracks: PropTypes.number,
    })),
  }),
};

AlbumList.defaultProps = {
  albums: {}
};

export default AlbumList;
