import {createStore,combineReducers} from 'redux';
import videosReducer from './reducers/videosReducer.js'
import isVideoLoadingReducer from './reducers/isVideoLoadingReducers.js'
import currentVideoPlayerReducer from './reducers/currentVideoPlayerReducer.js';
import currentVideoCommentsReducer from './reducers/currentVideoCommentsReducer.js';
import playListReducer from './reducers/playListReducer.js';
import newPlayListReducer from './reducers/newPlayListReducer.js';

let reducer = combineReducers({
    videos:videosReducer,
    isVideoLoading:isVideoLoadingReducer,
    currentVideoPlayer:currentVideoPlayerReducer,
    currentVideoComments:currentVideoCommentsReducer,
    playList: playListReducer ,
	newPlayList: newPlayListReducer

})

let store = createStore(reducer);



function stateMapper(state){
    return state;
}

export {store,stateMapper};