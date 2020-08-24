import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: robots
    }
  }

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1 className="f1 light-green">RoboFriends</h1>
        <div className='pa2'>
          <input
            type="text"
            placeholder="search robots"
            className='pa3 ba b--green bg-lightest-blue'
            onChange={this.onInputChange} />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
