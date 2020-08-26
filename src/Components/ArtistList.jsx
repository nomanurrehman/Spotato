import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = function artistList(props) {
  const {artists} = props;
  return (
    <div className="col-lg-12 mb-3">
      <h3 className="text-success text-center mb-3">Artists</h3>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
        { artists.items.map((artist) => <Artist key={artist.id} artist={artist} />) }
        </tbody>
      </table>
    </div>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
  }),
};

ArtistList.defaultProps = {
  artists: {}
};

export default ArtistList;
