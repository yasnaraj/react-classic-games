import React, { Component } from 'react';
import {Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
      return (
        <div className="bodyContainer" >
            <Jumbotron className="homeJumbotron">
                <h1>Welcome to GameStop!</h1>
                <p>
                    Enjoy some classic games from the menu above.
                </p>
                <p>
                </p>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Home;