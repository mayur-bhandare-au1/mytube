import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import {Menu} from './components/Menu.js';
import {Trending} from './components/Trending.js';
import {Search} from './components/Search.js';
import VideoPlayer from './components/VideoPlayer.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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

                            <Route path = "/" exact = {true} component= {Trending} />
                            <Route path = "/search"component= {Search} />
                            <Route path = "/video/:videoId" component= {VideoPlayer} />
                            
                        </div>
                    </div>
                </div>
                </Router>
           </Provider>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));