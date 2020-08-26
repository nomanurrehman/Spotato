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
import searchResults from './searchResults';

const term = "batman";

const Home = function home() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container">
        <SearchForm />
        <div className="row">
          <SearchCaption term={term} />
          <AlbumList albums={searchResults.albums} />
          <ArtistList artists={searchResults.artists} />
          <TrackList tracks={searchResults.tracks} />
          <PlaylistList playlists={searchResults.playlists} />
          <ShowList shows={searchResults.shows} />
          <EpisodeList episodes={searchResults.episodes} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
