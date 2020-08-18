import React from 'react';

const ShowDetails = function showDetails() {
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">Album Name</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src="https://i.scdn.co/image/ab67616d0000b273f4c962d358de7ed4548d00b3" />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Artist(s)</td>
              <td className="align-middle">
                <a className="btn btn-sm btn-success" href="artist.html">Artist 1</a>
                <a className="btn btn-sm btn-success" href="artist.html">Artist 2</a>
              </td>
            </tr>
            <tr>
              <td className="align-middle">Label</td>
              <td className="align-middle">Watertower Music</td>
            </tr>
            <tr>
              <td className="align-middle">Release Date</td>
              <td className="align-middle">2020-09-02</td>
            </tr>
            <tr>
              <td className="align-middle">Total Tracks</td>
              <td className="align-middle">12</td>
            </tr>
            <tr>
              <td className="align-middle">Popularity</td>
              <td className="align-middle">94</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

ShowDetails.propTypes = {};
ShowDetails.defaultProps = {};

export default ShowDetails;
