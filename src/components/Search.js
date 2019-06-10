import React from 'react';
import {store,stateMapper} from '../store/store.js';
import {connect} from 'react-redux';
import {Videos} from './Videos.js';


class SearchVideosComponent extends React.Component {
    state= {
        query:""
    }
    componentDidMount() {
        store.dispatch({
            type:"CLEAR_VIDEOS"
        }) 
    }

    handleInput = e => {
        this.setState({query:e.target.value})
    }

    handleSearch = () => {
        this.props.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"search",
            query:this.state.query
        })
    }


    render() {
        return( 
            <React.Fragment>
            <h1>Search Videos</h1>
            <hr/>
            <div className="row m-3">
                <div className="col">
                <input onChange={this.handleInput} type="text" className="form-control form-control-md"/>
                </div>
                <button onClick={this.handleSearch} className="btn btn-danger"><i className="fa fa-search text-grey-dark"></i></button>
            </div>
            <Videos/>
            </React.Fragment>
        );
    }
}

let Search = connect(stateMapper)(SearchVideosComponent);

export {Search}