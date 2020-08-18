import React from 'react';
import Navigation from '../Components/Navigation';
import SearchForm from '../Components/SearchForm';
import SearchCaption from '../Components/SearchCaption';
import Navigation from '../Components/AlbumList';
import Navigation from '../Components/ArtistList';
import Navigation from '../Components/TrackList';
import Navigation from '../Components/PlaylistList';
import Navigation from '../Components/ShowList';
import Navigation from '../Components/EpisodeList';
import Navigation from '../Components/Footer';
import Footer from '../Components/Footer';

const Home = function home() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container">
        <SearchForm />
        <div className="row">
          <SearchCaption />
          <AlbumList />
          <ArtistList />
          <TrackList />
          <PlaylistList />
          <ShowList />
          <EpisodeList />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
