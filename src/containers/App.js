import React, { Component } from 'react';
import CardList from '../components/CardList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <input type="text" placeholder="search robots" />
        <CardList />
      </div>
    )
  }
}

export default App;
