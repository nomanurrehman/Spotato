import React from 'react';
import Navigation from '../Components/Navigation';
import SearchForm from '../Components/SearchForm';
import SearchCaption from '../Components/SearchCaption';
import AlbumList from '../Components/AlbumList';
import ArtistList from '../Components/ArtistList';
import TrackList from '../Components/TrackList';
import PlaylistList from '../Components/PlaylistList';
import ShowList from '../Components/ShowList';
import EpisodeList from '../Components/EpisodeList';
import Footer from '../Components/Footer';
import Spotify from '../util/Spotify';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      searchResults: {},
      playlist: []
    }
    this.search = this.search.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
  }

  async search(params){
    const {term, types} = params;
    const searchResults = await Spotify.search(term, types.join(","));
    this.setState((state, props) => {
      return {
        term: term,
        searchResults: searchResults
      };
    });
  }

  addToPlaylist(item){
    console.log(item);
  }

  render() {
    const {term, searchResults} = this.state;
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          <SearchForm onSearch={this.search} />
          <div className="row">
            <SearchCaption term={term} />
            <ArtistList artists={searchResults.artists} onAdd={this.addToPlaylist} />
            <AlbumList albums={searchResults.albums} onAdd={this.addToPlaylist} />
            <TrackList tracks={searchResults.tracks} onAdd={this.addToPlaylist} />
            <PlaylistList playlists={searchResults.playlists} onAdd={this.addToPlaylist} />
            <ShowList shows={searchResults.shows} onAdd={this.addToPlaylist} />
            <EpisodeList episodes={searchResults.episodes} onAdd={this.addToPlaylist} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
