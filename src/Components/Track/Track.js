import React from 'react';
import PropTypes from 'prop-types';


class Track extends React.Component {
  constructor(props){
    super(props);
    this.selectTrack = this.selectTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  selectTrack(){
    this.props.onSelect(this.props.track);
  }

  removeTrack(){
    this.props.onRemove(this.props.track);
  }

  render(){
    return (
      <tr>
        <td>{this.props.track.index}</td>
        <td>{this.props.track.name}</td>
        <td>{this.props.track.artist}</td>
        <td>
          <div className="btn-group">
            {/* <button type="button" className="btn btn-success" onClick={this.selectTrack}>+</button> */}
            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal" onClick={this.selectTrack}>
              Launch Default Modal
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

Track.propTypes = {
  track: PropTypes.object,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};

Track.defaultProps = {
  tracks: {},
  onAdd: () => {},
  onRemove: () => {}
};

export default Track;
