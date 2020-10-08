import React from 'react';

const ShowDetails = function showDetails(props) {
  const { show } = props;
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">{show.name}</h1>
      </div>
      <div className="col-lg-4 mb-3">
        <img className="w-100" src={show.images[0].url} />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Description</td>
              <td className="align-middle">{show.description}</td>
            </tr>
            <tr>
              <td className="align-middle">Publisher</td>
              <td className="align-middle">{show.publisher}</td>
            </tr>
            <tr>
              <td className="align-middle">Total Episode(s)</td>
              <td className="align-middle">{show.total_episodes}</td>
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
