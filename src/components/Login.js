import React from 'react'
import {GoogleLogin} from 'react-google-login';

class Login extends React.Component {

    constructor(props){
        super(props)

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response){
        if(!response || !response.accessToken){
           alert("Sorry,try again later.");
            return;
        }
        let user ={
            token:response.accessToken,
            name:response.profileObj.name
        }
        localStorage.setItem("user",JSON.stringify(user));
        this.props.history.push("/app");
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2 className="text-danger">Login Using Google</h2>
                        <hr />
                        <GoogleLogin
                            clientId="367019791374-tvh5d0dl3vm7oit84deputrh9uvtuh20.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            scope="https://www.googleapis.com/auth/youtube"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;