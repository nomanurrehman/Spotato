const clientId = '10b5379029414a3fa797942564068969';
const redirectUri = 'http://localhost:3000';
let accessToken = '';

const Spotify = {
  getAccessToken: function(){
    if(accessToken){
      return accessToken;
    } else {
      // const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      // accessToken = window.location.href.match(/access_token=([^&]*)/);
      const expiresIn = window.location.href.match(/(?<=expires_in=)([^&]*)/);
      accessToken = window.location.href.match(/(?<=access_token=)([^&]*)/);
      if(accessToken && expiresIn){
        //window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      } else {
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`);
      }
    }
  },
  search: async function(term){
    const accessToken = this.getAccessToken();
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    const response = await fetch(searchUrl, headers);
    const jsonResponse = await response.json();
    return jsonResponse.tracks.items.map((item, index) => {
      return {id: item.id, name: item.name, artist: item.artists[0].name, album: item.album.name, uri: item.uri, index: ++index};
    });
  },
  savePlaylist: async function(name, tracks){
    if(name && tracks){
      let response, jsonResponse;
      const headers = {method: 'POST', headers: {Authorization: `Bearer ${accessToken}`}};
      
      jsonResponse = await this.getUserProfile();
      
      const createPlaylistUrl = `https://api.spotify.com/v1/users/${jsonResponse.id}/playlists`;
      response = await fetch(createPlaylistUrl, {...{body: JSON.stringify({name: name})}, ...headers});
      jsonResponse = await response.json();
      
      const addToPlaylistUrl = `https://api.spotify.com/v1/playlists/${jsonResponse.id}/tracks`;
      const uris = tracks.map(track => track.uri);
      response = await fetch(addToPlaylistUrl, {...{body: JSON.stringify({uris: uris})}, ...headers});
      jsonResponse = await response.json();
      
      console.log(jsonResponse);

      // this.getUserProfile()
      //   .then(jsonResponse =>{
      //     const createPlaylistUrl = `https://api.spotify.com/v1/users/${jsonResponse.id}/playlists`;
      //     fetch(createPlaylistUrl, {...{method: 'POST', body: JSON.stringify({name: name})}, ...headers})
      //       .then(response => response.json())
      //       .then(jsonResponse => {
      //         const addToPlaylistUrl = `https://api.spotify.com/v1/playlists/${jsonResponse.id}/tracks`;
      //         const uris = tracks.map(track => track.uri);
      //         fetch(addToPlaylistUrl, {...{method: 'POST', body: JSON.stringify({uris: uris})}, ...headers})
      //           .then(response => response.json())
      //           .then(jsonResponse => {
      //             console.log(jsonResponse);
      //           });
      //       })

      //   })

    } else {
      return;
    }
  },
  getUserProfile: async function(){
    const profileUrl = `https://api.spotify.com/v1/me`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    const response = await fetch(profileUrl, headers);
    const jsonResponse = await response.json();
    return jsonResponse;
    // return fetch(profileUrl, headers)
    //   .then(response => response.json())
    //   .then(jsonResponse => {
    //     return jsonResponse;
    //   });
  }
};

export default Spotify;
