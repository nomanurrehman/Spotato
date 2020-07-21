import React from 'react';
import PropTypes from 'prop-types';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  select() {
    const { track, onSelect } = this.props;
    onSelect(track);
  }

  render() {
    const {
      track,
      buttonText,
    } = this.props;
    return (
      <tr>
        <td className="align-middle">{track.index}</td>
        <td className="align-middle">{track.name}</td>
        <td className="align-middle">{track.artist}</td>
        <td>
          <button type="button" className="btn btn-sm btn-success" data-toggle="modal" data-target="#modal" onClick={this.select}>{buttonText}</button>
        </td>
      </tr>
    );
  }
}

Track.propTypes = {
  buttonText: PropTypes.string,
  track: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    uri: PropTypes.string,
    index: PropTypes.number,
  }),
  onSelect: PropTypes.func,
};

Track.defaultProps = {
  buttonText: '',
  track: {},
  onSelect: () => {},
};

export default Track;
