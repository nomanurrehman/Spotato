import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumDetails = function albumDetails(props) {
  const {name, images, artists, label, release_date, total_tracks, popularity} = props.album;
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">{name}</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src={images[0].url} />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Artist(s)</td>
              <td className="align-middle">
                { artists.map((artist) => <Link key={artist.id} className="btn btn-sm btn-success mr-2" to={`/artists/${artist.id}`}>{artist.name}</Link>) }
              </td>
            </tr>
            <tr>
              <td className="align-middle">Label</td>
              <td className="align-middle">{label}</td>
            </tr>
            <tr>
              <td className="align-middle">Release Date</td>
              <td className="align-middle">{release_date}</td>
            </tr>
            <tr>
              <td className="align-middle">Total Tracks</td>
              <td className="align-middle">{total_tracks}</td>
            </tr>
            <tr>
              <td className="align-middle">Popularity</td>
              <td className="align-middle">{popularity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

AlbumDetails.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number
    })),
    artists: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
    label: PropTypes.string,
    release_date: PropTypes.string,
    total_tracks: PropTypes.number,
    populatiry: PropTypes.number
  }),
};

AlbumDetails.defaultProps = {
  album: {
    artists: []
  }
};

export default AlbumDetails;
