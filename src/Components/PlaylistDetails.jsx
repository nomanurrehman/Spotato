import React from 'react';

const PlaylistDetails = function playlistDetails(props) {
  const { name, owner, followers, images, tracks } = props.playlist;
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
              <td className="align-middle">Owner</td>
              <td className="align-middle">{owner.display_name}</td>
            </tr>
            <tr>
              <td className="align-middle">Total Tracks</td>
              <td className="align-middle">{tracks.total}</td>
            </tr>
            <tr>
              <td className="align-middle">Followers</td>
              <td className="align-middle">{followers.total}</td>
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
