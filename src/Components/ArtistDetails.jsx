import React from 'react';

const ArtistDetails = function artistDetails() {
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">Artist Name</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src="https://i.scdn.co/image/f8737f6fda048b45efe91f81c2bda2b601ae689c" />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Genre(s)</td>
              <td className="align-middle">hiphop, pop</td>
            </tr>
            <tr>
              <td className="align-middle">Follower(s)</td>
              <td className="align-middle">5673</td>
            </tr>
            <tr>
              <td className="align-middle">Popularity</td>
              <td className="align-middle">95</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

ArtistDetails.propTypes = {};
ArtistDetails.defaultProps = {};

export default ArtistDetails;
