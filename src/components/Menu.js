import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {stateMapper} from '../store/store.js';
import './nav.css';

class MenuComponent extends React.Component {
    render() {
        return(
         <div className="container">
         <div className="row">
         <div className="col-md-12">
        
        <Link>
          <img src="https://i.ytimg.com/vi/zr7SnVq4tnc/maxresdefault.jpg" alt="Youtube Logo" className="youtube-logo" />
              </Link>

                <ul className="list-group">
                    <li className="list-group-item active">Menu</li>
                    <li className="list-group-item"> <Link to="/">Trending</Link> </li>
                    <li className="list-group-item"> <Link to="/search">Search</Link> </li>
                </ul>
               
            </div>
            </div>
            </div>
        )
    }
}

let Menu = connect(stateMapper)(MenuComponent);

export {Menu};