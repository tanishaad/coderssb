import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

function AuthCallback() {
  const { handleAuthentication } = useAuth();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.hash.substring(1));
    const accessToken = params.get('access_token');
    const error = params.get('error');

    if (accessToken) {
      handleAuthentication(accessToken);
      history.push('/recommendations');
    } else if (error) {
      console.error('Authentication error:', error);
      history.push('/login');
    } else {
      history.push('/login');
    }
  }, [location, handleAuthentication, history]);
}

export default AuthCallback;
