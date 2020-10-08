import React from 'react';
import Navigation from '../Components/Navigation';
import TrackDetails from '../Components/TrackDetails';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      track: {}
    }
  }

  async componentDidMount(){
    const track = await Spotify.getTrack(this.props.match.params.id);
    this.setState((state, props) => {
      return { isLoading: false, track };
    });
  }

  render() {
    const { isLoading, track } = this.state;
    if(isLoading){
      // TODO: render a loader
      return null;
    }
    else {
      return (
        <React.Fragment>
          <Navigation />
          <div className="container">
            <div className="row">
              <TrackDetails track={track} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

Track.propTypes = {};
Track.defaultProps = {};

export default Track;
