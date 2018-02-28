import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

class Header extends Component {

  render() {
    return (
        <Navbar inverse collapseOnSelect fixedTop className="headerBar">
            <Navbar.Header>
                <Navbar.Brand>
                    <img src = {logo} className="App-logo" width="auto" height="40px" alt="game-stop logo"/>
                <Link to="/">GameStop</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/tictactoe"> Tic Tac Toe </Link>
                </li>
                <li className="nav-item">
                    <Link to="/loveCalculator"> Love Calculator</Link>
                </li>
                <li className="nav-item">
                    <Link to="/memoryGame"> Memory Game </Link>
                </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
