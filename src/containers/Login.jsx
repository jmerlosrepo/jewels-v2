import React, { Component } from 'react';

class Login extends Component{

    state = {
        key: ''
    }

    handleKeyChange = (e) => {
        e.preventDefault();
        this.setState({ key: e.target.value });
    }

    render(){
        const { onSubmitKey } = this.props;
        return(
            <div className="loginContainer">
                <div className="cardTemplate login roundedCorner">
                    <h1 className="cardHeader toolsBackgorund">Login</h1>
                    <div className="form-group login-inputs">
                        <label htmlFor="">Ingresa tu llave</label>
                        <input onChange={this.handleKeyChange} required="required" className="form-control" type="text" />
                    </div>
                    <button onClick={(e) => onSubmitKey(e, this.state.key)} className="btn btn-secondary buttonTheme">Login</button>
                </div>
            </div>
        )
    }
}

export default Login;