import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import TicTacToeGame from './components/tictactoe/game';
import LoveCalcGame from './components/loveCalculator/loveCalcGame';
import MemoryGame from './components/memoryGame/memoryGame';

class Routes extends Component {
    render() {
      return (
        <div>
            <Switch>
                <Route path="/tictactoe" component={TicTacToeGame} />
                <Route path="/loveCalculator" component={LoveCalcGame} />
                <Route path="/memoryGame" component={MemoryGame} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
      );
    }
  }
  
  export default Routes;