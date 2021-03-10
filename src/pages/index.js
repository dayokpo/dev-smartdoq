import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/';
import ThreeD from '../components/ThreeD';
import PDFLogo from '../components/PDFLogo';
import Video from '../components/Video';
import Degree from '../components/Degree';
import PrismicLogo from '../components/PrismicLogo';
import OverlayModel from '../components/overlayModel';
import ThreeDOverlay from '../components/threeDOverlay';
import Wrapper from '../components/wrapper';
import EmptyOverlayModel from '../components/emptyOverlayModel';
import Metadata from '../components/metadata';
import LeftMenu from '../components/menu/leftMenu';
import RightMenu from '../components/menu/rightMenu';
import LogoDesc from '../components/LogoDesc';
import PDFGallery from '../components/pdfGallery';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import PrismicSVG from '../components/svg/PrismicSVG';
import pdf from '../files/flexControls/pdf.png';
import videoImg from '../files/flexControls/videoImg.png';
import _360 from '../files/flexControls/_360.png';
import threeD_model from '../files/flexControls/3d_model.png';
import '../globalStyles.css';
import '../portret.css';
import '../socialIcons.css';
import '../hamburgers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    getWebsiteHeaderData,
    getPDFSlice,
    getPDFDocuments,
    //getVideoMapSlice,
    getSocialUrls,
    getMenuData,
    getWebsiteMeta,
    showRightMenu,
    menuStyle,
    getSliderData,
    getVideoSliderData,
    getPDFData,
    getThreeDModelInternalData
} from '../utils/index';
const FooterLine = styled.img`
    left: 5%;
    bottom: 7%;
    width: 78%;
    height: 0.3%;
    position: absolute;
    outline: none;
    @media (orientation: portrait) {
        bottom: 8%;
        width: 70%;
    }
`;

export default function Home(props) {
    const { data } = props;
    const brochureImages = getSliderData(data);
    const pdfDataFromSlider = getPDFData(data);
    const videoSliderData =  getVideoSliderData(data);
    const websiteHeaderData = getWebsiteHeaderData(data);
    const pdfSlice = getPDFSlice(data);
    const pdfDocuments = getPDFDocuments(data);
   // const videoMapSlice = getVideoMapSlice(data);
    const socialURLs = getSocialUrls(data);
    const menuData = getMenuData(data);
    const websiteMeta = getWebsiteMeta(data);
    const threeDModelData = getThreeDModelInternalData(data);
    const [open, setOpen] = useState(false);
    const [openVideOverlay, setVideoOverlay] = useState(false);
    const [openthreeDOverlay, setThreeDOverlay] = useState(false);
    const [showEmptyOverlay, setShowEmptyOverlay] = useState(false);
    const [openPdfOverlay, setPdfOverlay] = useState(false);
    const [openDegreeOverlay, setOpenDegreeOverlay] = useState(false);
    console.log(" pdfData.pdfData ",websiteHeaderData.enabledChoices)
    
    return (
        <>
            <Layout>
                <Metadata websiteMeta={websiteMeta} uid={data.prismicBlogpost.uid} />
                <Wrapper bgurl={websiteHeaderData.backgroundImage}>
                    {!open && (
                        <LeftMenu
                            src={menuData.menu_left_icon.url}
                            type="image"
                            style={menuStyle(menuData, 'left')}
                            onClick={() => setOpen(!open)}
                        />
                    )}
                    {showRightMenu(menuData) && !showEmptyOverlay && !open && (
                        <RightMenu
                            src={menuData.menu_right_icon.url}
                            type="image"
                            style={menuStyle(menuData, 'right')}
                            onClick={() => setShowEmptyOverlay(!showEmptyOverlay)}
                        />
                    )}
                    <LogoDesc logo={websiteHeaderData.logoImage} desc={websiteHeaderData.logoDescription} />
                    <div className="controlFlex">
                    {/* ThreeD model  internal */}
                    { (websiteHeaderData.enabledChoices.indexOf("3D Model Internal") > -1) &&
                        <ThreeD
                            src={threeD_model}
                            type="image"
                            className="box"
                            onClick={() => setThreeDOverlay(!openthreeDOverlay)}
                        />
                    }

                     {/* PDF  */}
                    { (websiteHeaderData.enabledChoices.indexOf("PDF") > -1) &&
                        <PDFLogo
                            src={pdf}
                            type="image"
                            className="box"
                            onClick={() => setPdfOverlay(!openPdfOverlay)}
                        />
                    }
                    {/* Video  */}
                    { (websiteHeaderData.enabledChoices.indexOf("Video Gallery") > -1) &&
                        <Video
                            src={videoImg}
                            type="image"
                            value=""
                            className="box"
                            onClick={() => setVideoOverlay(!openVideOverlay)}
                        />
                    }
                    {/* IFRAME -   */}
                    { (websiteHeaderData.enabledChoices.indexOf("IFRAME -") > -1) &&
                        <Degree
                            src={_360}
                            type="image"
                            value=""
                            className="box"
                            onClick={() => setOpenDegreeOverlay(!openDegreeOverlay)}
                        />
                    }
                    </div>
                    <PrismicSVG />
                    <FooterLine src={websiteHeaderData.footerLineImage} />
                </Wrapper>

                {openDegreeOverlay && (
                    <Gallery
                        removeOverlay={() => {
                            setOpenDegreeOverlay(!openDegreeOverlay);
                        }}
                        brochureImages={brochureImages}
                       // data={videoMapSlice}
                    />
                )}
                {open && <OverlayModel removeOverlay={() => setOpen(!open)} socialURLs={socialURLs} />}
                {showEmptyOverlay && (
                    <EmptyOverlayModel
                        menuData={menuData}
                        removeOverlay={() => setShowEmptyOverlay(!showEmptyOverlay)}
                    />
                )}

                {openthreeDOverlay && (
                    <ThreeDOverlay removeOverlay={() => setThreeDOverlay(!openthreeDOverlay)} />
                )}
                {openVideOverlay && (
                    <VideoGallery videoData= {videoSliderData}  removeOverlay={() => setVideoOverlay(!openVideOverlay)} />
                )}
                {openPdfOverlay && (
                    <PDFGallery
                        documents={pdfDocuments}
                        pdfSlice={pdfSlice}
                        removeOverlay={() => setPdfOverlay(!openPdfOverlay)}
                    />
                )}
                {/* {openPdfOverlay && <PdfCarousel pdfSlice={pdfSlice} documents={pdfDocuments} removeOverlay={() => setPdfOverlay(!openPdfOverlay)} />} */}
            </Layout>
        </>
    );
}

