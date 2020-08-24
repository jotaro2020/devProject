import React, { Component } from 'react';
import Window from './WIndow/window.js'

export default class App extends Component {

  state = {
    coins: 0
  }

  flipCoin = point => {
    const copyPoints = this.state.coins;
    const pointPlus = Math.floor(Math.random() * 3 + 1);
    if ((copyPoints + pointPlus) > 15) {
      (alert('Oups) I won'));
      this.setState({ coins: 0 });
    } else if ((copyPoints + pointPlus) === 15) {
      (alert('Amazing!) You SuperLucky! Congrats)'));
      this.setState({ coins: 0 });
    } else { this.setState({ coins: copyPoints + pointPlus }) }
  }
  render() {
    return (
      <div className="App">
        <Window flipCoin={this.flipCoin} coins={this.state.coins} />
      </div>
    );
  }
}