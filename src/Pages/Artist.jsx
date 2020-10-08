import React from 'react';
import Navigation from '../Components/Navigation';
import ArtistDetails from '../Components/ArtistDetails';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      artist: {}
    }
  }

  async componentDidMount(){
    const artist = await Spotify.getArtist(this.props.match.params.id);
    this.setState((state, props) => {
      return { isLoading: false, artist };
    });
  }

  render() {
    const { isLoading, artist } = this.state;
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
              <ArtistDetails artist={artist} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

Artist.propTypes = {};
Artist.defaultProps = {};

export default Artist;
