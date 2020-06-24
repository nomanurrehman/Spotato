import React from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  /*
   * If nothing has been searched yet,
   * notify user to search else
   * show search term.
   */
  displayTerm() {
    const { term } = this.props;
    if (term.length !== 0) {
      return `Search results for "${term}"`;
    }
    return "Let's get rolling with the searchin...";
  }

  /*
   * If there are no tracks to display,
   * notify user else show tracks.
   */
  displayResults() {
    const { searchResults, onSelect } = this.props;
    if (searchResults.length > 0) {
      return <TrackList tracks={searchResults} onSelect={onSelect} buttonText="Add to Playlist" />;
    }
    return 'No tracks to display';
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{ this.displayTerm() }</h3>
            </div>
            <div className="card-body">{ this.displayResults() }</div>
          </div>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  term: PropTypes.string,
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  })),
  onSelect: PropTypes.func,
};

SearchResults.defaultProps = {
  term: '',
  searchResults: [],
  onSelect: () => {},
};

export default SearchResults;
