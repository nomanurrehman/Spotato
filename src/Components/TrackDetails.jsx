import React from 'react';
import { Link } from 'react-router-dom';
import AudioPreview from './AudioPreview';

const TrackDetails = function trackDetails(props) {
  const {name, album, artists, duration_ms, preview_url} = props.track;
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">{name}</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src={album.images[0].url} />
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
              <td className="align-middle">Album</td>
              <td className="align-middle">
                <Link className="btn btn-sm btn-success" to={`/albums/${album.id}`}>{album.name}</Link>
              </td>
            </tr>
            <tr>
              <td className="align-middle">Duration</td>
              <td className="align-middle">{duration_ms}</td>
            </tr>
            <tr>
              <td className="align-middle">Preview</td>
              <td className="align-middle">
                <AudioPreview url={preview_url} />
              </td>
            </tr>
            <tr>
              <td className="align-middle">Actions</td>
              <td className="align-middle">
                <a className="btn btn-sm btn-success">Add to Playlist</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

TrackDetails.propTypes = {
  track: {}
};

TrackDetails.defaultProps = {
  track: {}
};

export default TrackDetails;
