import React from 'react';

const PlaylistDetails = function playlistDetails() {
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">Playlist Name</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src="https://i.scdn.co/image/ab67706c0000bebb325d976c28d9876a93fd3564" />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Owner</td>
              <td className="align-middle">Yan Quenick</td>
              <a className="btn btn-sm btn-success" href="artist.html">Artist 2</a>
            </tr>
            <tr>
              <td className="align-middle">Total Tracks</td>
              <td className="align-middle">12</td>
            </tr>
            <tr>
              <td className="align-middle">Followers</td>
              <td className="align-middle">94</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

PlaylistDetails.propTypes = {};
PlaylistDetails.defaultProps = {};

export default PlaylistDetails;
