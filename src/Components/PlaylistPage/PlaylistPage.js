import React from 'react';
import Playlist from './../Playlist/Playlist';
import TopNavigation from './../TopNavigation/TopNavigation';
import SideNavigation from './../SideNavigation/SideNavigation';
import Modal from './../Modal/Modal';
import Footer from './../Footer/Footer';

class PlaylistPage extends React.Component {
  constructor(props){
    super(props);
    const {playlistTracks} = this.props.location;
    /*
     * TODO: When landing directly on a page,
     * React Router does not pass in data
     * and playlistTracks is set to undefined.
     * For now, the fix is to initialize with
     * an empty array in case no data is passed.
     */
    this.state = {
      playlistTracks: playlistTracks || [],
      selectedPlaylistTrack: {}
    }
    this.selectTrack = this.selectTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  selectTrack(track){
    this.setState({
      selectedPlaylistTrack: track
    });
  }

  removeTrack(track){
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack !== track)
    });
  }

  render(){
    return (
      <div className="wrapper">
        <TopNavigation/>

        <SideNavigation playlistTracks={this.state.playlistTracks} />

        <div className="content-wrapper">
          <div className="content-header">
          </div>
          <section className="content">
            <div className="container-fluid">
              <Playlist playlistTracks={this.state.playlistTracks} onSelect={this.selectTrack} />
            </div>
            <Modal track={this.state.selectedPlaylistTrack} action="remove" onAction={this.removeTrack} />
          </section>
        </div>

        <aside className="control-sidebar control-sidebar-dark">
        </aside>

        <Footer />
      </div>
    );
  }
}

export default PlaylistPage;
