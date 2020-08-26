import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
// import PlaylistPage from '../PlaylistPage/PlaylistPage';

const App = function app() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/playlists" component={PlaylistPage} /> */}
    </Switch>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
