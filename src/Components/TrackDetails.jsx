import React from 'react';

const TrackDetails = function trackDetails() {
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">Track Name</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src="https://i.scdn.co/image/ab67616d0000b2730fd58561f282ef69f884071f" />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Artist(s)</td>
              <td className="align-middle">
                <a className="btn btn-sm btn-success">Artist 1</a>
                <a className="btn btn-sm btn-success">Artist 2</a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">Album</td>
              <td className="align-middle">
                <a className="btn btn-sm btn-success">Cool Album Name</a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">Duration</td>
              <td className="align-middle">03:03:10</td>
            </tr>
            <tr>
              <td className="align-middle">Preview</td>
              <td className="align-middle">
                <audio controls>
                  <source src="https://p.scdn.co/mp3-preview/40a4c11ce241a982819a1f69eb868ae41e50dae0?cid=774b29d4f13844c495f206cafdad9c86" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
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

TrackDetails.propTypes = {};
TrackDetails.defaultProps = {};

export default TrackDetails;
