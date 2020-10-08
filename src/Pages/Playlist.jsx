import React from 'react';
import Navigation from '../Components/Navigation';
import PlaylistDetails from '../Components/PlaylistDetails';
import PlaylistTrackList from '../Components/PlaylistTrackList';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playlist: {}
    }
  }

  async componentDidMount(){
    const playlist = await Spotify.getPlaylist(this.props.match.params.id);
    this.setState((state, props) => {
      return { isLoading: false, playlist };
    });
  }

  render() {
    const { isLoading, playlist } = this.state;
    if(isLoading){
      // TODO: render a loader
      return null;
    }
    else {
      console.log(playlist);
      return (
        <React.Fragment>
          <Navigation />
          <div className="container">
            <div className="row">
              <PlaylistDetails playlist={playlist} />
              <PlaylistTrackList tracks={playlist.tracks} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

Playlist.propTypes = {};
Playlist.defaultProps = {};

export default Playlist;
