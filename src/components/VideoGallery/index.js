import React, { useState } from 'react'
import VideoViewer from '../../components/videoViewer'
import * as Icon from 'react-feather'

function VideoGallery({ videoData, removeOverlay }) {
    const [comState, setComState] = useState({
        openVideoOverlay: true,
        videoURL: undefined,
        openVideo: false,
    })
    const { openVideoOverlay, videoURL, openVideo } = comState
    const handleImageClick = (pdfURL) => {
        setComState({
            openVideoOverlay: false,
            videoURL,
            openVideo: true,
        })
    }
    const closeOpenVideo = () => {
        setComState({
            openVideoOverlay: true,
            openVideo: false,
        })
    }

    return (
        <div className="overlay">
            {!openVideo && (
                <Icon.X
                    className="overlay-close"
                    onClick={(e) => removeOverlay()}
                />
            )}
            {openVideo && (
                <VideoViewer
                    fileURL={videoURL}
                    closePreview={() => {
                        closeOpenVideo()
                    }}
                />
            )}
            {openVideoOverlay && (
                <div className="videoGallery">
                    <>
                        {videoData.map((item, index) => {
                            return (
                                <div className="videoGalleryLists" key={index}>
                                    <div className="videoGalleryThumb">
                                        <div
                                            className="videoIframe"
                                            dangerouslySetInnerHTML={{
                                                __html: item.video.html,
                                            }}
                                            onClick={(e) => {
                                                handleImageClick(
                                                    item.video.html
                                                )
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </>
                </div>
            )}
        </div>
    )
}

export default VideoGallery
