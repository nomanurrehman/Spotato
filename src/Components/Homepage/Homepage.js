import React from 'react';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';
import TopNavigation from './../TopNavigation/TopNavigation';
import SideNavigation from './../SideNavigation/SideNavigation';
import Modal from './../Modal/Modal';
import Footer from './../Footer/Footer';
import Spotify from './../../util/Spotify';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      searchResults: [],
      playlistName: 'My playlist',
      playlistTracks: [],
      selectedTrack: {}
    };
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
  }

  componentDidMount(){
    Spotify.getAccessToken();
  }

  async search(term){
    const searchedTracks = await Spotify.search(term);
    const searchResults = searchedTracks.filter(searchedTrack => !this.state.playlistTracks.some(playlistTrack => playlistTrack.id === searchedTrack.id));
    this.setState({
      term: term,
      searchResults: searchResults
    });
  }

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    });
  }

  selectTrack(track){
    this.setState({
      selectedTrack: track
    });
  }

  addTrack(track){
    if ( !this.state.playlistTracks.includes(track) ){
      const playlistTracks = this.state.playlistTracks.concat([track]);
      const searchResults = this.state.searchResults.filter(searchResult => searchResult.id !== track.id);
      this.setState({
        playlistTracks: playlistTracks,
        searchResults: searchResults
      });
    }
  }

  removeTrack(track){
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack !== track)
    });
  }

  savePlaylist(){
    Spotify.savePlaylist(this.state.playlistName, this.state.playlistTracks);
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
    });
  }

  render(){
    return (
      <div className="wrapper">
        <TopNavigation searchTerm={this.state.term} onSearch={this.search} />

        <SideNavigation playlistTracks={this.state.playlistTracks} />

        <div className="content-wrapper">
          <div className="content-header">
          </div>
          <section className="content">
            <div className="container-fluid">
              <SearchResults term={this.state.term} searchResults={this.state.searchResults} onSelect={this.selectTrack} />
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
            <Modal track={this.state.selectedTrack} onAdd={this.addTrack} />
          </section>
        </div>

        <aside className="control-sidebar control-sidebar-dark">
        </aside>

        <Footer />
      </div>
    );
  }
}

export default Homepage;
