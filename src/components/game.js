import React, { Component } from "react";
import Menu from "./navigation/Menu";

export class Game extends Component {
  state = {
    score: 0,
    topScore: 0
  };

  render() {
    return <Menu Score={this.state.score} topScore={this.state.topScore} />;
  }
}

export default Game;
