import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={() => onVideoClick(video)} className="list-group-item">
            <div className="video-list media">
                <img className="media-object" src={imgUrl} />
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;