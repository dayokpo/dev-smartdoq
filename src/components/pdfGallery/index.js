import React from 'react';
import PdfViewer from '../../components/pdfViewer';

function PDFGallery({ pdfSlice, documents, removeOverlay }) {
    const [open, setOpen] = React.useState(true);
    const [activePdfUrl, setActivePdfUrl] = React.useState(undefined);
    const [openPDFViewer, setOpenPDFViewer] = React.useState(false);
    const [documentURL, setDocumentURL] = React.useState(documents[0].url);
    return (
        <div className="overlay">
            {!openPDFViewer && (
                <button type="button" className="overlay-close" onClick={(e) => removeOverlay()}>
                    Close
                </button>
            )}
            {openPDFViewer && (
                <PdfViewer
                    fileURL={activePdfUrl}
                    closePreview={() => {
                        setOpenPDFViewer(false);
                        setOpen(true);
                    }}
                />
            )}
            {open && (
                <div className="pdfGallery">
                    {Object.keys(pdfSlice).map((key, index) => {
                        if (key.indexOf('document_image')) {
                            const docImage = 'document_image_' + `${index + 1}`;
                            const name = 'document_name_'+`${index+1}`
                            let nametoDisplay = '';
                            if(pdfSlice[`${name}`] !== undefined){
                                nametoDisplay = pdfSlice[`${name}`]['text']
                            }
                            if (pdfSlice[`${docImage}`] !== undefined) {
                                return (
                                    <>
                                    <div className="pdfGalleryLists">
                                        <div className="pdfGalleryThumb">
                                            <img
                                                key={index}
                                                onClick={(e) => {
                                                    setActivePdfUrl(documents[index].url);
                                                    setOpenPDFViewer(true);
                                                    setOpen(false);
                                                }}
                                                className="pdfImageBox"
                                                src={pdfSlice[`${docImage}`]['url']}
                                            />
                                        </div>
                                        <p className="pdfName">{nametoDisplay}</p>
                                     </div>
                                    </>
                                );
                            }
                        }
                    })}
                </div>
            )}
        </div>
    );
}

export default PDFGallery;
