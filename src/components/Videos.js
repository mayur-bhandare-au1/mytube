import React from 'react'
import { connect } from 'react-redux';
import { store, stateMapper } from '../store/store.js';
import { Link } from 'react-router-dom'


class VideosComponent extends React.Component {



    renderVideos() {

        return this.props.videos.map(v => {
            let videoId = v.id;

            if (typeof videoId != 'string') {
                videoId = v.id.videoId;
            }
            return (
                <div key={v.etag} className="col-md-4">
                    <Link to={`/video/${videoId}`}>
                        <img src={v.snippet.thumbnails.high.url} className="img-fluid" alt="..." />
                    </Link>

                    <small>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></small>
                    <hr />
                </div>


            );
        });

    }
    render() {

        if (this.props.isVideoLoading) {
            return (
                <div className="row">

                    <div className="col-md-12">
                        <div className="d-flex justify-content-center text-danger">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    {this.renderVideos()}
                </div>
            )

        }


    }
}

let Videos = connect(stateMapper)(VideosComponent);

export  {Videos};