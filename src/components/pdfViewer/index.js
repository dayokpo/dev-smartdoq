import React from 'react';
import useDeviceDetect from "../../utils/useDeviceDetect";

const isMobilePhone = () => {
    const mobileThreshold = 800;
    if (typeof window !== 'undefined') {
        if (window.innerWidth < mobileThreshold) {
            console.log(' mobile');
        } else {
            console.log(' desktop');
        }
    }
};
function PdfViewer({ fileURL, closePreview }) {
    const { isMobile } = useDeviceDetect();
    console.log(" is mobile from hook ", isMobile);
    if(isMobile){
        window.open(fileURL, '_blank')
    }
    return (
        <>
            <button type="button" className="overlay-close pdf-viewer-close" onClick={(e) => closePreview()}>
                Close
            </button>

            <div className="scroll-wrapper">
                <iframe title="image" src={fileURL} frameBorder="0" allowFullScreen />
            </div>
        </>
    );
}

PdfViewer.defaultProps = {};

PdfViewer.propTypes = {};

export default PdfViewer;
