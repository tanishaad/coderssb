import React from 'react';

function Login() {
  const CLIENT_ID = 'YOUR_CLIENT_ID';
  const REDIRECT_URI = 'YOUR_REDIRECT_URI';
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

  const handleLogin = () => {
    window.location = AUTH_URL;
  };

  return (
    <button onClick={handleLogin}>Login with Spotify</button>
  );
}

export default Login;
