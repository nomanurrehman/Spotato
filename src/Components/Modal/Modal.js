import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.performAction = this.performAction.bind(this);
    console.log(props);
  }

  getMessage(){
    const message = {
      add: `Are you sure you wish to add ${this.props.track.name} by ${this.props.track.artist} to the current playlist?`,
      remove: `Are you sure you wish to remove ${this.props.track.name} by ${this.props.track.artist} from the current playlist?`,
    }
    return message[this.props.action];
  }

  performAction(){
    this.props.onAction(this.props.track);
  }

  render(){
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
  track: PropTypes.object,
  action: PropTypes.string,
  onAction: PropTypes.func,
};

Modal.defaultProps = {
  track: {},
  action: '',
  onAction: () => {}
};

export default Modal;
