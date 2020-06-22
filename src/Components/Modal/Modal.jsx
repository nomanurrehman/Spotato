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
      <div className="modal fade show" id="modal" aria-modal="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Confirmation</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.getMessage()}</p>
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.performAction}>Yes</button>
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
