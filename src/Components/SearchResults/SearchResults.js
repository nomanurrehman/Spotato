import React from 'react';
import PropTypes from 'prop-types';
import TrackList from './../TrackList/TrackList';

class SearchResults extends React.Component {

  /*
   * If nothing has been searched yet,
   * notify user to search else
   * show search results with search term.
   */
  getTitle(term){
    if(Boolean(term)){
      return `Search results for "${term}"`;
    } else {
      return "Let's get rolling with the searchin..."
    }
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{ this.getTitle(this.props.term) }</h3>
            </div>
            <div className="card-body p-0">
              <TrackList tracks={this.props.searchResults} onSelect={this.props.onSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  term: PropTypes.string,
  searchResults: PropTypes.array,
  confirmTrack: PropTypes.func
};

SearchResults.defaultProps = {
  term: '',
  searchResults: [],
  confirmTrack: () => {}
};

export default SearchResults;
