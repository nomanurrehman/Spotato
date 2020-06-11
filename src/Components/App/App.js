import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './../Homepage/Homepage';
import PlaylistPage from './../PlaylistPage/PlaylistPage';

class App extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/playlists" component={PlaylistPage} />
      </Switch>
    )
  }
}

export default App;
