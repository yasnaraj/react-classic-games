import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import logo from './images/logo.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        sessionStorage.removeItem('isUserLoggedIn');
        this.props.history.push('/react-classic-games/login');
    }

  render() {
    return (
        <Navbar inverse collapseOnSelect fixedTop className="headerBar">
            <Navbar.Header>
                <Navbar.Brand>
                    <img src = {logo} className="App-logo" width="auto" height="40px" alt="game-stop logo"/>
                <Link to="/react-classic-games">GameStop</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/react-classic-games/tictactoe"> Tic Tac Toe </Link>
                </li>
                <li className="nav-item">
                    <Link to="/react-classic-games/loveCalculator"> Love Calculator</Link>
                </li>
                <li className="nav-item">
                    <Link to="/react-classic-games/stoneScissorPaper"> Stone Scissor Paper </Link>
                </li>
                {
                    sessionStorage.getItem('isUserLoggedIn') ? 
                    <li className="nav-item">
                        <Link to="/react-classic-games/memoryGame"> Memory Game* </Link>
                    </li>
                : null
                }
                </ul>

                <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                {
                    sessionStorage.getItem('isUserLoggedIn') ? 
                    <button className="btn btn-link" onClick={this.logout}> 
                    <span className="glyphicon glyphicon-log-out"></span>  Logout </button>
                    :
                    <Link to="/react-classic-games/login"> <span className="glyphicon glyphicon-log-in"></span> Login</Link>

                }
                </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default withRouter(Header);
