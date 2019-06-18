import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import {Menu} from './components/Menu.js';
import {Trending} from './components/Trending.js';
import {Search} from './components/Search.js';
import VideoPlayer from './components/VideoPlayer.js';
import Logout from './components/Logout.js';
import Profile from './components/Profile.js';
import CreatePlayList from './components/CreatePlayList.js';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends React.Component {
                                     
    render(){
        return(
            <Provider store = {store}>
                <Router>
        
                <div className="container-fluid">
                    <div className="row">
                    
                        <div className="col-md-2">
                            <Menu/>
                        </div>
                       
                        <div className="col-md-10">

                            <Route path = "/app" exact = {true} component= {Trending} />
                            <Route path = "/app/search"component= {Search} />
                            <Route path = "/app/video/:videoId" component= {VideoPlayer} />
                            <Route path="/app/playlists/create" component={CreatePlayList}/>
                            <Route path="/app/profile"  component={Profile}/>
                            <Route path="/app/logout"  component={Logout}/>
                            
                        </div>
                    </div>
                </div>
                </Router>
           </Provider>
        );
    }
}

export default App;