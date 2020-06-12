import React from 'react';
import PropTypes from 'prop-types';


class Track extends React.Component {
  constructor(props){
    super(props);
    this.select = this.select.bind(this);
  }

  select(){
    this.props.onSelect(this.props.track);
  }

  render(){
    return (
      <tr>
        <td>{this.props.track.index}</td>
        <td>{this.props.track.name}</td>
        <td>{this.props.track.artist}</td>
        <td>
          <div className="btn-group">
            <button type="button" className="btn btn-block btn-success btn-sm" data-toggle="modal" data-target="#modal" onClick={this.select}>Add to Playlist</button>
          </div>
        </td>
      </tr>
    );
  }
}

Track.propTypes = {
  track: PropTypes.object,
  onSelect: PropTypes.func
};

Track.defaultProps = {
  track: {},
  onSelect: () => {}
};

export default Track;
