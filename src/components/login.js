import React, { Component } from 'react';
import { Jumbotron, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            invalid: false,
        }
        this.login = this.login.bind(this);
    }

    login(){
        var _this = this;
        
        setTimeout(() => {
            if(_this.state.username === "user" && _this.state.password === "password"){
                sessionStorage.setItem('isUserLoggedIn', true);
                this.props.history.push('/react-classic-games/login');
            }else{
                _this.setState({invalid: true});
            }
        }, 500);
    }

    render() {
        return (
            <div className="bodyContainer" >

                <Jumbotron className="container homeJumbotron" style={{ padding: '48px' }}>
                {sessionStorage.getItem('isUserLoggedIn') ? <div>
                    
                    <h2> Welcome GameStop! </h2>
                    You have access to some other games that other people don't have access to 	&#128521;!
                    <br/><br/>
                    <h3>Enjoy!</h3>
                     </div> 
                
                : <div className="row justify-content-md-center">
                    <h2> Login to GameStop! </h2>
                    
                    {this.state.invalid ? 
                    <span style={{color: 'red'}}> The username or password is invalid! </span> 
                    : null}

                    <div className="col-md-6 offset-md-6" style={{marginLeft: '25%'}}>
                    <FormGroup>
                    <InputGroup>
                    <InputGroup.Addon><span className="glyphicon glyphicon-user"></span></InputGroup.Addon>
                    <FormControl type="text" placeholder="Username" value={this.state.username} 
                    onChange={(e) => this.setState({username: e.target.value})}/>
                    </InputGroup>
                    </FormGroup>

                    <FormGroup>
                    <InputGroup>
                    <InputGroup.Addon><span className="glyphicon glyphicon-asterisk"></span></InputGroup.Addon>
                    <FormControl type="password" placeholder="Password" value={this.state.password} 
                    onChange={(e) => this.setState({password: e.target.value})}/>
                    </InputGroup>
                    </FormGroup>

                    <button className="btn btn-success" onClick={this.login}>
                    <span className="glyphicon glyphicon-log-in"></span> Login</button>
                    </div>
                    </div>}
                    
                </Jumbotron>
            </div>
        )
    }
}

export default withRouter(Login);