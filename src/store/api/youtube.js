import MYTUBE_CONFIG from '../../config.js';

function getUserToken(){
    let user = localStorage.getItem("user");

    if(!user) {return null; }

    user = JSON.parse(user);

    return user.token;
}

function fetchVideos(store, action) {



    if (action.videoType === 'trending') {

        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&chart=mostPopular&maxResults=30`
        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then(function (response) {
                store.dispatch({
                    type: "VIDEOS_LOADED",
                    videos: response.items
                })
            })
            .catch(function (err) {
                console.log("err ==>", err)
            })
    } else if (action.videoType === "search") {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}`
        console.log(url)
        fetch(url)
            .then(function (data) {
                return data.json()
            })
            .then(function (response) {
                store.dispatch({
                    type: "VIDEOS_LOADED",
                    videos: response.items

                })
            })
            .catch(function (err) {
                console.log("Error =>", err)
            })
    }

}

function fetchOneVideo(store,action){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`
  
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        store.dispatch({
            type:"VIDEO_DATA_LOADED",
            videoData:data.items[0]
        })
        
    })
    .catch(function(err){
        console.log("Error =>",err);
    })
}

function fetchVideoComments(store,action){
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        store.dispatch({
            type:"VIDEO_COMMENTS_LOADED",
            comments:data.items
        })
 
    })
    .catch(function(err){
        console.log("Error =>",err);
    })
}
function fetchPlayLists(store, action) {
    let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=30`
    fetch(url, {
        "headers": {
            Authorization: `Bearer ${getUserToken()}`
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            store.dispatch({
                type: "PLAYLIST_LOADED",
                playList: data.items
            })
            // console.log(data)
        })
        .catch(function (err) {
            console.log("Error ===>" + err);
        })
}
function createPlayList(store, action) {
    let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

    let formData = {
        "snippet": {
            "title": action.formData.name,
            "description": action.formData.description
        }
    };

    fetch(url, {
        "method": "POST",
        "headers": {
            Authorization: `Bearer ${getUserToken()}`,
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(formData)
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            store.dispatch({
                type: "PLAYLIST_CREATED",
                newPlayList: data
            })
            store.dispatch({
                type:"FETCH_PLAYLISTS"
            })
            
        })
        .catch(function (err) {
            console.log("Error ===>" + err);
        })
}
export {fetchVideos,fetchOneVideo,fetchVideoComments,createPlayList,fetchPlayLists};

