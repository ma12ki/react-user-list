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
        <div>
          <div className='App-header'>
            <h2>react-user-list</h2>
          </div>
          <main className='main-container'>
            <Users />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
