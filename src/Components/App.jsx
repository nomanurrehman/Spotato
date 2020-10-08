import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Album from '../Pages/Album';
import Track from '../Pages/Track';
import Artist from '../Pages/Artist';
import Playlist from '../Pages/Playlist';
import Show from '../Pages/Show';
import Episode from '../Pages/Episode';
import Spotify from '../util/Spotify';
// import PlaylistPage from '../PlaylistPage/PlaylistPage';

class App extends React.Component {
  componentDidMount() {
    Spotify.getAccessToken();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/albums/:id" component={Album} />
        <Route path="/tracks/:id" component={Track} />
        <Route path="/artists/:id" component={Artist} />
        <Route path="/playlists/:id" component={Playlist} />
        <Route path="/shows/:id" component={Show} />
        <Route path="/episodes/:id" component={Episode} />
        {/* <Route path="/playlists" component={PlaylistPage} /> */}
      </Switch>
    );
  }
};

App.propTypes = {};
App.defaultProps = {};

export default App;
