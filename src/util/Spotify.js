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

  search: async function(term, type){
    const accessToken = this.getAccessToken();
    const searchUrl = `https://api.spotify.com/v1/search?type=${type}&q=${term}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(searchUrl, headers);
  },

  getAlbum: async function(id){
    const accessToken = this.getAccessToken();
    const albumUrl = `https://api.spotify.com/v1/albums/${id}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(albumUrl, headers); 
  },

  getTrack: async function(id){
    const accessToken = this.getAccessToken();
    const trackUrl = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(trackUrl, headers); 
  },

  getArtist: async function(id){
    const accessToken = this.getAccessToken();
    const artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(artistUrl, headers); 
  },

  getPlaylist: async function(id){
    const accessToken = this.getAccessToken();
    const playlistUrl = `https://api.spotify.com/v1/playlists/${id}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(playlistUrl, headers); 
  },

  getShow: async function(id){
    const accessToken = this.getAccessToken();
    const showUrl = `https://api.spotify.com/v1/shows/${id}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(showUrl, headers); 
  },

  getEpisode: async function(id){
    const accessToken = this.getAccessToken();
    const episodeUrl = `https://api.spotify.com/v1/episodes/${id}`;
    const headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    return this.getResponse(episodeUrl, headers); 
  },

  getResponse: async function(url, headers){
    const response = await fetch(url, headers);
    const jsonResponse = await response.json();
    return jsonResponse;
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
