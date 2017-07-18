import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './configureStore';
import logo from './logo.svg';
import './App.css';

import { Users } from './users';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Users />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
