import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import TopNavigation from '../TopNavigation/TopNavigation';
import SideNavigation from '../SideNavigation/SideNavigation';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';
import Spotify from '../../util/Spotify';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      searchResults: [],
      playlistTracks: [],
      selectedTrack: {},
    };
    this.addTrack = this.addTrack.bind(this);
    this.search = this.search.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
  }

  componentDidMount() {
    Spotify.getAccessToken();
  }

  async search(term) {
    const searchResults = await Spotify.search(term);
    // const { playlistTracks } = this.state;
    // const searchResults = searchedTracks.filter(
    //   (searchedTrack) => !playlistTracks.some(
    //     (playlistTrack) => playlistTrack.id === searchedTrack.id
    //   )
    // );
    this.setState({
      term,
      searchResults,
    });
  }

  selectTrack(track) {
    this.setState({
      selectedTrack: track,
    });
  }

  addTrack(track) {
    const { playlistTracks } = this.state;
    if (!playlistTracks.includes(track)) {
      playlistTracks.push(track);
      const searchResults = this.removeTrackFromSearchResults(track);
      this.setState({
        playlistTracks,
        searchResults,
      });
    }
  }

  removeTrackFromSearchResults(track) {
    const { searchResults } = this.state;
    return searchResults.filter((searchResult) => searchResult.id !== track.id);
  }

  render() {
    const {
      term, playlistTracks, searchResults, selectedTrack,
    } = this.state;
    return (
      <div className="wrapper">
        <TopNavigation searchTerm={term} onSearch={this.search} />

        <SideNavigation playlistTracks={playlistTracks} />

        <div className="content-wrapper">
          <div className="content-header" />
          <section className="content">
            <div className="container-fluid">
              <SearchResults term={term} searchResults={searchResults} onSelect={this.selectTrack} />
            </div>
            <Modal track={selectedTrack} action="add" onAction={this.addTrack} />
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
