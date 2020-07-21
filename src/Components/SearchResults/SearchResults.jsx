import React from 'react';
import PropTypes from 'prop-types';
import SearchCaption from '../SearchCaption/SearchCaption';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  /*
   * If there are no tracks to display,
   * notify user else show tracks.
   */
  displayResults() {
    const { searchResults, onSelect } = this.props;
    if (searchResults.length > 0) {
      return <TrackList tracks={searchResults} onSelect={onSelect} buttonText="Add to Playlist" />;
    }
    return null;
  }

  render() {
    const { term } = this.props;
    return (
      <div className="row">
        <div className="col-lg-12">
          <SearchCaption term={term} />
          { this.displayResults() }
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
