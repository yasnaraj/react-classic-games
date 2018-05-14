import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';
import TicTacToeGame from './components/tictactoe/game';
import LoveCalcGame from './components/loveCalculator/loveCalcGame';
import MemoryGame from './components/memoryGame/memoryGame';
import StoneScissorPaperGame from './components/StoneScissorPaper/StoneScissorPaperGame';

class Routes extends Component {
    render() {
      const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            sessionStorage.getItem('isUserLoggedIn') ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/react-classic-games/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );

      return (
        <div>
            <Switch>
                <Route path="/react-classic-games/tictactoe" component={TicTacToeGame} />
                <Route path="/react-classic-games/loveCalculator" component={LoveCalcGame} />
                <PrivateRoute path="/react-classic-games/memoryGame" component={MemoryGame} />
                <Route path="/react-classic-games/stoneScissorPaper" component={StoneScissorPaperGame} />
                <Route path="/react-classic-games/login" component={Login} />
                <Route path="/react-classic-games" component={Home} />
                
            </Switch>
        </div>
      );
    }
  }
  
  export default Routes;