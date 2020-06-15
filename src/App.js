import React, { Component } from 'react';
import './App.css';
import Game from './Game/Game'

class App extends Component {

  constructor() {
    super();
    this.state = {
      cols: 8,
      rows: 8,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          Othello
        </h1>
        <Game
          cols={this.state.cols}
          rows={this.state.rows}
        />
      </div>
    );
  }

}

export default App;
