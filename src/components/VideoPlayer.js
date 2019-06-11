import React from 'react';
import {connect} from 'react-redux'
import {stateMapper} from '../store/store.js'
import Comments from "../components/Comments.js"
import "./style.css";


class VideoPlayerComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showMoreClicked: false
        }
        this.showMoreClicked = this.showMoreClicked.bind(this);
    }
     showMoreClicked() {

        this.setState({
            showMoreClicked: true
        })
    }

   

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEO_DATA",
            videoId: this.props.match.params.videoId
        })
    }
    componentWillUnmount() {
        this.props.dispatch({
            type: 'CLEAR_VIDEO_DATA'
        })
    }
    renderTitle() {

        if (!this.props.currentVideoPlayer.snippet) {
            return "Loding ...";
        } else {
            return this.props.currentVideoPlayer.snippet.title
        }
    }
    renderDescription() {

        if (this.state.showMoreClicked) {
            return (
                <p className="font-weight-light mynew">{this.props.currentVideoPlayer.snippet && this.props.currentVideoPlayer.snippet.description}</p>
            )
        } else {
            return (
                <p className="font-weight-light mynew">
                    {this.props.currentVideoPlayer.snippet && this.props.currentVideoPlayer.snippet.shortDescription}....
                    <button onClick={this.showMoreClicked} className="btn btn-sm btn-info">Show More</button>
                </p>
            )

        }


    }

    render() {
        return (
            <div>
                <h2 className="text-danger">{this.renderTitle()}</h2>
                <hr />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`}
                        allowFullScreen></iframe>
                </div>

                <div className="row">
                    <div className="col-md-10">
                       
                            <span className="text-grey-darker text-xs space">Views:{this.props.currentVideoPlayer.statistics && this.props.currentVideoPlayer.statistics.viewCount}</span>

                            <span className="space"><i className="fa fa-thumbs-up" aria-hidden="true"></i>
{this.props.currentVideoPlayer.statistics && this.props.currentVideoPlayer.statistics.likeCount}</span>
                            <span className="space"><i className="fa fa-thumbs-down" aria-hidden="true"></i>{this.props.currentVideoPlayer.statistics && this.props.currentVideoPlayer.statistics.dislikeCount}</span>
                            
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <hr/>
                        {this.renderDescription()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">

                        <Comments videoId={this.props.match.params.videoId}/>
                    </div>
                </div>
            </div>
        )
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;