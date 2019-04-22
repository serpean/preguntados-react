import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Game from './components/game/game';
import './App.css';

class App extends Component {
  state = {
    isGame: false
  };

  startGame = () => {
    this.setState({ isGame: true });
  };

  render() {
    let onGame = <Button onClick={this.startGame}>Start</Button>;
    if (this.state.isGame) {
      onGame = <Game />;
    }
    return (
      <div className='App'>
        <main className='App-body'>{onGame}</main>
      </div>
    );
  }
}

export default App;