export const pageQuery = graphql`
    query($uid: String) {
        prismicBlogpost(uid: { eq: $uid }) {
            uid
            data {
                functionality_choice_1
                functionality_choice_2
                functionality_choice_3
                functionality_choice_4
                functionality_choice_5
                functionality_choice_6
                website_main_logo {
                    alt
                    url
                }
                name {
                    html
                    text
                }
                website_background_image {
                    alt
                    url
                }
                footer_line_image {
                    alt
                    url
                }
                footer_image {
                    alt
                    url
                }
                footer_image_url {
                    url
                }
                logo_description {
                    text
                }
                body {
                    ... on PrismicBlogpostBodyPdf {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            pdf{
                                url
                            }
                            slide_caption
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBodyTopRight {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            slide_url {
                                url
                            }
                            slide_caption
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBody3dModelInternal {
                        slice_type
                        items {
                            add_3d_model {
                                url
                            }
                            model_thumbnail {
                                url
                            }
                            title_under_thumbnail{
                                text
                            }
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBodySocial {
                        primary {
                            instagram_url {
                                url
                            }
                            instagram_icon {
                                url
                                alt
                            }
                            facebook_url {
                                url
                            }
                            facebook_icon {
                                url
                                alt
                            }
                            linkedin_url {
                                url
                            }
                            linked_in_icon {
                                url
                                alt
                            }
                            whatsapp_url {
                                url
                            }
                            whatsapp_icon {
                                url
                                alt
                            }
                            mail_url {
                                url
                            }
                            mail_icon {
                                url
                            }
                            phone_number {
                                text
                            }
                            phone_icon {
                                url
                            }
                            location_url {
                                url
                            }
                            location_icon {
                                url
                            }
                            website_url {
                                url
                            }
                            website_icon {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyMenu {
                        primary {
                            show_right_menu
                            menu_left_icon {
                                url
                            }
                            menu_right_icon_bg_color
                            menu_right_icon {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyWebsitemeta {
                        primary {
                            title {
                                text
                            }
                            description {
                                text
                            }
                            meta_link_share_image {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodySlider {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            slide_description {
                                html
                                text
                                raw
                            }
                            slide_caption
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBodyVideo {
                        slice_type
                        items {
                            video {
                                embed_url
                                html
                            }
                            video_title {
                                text
                            }
                            __typename
                        }
                    }
                }
            }
        }
    }
`;
