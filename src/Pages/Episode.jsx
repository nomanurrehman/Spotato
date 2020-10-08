import React from 'react';
import Navigation from '../Components/Navigation';
import EpisodeDetails from '../Components/EpisodeDetails';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Episode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      episode: {}
    }
  }

  async componentDidMount(){
    const episode = await Spotify.getEpisode(this.props.match.params.id);
    this.setState((state, props) => {
      return { isLoading: false, episode };
    });
  }

  render() {
    const { isLoading, episode } = this.state;
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
              <EpisodeDetails episode={episode} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

Episode.propTypes = {};
Episode.defaultProps = {};

export default Episode;
