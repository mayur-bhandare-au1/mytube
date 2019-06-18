import { fetchPlayLists} from "../api/youtube.js"
import {store} from "../store.js"

function playListReducer(playList =[],action){

    if(action.type === "FETCH_PLAYLISTS"){
        fetchPlayLists(store,action);
    }

    if(action.type === "PLAYLIST_LOADED"){
        return action.playList;
    }
    return playList;
}

export default playListReducer;