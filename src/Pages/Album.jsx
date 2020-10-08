import React from 'react';
import Navigation from '../Components/Navigation';
import AlbumDetails from '../Components/AlbumDetails';
import AlbumTrackList from '../Components/AlbumTrackList';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      album: {}
    }
  }

  async componentDidMount(){
    const album = await Spotify.getAlbum(this.props.match.params.id);
    this.setState((state, props) => {
      return { isLoading: false, album };
    });
  }

  render() {
    const { isLoading, album } = this.state;
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
              <AlbumDetails album={album} />
              <AlbumTrackList album={album} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

Album.propTypes = {};
Album.defaultProps = {};

export default Album;
