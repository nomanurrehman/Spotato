import React from 'react';
import { Link } from 'react-router-dom';
import AudioPreview from './AudioPreview';

const EpisodeDetails = function episodeDetails(props) {
  const { episode } = props;
  console.log(episode);
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">{episode.name}</h1>
      </div>
      <div className="col-lg-4">
        <img className="w-100" src="https://i.scdn.co/image/e40c78da2cb88471a6b18b6cf5e3d3f3c48b428a" />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Description</td>
              <td>{episode.description}</td>
            </tr>
            <tr>
              <td className="align-middle">Duration</td>
              <td className="align-middle">{episode.duration_ms}</td>
            </tr>
            <tr>
              <td className="align-middle">Release Date</td>
              <td className="align-middle">{episode.release_date}</td>
            </tr>
            <tr>
              <td className="align-middle">Language(s)</td>
              <td className="align-middle">{episode.language}</td>
            </tr>
            <tr>
              <td className="align-middle">Show</td>
              <td className="align-middle">
                <Link className="btn btn-sm btn-success" to={`/shows/${episode.show.id}`}>{episode.show.name}</Link>
              </td>
            </tr>
            <tr>
              <td className="align-middle">Publisher</td>
              <td className="align-middle">{episode.show.publisher}</td>
            </tr>
            <tr>
              <td className="align-middle">Preview</td>
              <td className="align-middle">
                <AudioPreview url={episode.audio_preview_url} />
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

EpisodeDetails.propTypes = {};
EpisodeDetails.defaultProps = {};

export default EpisodeDetails;
