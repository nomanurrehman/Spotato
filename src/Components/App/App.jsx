import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Homepage/Homepage';
import PlaylistPage from '../PlaylistPage/PlaylistPage';

const App = function app() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/playlists" component={PlaylistPage} />
    </Switch>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
