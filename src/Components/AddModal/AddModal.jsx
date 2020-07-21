import React from 'react';
import PropTypes from 'prop-types';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.performAction = this.performAction.bind(this);
  }

  performAction() {
    const {
      track,
      onAction,
    } = this.props;
    onAction(track);
  }

  render() {
    const { track } = this.props;
    return (
      <div className="modal fade" id="modal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add to Playlist</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you wish to add {track.name} by {track.artist} to the current playlist?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-sm btn-success" data-dismiss="modal" onClick={this.performAction}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddModal.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  }),
  onAction: PropTypes.func,
};

AddModal.defaultProps = {
  track: {},
  onAction: () => {},
};

export default AddModal;
