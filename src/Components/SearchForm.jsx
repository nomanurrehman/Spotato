import React from 'react';
import PropTypes from 'prop-types';

// TODO: Add form validation

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '', // the search term
      types: [] // the type of items to search
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value.trim(),
    });
  }

  handleTypeChange(event) {
    const type = event.target.value;
    /*
     * If type is checked then add it
     * else remove it from types to search
     */
    if(event.target.checked){
      this.setState((state, props) => {
        let newTypes = [...state.types];
        newTypes.push(type);
        return {types: newTypes};
      });
    } else {
      this.setState((state, props) => {
        let newTypes = [...state.types];
        newTypes = newTypes.filter(t => t !== type);
        return {types: newTypes};
      });
    }
  }

  search() {
    const { onSearch } = this.props;
    onSearch(this.state);
  }

  render() {
    return (
      <form className="mb-3">
        <div className="d-flex align-items-center form-row">
          <div className="form-group col-md-4">
            <input className="form-control" type="search" placeholder="Keywords" onChange={this.handleTermChange} />
          </div>
          <div className="form-group col-md-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="artist" onChange={this.handleTypeChange} />
              <label className="form-check-label">Artist</label>
            </div>
          </div>
          <div className="form-group col-md-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="album" onChange={this.handleTypeChange} />
              <label className="form-check-label">Album</label>
            </div>
          </div>
          <div className="form-group col-md-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="track" onChange={this.handleTypeChange} />
              <label className="form-check-label">Track</label>
            </div>
          </div>
          <div className="form-group col-md-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="playlist" onChange={this.handleTypeChange} />
              <label className="form-check-label">Playlist</label>
            </div>
          </div>
          <div className="form-group col-md-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="show" onChange={this.handleTypeChange} />
              <label className="form-check-label">Show</label>
            </div>
          </div>
          <div className="form-group col-md-1">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="episode" onChange={this.handleTypeChange} />
              <label className="form-check-label">Episode</label>
            </div>
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-success w-100" type="button" onClick={this.search}>Search</button>
          </div> 
        </div>
      </form>
    );
  }
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  onSearch: () => {},
};

export default SearchForm;
