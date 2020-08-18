import React from 'react';

const SearchForm = function searchForm() {
  return (
    <form className="mb-3">
      <div className="d-flex align-items-center form-row">
        <div className="form-group col-md-4">
          <input className="form-control" type="search" placeholder="Keywords" />
        </div>
        <div className="form-group col-md-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="artist" />
            <label className="form-check-label">Artist</label>
          </div>
        </div>
        <div className="form-group col-md-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="album" />
            <label className="form-check-label">Album</label>
          </div>
        </div>
        <div className="form-group col-md-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="track" />
            <label className="form-check-label">Track</label>
          </div>
        </div>
        <div className="form-group col-md-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="playlist" />
            <label className="form-check-label">Playlist</label>
          </div>
        </div>
        <div className="form-group col-md-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="show" />
            <label className="form-check-label">Show</label>
          </div>
        </div>
        <div className="form-group col-md-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="episode" />
            <label className="form-check-label">Episode</label>
          </div>
        </div>
        <div className="form-group col-md-2">
          <button className="btn btn-success w-100" type="button">Search</button>
        </div> 
      </div>
    </form>
  );
};

SearchForm.propTypes = {};
SearchForm.defaultProps = {};

export default SearchForm;
