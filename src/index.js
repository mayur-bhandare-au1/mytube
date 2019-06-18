import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Login from './components/Login.js'

class Home extends React.Component {

   

    doRedirect(){
        let loggedIn = localStorage.getItem("user");

        if(loggedIn){
            return(
                <Redirect to="/app"/>
            )
        }else{
            return (
                <Redirect to="/login"/>
            )
        }
        
    }

    render() {

        return (
            <Router>
                <Route path="/app" component={App}/>
                <Route path="/login" component={Login}/>
                   {this.doRedirect()} 
            </Router>
        )

    }
}

ReactDOM.render(<Home />, document.getElementById("root"));