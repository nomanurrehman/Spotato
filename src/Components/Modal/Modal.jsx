import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.performAction = this.performAction.bind(this);
  }

  getMessage() {
    const {
      track,
      action,
    } = this.props;
    const message = {
      add: `Are you sure you wish to add ${track.name} by ${track.artist} to the current playlist?`,
      remove: `Are you sure you wish to remove ${track.name} by ${track.artist} from the current playlist?`,
    };
    return message[action];
  }

  performAction() {
    const {
      track,
      onAction,
    } = this.props;
    onAction(track);
  }

  render() {
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
              {this.getMessage()}
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

Modal.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  }),
  action: PropTypes.string,
  onAction: PropTypes.func,
};

Modal.defaultProps = {
  track: {},
  action: '',
  onAction: () => {},
};

export default Modal;
