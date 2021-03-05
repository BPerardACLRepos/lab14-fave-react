import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { setUserStorage, getStoredUserToken } from './UTILS/local-storage-utils.js';

import Header from './COMPONENTS/Header.js';
import PrivateRoute from './COMPONENTS/PrivateRoute.js';

import SignInPage from './AUTH/SignIn.js';
import SignUpPage from './AUTH/SignUpPage.js';

import FavoritesPage from './FAVORITES/FavoritesPage.js';
import SearchPage from './FAVORITES/SearchPage.js';


export default class App extends React.Component {

  state = {
    token: getStoredUserToken(),
  }

  handleUserChange = (user) => {
    setUserStorage(user);

    this.setState({
      token: user.token,
    })
  }

  handleLogout = () => {
    const user = {
      id: '',
      email: '',
      token: '',
    }

    this.handleUserChange(user);
  }

  render() {
    return (
      <div>
        <Router>
          <Header
            token={this.state.token}
            handleLogout={this.handleLogout} />
          <Switch>
            <PrivateRoute
              path="/favorites"
              exact
              token={this.state.token}
              render={(routerProps) =>
                <FavoritesPage
                  token={this.state.token}
                  {...routerProps}
                />}
            />
            <PrivateRoute
              path="/search"
              exact
              token={this.state.token}
              render={(routerProps) =>
                <SearchPage
                  token={this.state.token}
                  {...routerProps}
                />}
            />
            <Route
              path="/"
              exact
              render={(routerProps) =>
                <SignInPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) =>
                <SignUpPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}