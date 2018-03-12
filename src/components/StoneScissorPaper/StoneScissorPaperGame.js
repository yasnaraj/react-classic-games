import React, { Component } from 'react';
import classnames from 'classnames';

export default class StoneScissorPaperGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            wrongGuess: false,
            result: undefined
        }

        this.handleClick = this.handleClick.bind(this);
        this.replay = this.replay.bind(this);
    }

    handleClick(e) {
        var userVal = e;
        console.log(e);
        var _this = this;
        var ssp = ['Stone', 'Scissor', 'Paper'];
        this.setState({ value: undefined })
        var rand = ssp[Math.floor(Math.random() * ssp.length)];
        setTimeout(function () {
            _this.setState({ value: rand });
            var didUserWin = _this.userWins(userVal, rand);
            if (didUserWin === true) {
                _this.setState({ result: "You won!" });
            } else if (didUserWin === false) {
                _this.setState({ result: "You lost!" });
            } else {
                _this.setState({ result: "It's a tie!" })
            }
        }, 5);
    }

    userWins(userVal, randVal) {
        switch (userVal) {
            case "Stone":
                switch (randVal) {
                    case "Stone":
                        return null;
                    case "Scissor":
                        return true;
                    case "Paper":
                        return false;
                }
            case "Scissor":
                switch (randVal) {
                    case "Stone":
                        return false;
                    case "Scissor":
                        return null;
                    case "Paper":
                        return true;
                }

            case "Paper":
                switch (randVal) {
                    case "Stone":
                        return true;
                    case "Scissor":
                        return false;
                    case "Paper":
                        return null;
                }
            default:
                return null;
        }
    }

    replay() {
        this.setState({
            value: undefined,
            wrongGuess: false
        });
    }

    render() {

        return (
            <div className="bodyContainer">
                <h1 className="leftAlign">Stone Scissor Paper</h1>
                <div>
                    <strong>Play this fun game of Stone, Scissor, Paper with the bot!</strong>
            </div>
                <div className="buttons">
                    <button className="btn btn-default buttons" onClick={() => this.handleClick('Stone')} id="Stone" disabled={this.state.wrongGuess}>
                        <img src={require('../../images/stone.png')} alt="Stone" width="80" height="80" /><br />
                        Stone </button>
                    <button className="btn btn-default buttons" onClick={() => this.handleClick('Scissor')} id="Scissor" disabled={this.state.wrongGuess}>
                        <img src={require('../../images/scissor.png')} alt="Scissor" width="80" height="80" /><br />
                        Scissor </button>
                    <button className="btn btn-default buttons" onClick={() => this.handleClick('Paper')} id="Paper" disabled={this.state.wrongGuess}>
                        <img src={require('../../images/paper.png')} alt="Paper" width="80" height="80" /><br />
                        Paper </button>
                </div>
                Bot Chooses:
                {this.state.value === 'Stone' ?
                    <button className="btn btn-default buttons" id="StoneAns" disabled={true}>
                        <img src={require('../../images/stone.png')} alt="Stone" width="80" height="80" /><br />
                        Stone </button> :
                    this.state.value === 'Scissor' ?
                        <button className="btn btn-default buttons" id="ScissorAns" disabled={true}>
                            <img src={require('../../images/scissor.png')} alt="Scissor" width="80" height="80" /><br />
                            Scissor </button> :
                    this.state.value === 'Paper' ?
                        <button className="btn btn-default buttons" id="PaperAns" disabled={this.state.wrongGuess}>
                            <img src={require('../../images/paper.png')} alt="Paper" width="80" height="80" /><br />
                            Paper </button> :
                            null
                }

                <br />
                <span className="result">{this.state.result}</span>
                <br />

                {this.state.wrongGuess ? <button className="btn btn-primary" onClick={this.replay}> Replay </button> : null}
            </div>
        );
    }
}
