import React from 'react';

const AudioPreview = function audioPreview(props) {
  const { url } = props;
  return (
    <audio controls>
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

AudioPreview.propTypes = {};
AudioPreview.defaultProps = {};

export default AudioPreview;
