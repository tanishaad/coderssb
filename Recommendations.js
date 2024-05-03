import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';
import { initSpotifyApi } from '../../services/spotifyService';

function Recommendations() {
  const { accessToken, refreshToken } = useAuth();
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    const spotifyApi = initSpotifyApi(accessToken);

    // refresh access token
    const refreshAccessToken = async () => {
        try {
        const response = await fetch('http://localhost:3001/refresh-token', {
            method: 'POST',
            body: JSON.stringify({ refreshToken }),
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            },
        });
    
        const data = await response.json();
        const newAccessToken = data.accessToken;
        setAccessToken(newAccessToken);
        } catch (error) {
        console.error('Error refreshing access token', error);
        }
    };
  

    // Handle token expiration and refresh the token
    const intervalId = setInterval(() => {
      refreshAccessToken();
    }, expiresIn * 1000 - 60000); // Refresh token 1 minute before expiration

    return () => clearInterval(intervalId);
  }, [accessToken, refreshToken]);

}

export default Recommendations;

