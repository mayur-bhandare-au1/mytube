function isVideoLoadingReducer(isVideoLoading=false,action){
    if(action.type === "FETCH_VIDEOS"){
        isVideoLoading = true;
    }
    if(action.type === "VIDEOS_LOADED"){
        isVideoLoading = false;
    }
    return isVideoLoading;
}

export default isVideoLoadingReducer;