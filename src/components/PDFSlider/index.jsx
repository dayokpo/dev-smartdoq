import React, { useState } from 'react';
import PdfViewer from '../../components/pdfViewer';
import * as Icon from 'react-feather';

function PDFSlider({ pdfDataFromSlider, removeOverlay }) {
    const [comState, setComState] = useState({ openPDFOverlay: true, pdfURL: undefined, openPDF: false });
    const { openPDFOverlay, pdfURL, openPDF } = comState;

    const handleDocImageClick = (pdfURL) => {
        setComState({
            openPDFOverlay: false,
            pdfURL,
            openPDF: true,
        });
    };
    const closeCloseOpenPDF = () => {
        setComState({
            openPDFOverlay: true,
            openPDF: false
        });
    }
    return (
        <div className="overlay">
            {!openPDF && <Icon.X className="overlay-close" onClick={(e) => removeOverlay()} />}
            {openPDF && (
                <PdfViewer
                    fileURL={pdfURL}
                    closePreview={() => {closeCloseOpenPDF()}}
                />
            )}
            {openPDFOverlay && (
                <div className="pdfGallery">
                    {pdfDataFromSlider.map((item, index) => {
                        return (
                            <>
                                <div className="pdfGalleryLists">
                                    <div className="pdfGalleryThumb">
                                        <img
                                            key={index}
                                            onClick={(e) => {
                                                handleDocImageClick(item.slide_doc.url);
                                            }}
                                            className="pdfImageBox"
                                            src={item.slide_image.url}
                                        />
                                    </div>
                                    <p className="pdfName">{item.slide_name.text}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default PDFSlider;
