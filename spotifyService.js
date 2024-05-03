import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

function initSpotifyApi(accessToken) {
  spotifyApi.setAccessToken(accessToken);
  return spotifyApi;
}

export { initSpotifyApi };