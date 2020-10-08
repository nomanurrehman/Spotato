import React from 'react';
import Navigation from '../Components/Navigation';
import ShowDetails from '../Components/ShowDetails';
import EpisodeList from '../Components/EpisodeList';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      show: {}
    }
  }

  async componentDidMount(){
    const show = await Spotify.getShow(this.props.match.params.id);
    this.setState((state, props) => {
      return { isLoading: false, show };
    });
  }

  render() {
    const { isLoading, show } = this.state;
    if(isLoading){
      // TODO: render a loader
      return null;
    }
    else {
      console.log(show);
      return (
        <React.Fragment>
          <Navigation />
          <div className="container">
            <div className="row">
              <ShowDetails show={show} />
              <EpisodeList episodes={show.episodes} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

Show.propTypes = {};
Show.defaultProps = {};

export default Show;
