import React, { useState } from 'react';
import VideoViewer from '../../components/videoViewer';
import * as Icon from 'react-feather';

function VideoGallery({ videoData, data, removeOverlay }) {
    let noOfDocuments = 3;
    console.log(' video Data ', videoData);
    const videoHtml = data.video_url.html;
    let [imageIndex, setImageIndex] = useState(1);
    let [videoURL, setVideoURL] = useState(videoHtml);

    const [open, setOpen] = useState(true);
    const [activeUrl, setActiveUrl] = useState(undefined);
    const [openViewer, setOpenViewer] = useState(false);

    return (
        <div className="overlay">
            {!openViewer && (

            <Icon.X className="overlay-close" onClick={(e) => removeOverlay()}/>
            )}
            {openViewer && (
                <VideoViewer
                    fileURL={activeUrl}
                    closePreview={() => {
                        setOpenViewer(false);
                        setOpen(true);
                    }}
                />
            )}
            {open && (
                <div className="videoGallery">
                    <>
                            {videoData.map((item, index) => {
                                console.log(" item ", item , index)
                                return (
                                    <div className="videoGalleryLists">
                                        <div className="videoGalleryThumb">
                                            <div className= "videoIframe" dangerouslySetInnerHTML={{ __html: item.video.html }} />
                                        </div>
                                    </div>
                                );
                            })}
                    </>
                </div>
            )}
        </div>
    );
}

export default VideoGallery;
