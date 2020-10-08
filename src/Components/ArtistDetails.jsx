import React from 'react';
import PillBadge from './PillBadge';

const ArtistDetails = function artistDetails(props) {
  const {name, images, genres, followers, popularity} = props.artist;
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
              <td className="align-middle">Genre(s)</td>
              <td className="align-middle">
                { genres.map((genre, index) => <PillBadge key={index}>{genre}</PillBadge>)}
              </td>
            </tr>
            <tr>
              <td className="align-middle">Follower(s)</td>
              <td className="align-middle">{followers.total}</td>
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

ArtistDetails.propTypes = {
  artist: {}
};

ArtistDetails.defaultProps = {
  artist: {}
};

export default ArtistDetails;
