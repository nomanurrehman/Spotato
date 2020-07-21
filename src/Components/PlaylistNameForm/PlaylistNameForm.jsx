import React from 'react';
import PropTypes from 'prop-types';

class PlaylistNameForm extends React.Component {
  render() {
    return (
      <form className="mt-3 mb-3">
        <div className="form-row">
          <div className="col-lg-9">
            <input type="text" className="form-control" placeholder="Playlist Name" />
          </div>
          <div className="col-lg-3">
            <button type="button" className="btn btn-block btn-success">Save Playlist</button>
          </div>
        </div>
      </form>
    )
  }
}

PlaylistNameForm.propTypes = {};
PlaylistNameForm.defaultProps = {};

export default PlaylistNameForm;