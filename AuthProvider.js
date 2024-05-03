import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const handleAuthentication = (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    // Sets a timer to refresh the token before it expires
    const expiresIn = 3600; // Token expiration time in seconds
    setTimeout(refreshToken, expiresIn * 1000 - 60000); // Refreshes token 1 minute before expiration
  };

  const refreshAccessToken = async () => {
    try {
      const response = await fetch('http://localhost:3001/refresh-token', {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const newAccessToken = data.accessToken;
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error('Error refreshing access token', error);
    }
  };
  

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, handleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
