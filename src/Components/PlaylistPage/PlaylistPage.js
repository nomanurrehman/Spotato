import React from 'react';
import Playlist from './../Playlist/Playlist';
import TopNavigation from './../TopNavigation/TopNavigation';
import SideNavigation from './../SideNavigation/SideNavigation';
import Footer from './../Footer/Footer';

class PlaylistPage extends React.Component {
  constructor(props){
    super(props);
    let {playlistTracks} = this.props.location;
    this.state = {
      playlistTracks: playlistTracks
    }
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
              <Playlist playlistTracks={this.state.playlistTracks} />
            </div>
            {/* <Modal track={this.state.selectedTrack} onAdd={this.addTrack} /> */}
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
