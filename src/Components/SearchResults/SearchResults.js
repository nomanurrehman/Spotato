import React from 'react';
import PropTypes from 'prop-types';
import TrackList from './../TrackList/TrackList';

class SearchResults extends React.Component {

  /*
   * If nothing has been searched yet,
   * notify user to search else
   * show search term.
   */
  displayTerm(){
    if(this.props.term.length !== 0){
      return `Search results for "${this.props.term}"`;
    } else {
      return "Let's get rolling with the searchin..."
    }
  }

  /*
   * If there are no tracks to display,
   * notify user else show tracks.
   */
  displayResults(){
    if(this.props.searchResults.length > 0){
      return <TrackList tracks={this.props.searchResults} onSelect={this.props.onSelect} buttonText="Add to Playlist" />;
    } else {
      return 'No tracks to display';
    }
  }

  render(){
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
  searchResults: PropTypes.array,
  onSelect: PropTypes.func
};

SearchResults.defaultProps = {
  term: '',
  searchResults: [],
  onSelect: () => {}
};

export default SearchResults;
