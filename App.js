import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import AuthCallback from './components/AuthCallback';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Recommendations from './components/Recommendations';
import Home from './pages/Home'; // Import the Home component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/recommendations" component={Recommendations} />
          <Route exact path="/auth-callback" component={AuthCallback} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;