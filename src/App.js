import React, { Component } from 'react';
import logoApple from './apple.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoApple} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
