import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

function Logout() {
  const { setAccessToken } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    setAccessToken(null);
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;