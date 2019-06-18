import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {stateMapper} from '../store/store.js';
import './nav.css';

class MenuComponent extends React.Component {

    componentDidMount(){
        this.props.dispatch({
            type:"FETCH_PLAYLISTS"
        })}
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
                    <li className="list-group-item"> <Link to="/app"><i class="fa fa-fire fa-fw" aria-hidden="true"></i><span class="ml-2"></span>Trending</Link> </li>
                    <li className="list-group-item"> <Link to="/app/search"><i class="fa fa-search" aria-hidden="true"></i><span class="ml-2"></span>Search</Link> </li>
                    <li className="list-group-item active">My PlayLists</li>
                    {
                        this.props.playList && this.props.playList.map(p=>{
                            return (
                                <li key={p.etag} className="list-group-item">
                                      <Link to={`/app/playlist/${p.id}`}><i class="fa fa-list-ul" aria-hidden="true"></i><span class="ml-2"></span>{p.snippet.title}</Link>
                                </li>
                            )
                        })
                    }
                     <li className="list-group-item">
                        <Link to="/app/playlists/create">
                            <span className="fa fa-plus-circle" title="icon name" aria-hidden="true"> Create</span>
                        </Link>
                    </li>

                    <li className="list-group-item active">My Account</li>
                    <li className="list-group-item"><Link to="/app/profile"><i class="fa fa-user" aria-hidden="true"></i><span class="ml-2"></span>Profile</Link></li>
                    <li className="list-group-item"> <Link to="/app/logout"><i class="fa fa-sign-out" aria-hidden="true"></i><span class="ml-2"></span>Logout</Link></li>
                </ul>
               
            </div>
            </div>
            </div>
        )
    }
}

let Menu = connect(stateMapper)(MenuComponent);

export {Menu};