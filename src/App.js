import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/tokenAuth';
import PrivateRoute from "./components/Routers/PrivateRoute";
import MyAppRoutes from './components/Routers/MyAppRoutes';

const token = localStorage.getItem('token');
tokenAuth(token);
function App() {
  return (
    <AlertState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute
              path='/'
              component={MyAppRoutes}
            />
          </Switch>
        </Router>
      </AuthState>
    </AlertState>
  );
}

export default App;
