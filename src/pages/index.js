import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout/";
import PrismicLogo from "../components/PrismicLogo";
import OverlayModel from "../components/overlayModel";
import ThreeDOverlay from "../components/threeDOverlay";
import Wrapper from "../components/wrapper";
import EmptyOverlayModel from "../components/emptyOverlayModel";
import Metadata from "../components/metadata";
import LeftMenu from "../components/menu/leftMenu";
import RightMenu from "../components/menu/rightMenu";
import LogoDesc from "../components/LogoDesc";
import Gallery from "../components/Gallery";
import VideoGallery from "../components/VideoGallery";
import DegreeOverlay from "../components/DegreeOverlay";
//flex controls images
import threeDModelImage from "../files/flexControls/threeDModelImage.png";
import iframeImage from "../files/flexControls/iframeImage.png";
import photoImage from "../files/flexControls/photoImage.png";
import pdfImage from "../files/flexControls/pdfImage.png";
import videoImage from "../files/flexControls/videoImage.png";
import websiteImage from "../files/flexControls/websiteImage.png";
import fiftyFiftyImage from "../files/flexControls/fiftyFiftyImage.png";
import threeSixtyCarouselImage from "../files/flexControls/threeSixtyCarouselImage.png";

//flex controls components
import ThreeDModelComponent from "../components/flexControls/ThreeDModelComponent";
import IFrameComponent from "../components/flexControls/IFrameComponent";
import PdfComponent from "../components/flexControls/PdfComponent";
import PhotoComponent from "../components/flexControls/PhotoComponent";
import VideoComponent from "../components/flexControls/VideoComponent";
import WebsiteComponent from "../components/flexControls/WebsiteComponent";
import ThreeSixtyCarouselComponent from "../components/flexControls/ThreeSixtyCarouselComponent";
import FiftyFiftyComponent from "../components/flexControls/FiftyFiftyComponent";

//Flex Control Overlay Components to kick the journey
import PDFSlider from "../components/PDFSlider";

import "../globalStyles.css";
import "../portret.css";
import "../socialIcons.css";
import "../hamburgers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as constants from "../utils/constants";
import {
  getWebsiteHeaderData,
  //getVideoMapSlice,
  getSocialUrls,
  getMenuData,
  getWebsiteMeta,
  showRightMenu,
  menuStyle,
  getSliderData,
  getVideoSliderData,
  getPDFData,
  getTopRightData,
  getIFrameData,
  getWebsiteData,
} from "../utils/index";
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
  const videoSliderData = getVideoSliderData(data);
  const websiteHeaderData = getWebsiteHeaderData(data);
  const websiteData = getWebsiteData(data);
  // const videoMapSlice = getVideoMapSlice(data);
  const iframeData = getIFrameData(data);
  const socialURLs = getSocialUrls(data);
  const menuData = getMenuData(data);
  const websiteMeta = getWebsiteMeta(data);
  const topRightData = getTopRightData(data);
  const [open, setOpen] = useState(false);

  const [openIframeOverlay, setIFrameOverlay] = useState(false);
  const [openPdfOverlay, setPdfOverlay] = useState(false);
  const [openPhotoOverlay, setPhotoOverlay] = useState(false);
  const [threeDModelOverlay, setThreeDModelOverlay] = useState(false);
  const [openVideOverlay, setVideoOverlay] = useState(false);
  const [websiteOverlay, setWebsiteOverlay] = useState(false);
  const [threeSixtyCarousel, setThreeSixtyCarousel] = useState(false);
  const [fiftyFifty, setFiftyFifty] = useState(false);

  const [showEmptyOverlay, setShowEmptyOverlay] = useState(false);

  return (
    <>
      <Layout>
        <Metadata websiteMeta={websiteMeta} uid={data.prismicBlogpost.uid} />
        <Wrapper bgurl={websiteHeaderData.backgroundImage}>
          {!open && (
            <LeftMenu
              src={menuData.menu_left_icon.url}
              type="image"
              style={menuStyle(menuData, "left")}
              onClick={() => setOpen(!open)}
            />
          )}
          {showRightMenu(menuData) && !showEmptyOverlay && !open && (
            <RightMenu
              src={menuData.menu_right_icon.url}
              type="image"
              style={menuStyle(menuData, "right")}
              onClick={() => setShowEmptyOverlay(!showEmptyOverlay)}
            />
          )}
          <LogoDesc
            logo={websiteHeaderData.logoImage}
            desc={websiteHeaderData.logoDescription}
          />
          <div className="controlFlex">
            {websiteHeaderData.enabledChoices.map((choice) => {
              const { PDF, PHOTO_GALLERY, VIDEO_GALLERY, WEBSITE } = constants;
              switch (choice) {
                case PDF:
                  return (
                    <PdfComponent
                      src={pdfImage}
                      type="image"
                      className="box"
                      onClick={() => setPdfOverlay(!openPdfOverlay)}
                    />
                  );
                case PHOTO_GALLERY:
                  return (
                    <PhotoComponent
                      src={photoImage}
                      type="image"
                      value=""
                      className="box"
                      onClick={() => setPhotoOverlay(!openPhotoOverlay)}
                    />
                  );
                case VIDEO_GALLERY:
                  return (
                    <VideoComponent
                      src={videoImage}
                      type="image"
                      value=""
                      className="box"
                      onClick={() => setVideoOverlay(!openVideOverlay)}
                    />
                  );
                case WEBSITE:
                  return (
                    <WebsiteComponent
                      src={websiteImage}
                      type="image"
                      value=""
                      className="box"
                      onClick={() => setWebsiteOverlay(!websiteOverlay)}
                    />
                  );
                case constants.IFRAME:
                  return (
                    <IFrameComponent
                      src={iframeImage}
                      type="image"
                      value=""
                      className="box"
                      onClick={() => setIFrameOverlay(!openIframeOverlay)}
                    />
                  );
                case constants.THREE_D_MODEL:
                  return (
                    <ThreeDModelComponent
                      src={threeDModelImage}
                      type="image"
                      className="box"
                      onClick={() => setThreeDModelOverlay(!threeDModelOverlay)}
                    />
                  );
                case constants.THREE_D_CAROUSEL:
                  return (
                    <ThreeSixtyCarouselComponent
                      src={threeSixtyCarouselImage}
                      type="image"
                      value=""
                      className="box"
                      onClick={() => setThreeSixtyCarousel(!threeSixtyCarousel)}
                    />
                  );
                case constants.FIFTY_FIFTY:
                  return (
                    <FiftyFiftyComponent
                      src={fiftyFiftyImage}
                      type="image"
                      value=""
                      className="box"
                      onClick={() => setFiftyFifty(!fiftyFifty)}
                    />
                  );
              }
            })}
          </div>
          <PrismicLogo
            src={websiteHeaderData.footerImage}
            type="image"
            value=""
            onClick={() => window.open(websiteHeaderData.footerLink)}
          />
          <FooterLine src={websiteHeaderData.footerLineImage} />
        </Wrapper>

        {/* open left Overlay */}
        {open && (
          <OverlayModel
            removeOverlay={() => setOpen(!open)}
            socialURLs={socialURLs}
          />
        )}

        {/* open right Overlay */}
        {showEmptyOverlay && (
          <EmptyOverlayModel
            topRightData={topRightData}
            removeOverlay={() => setShowEmptyOverlay(!showEmptyOverlay)}
          />
        )}
        {/* 1 open Photo Gallery overlay */}
        {openPhotoOverlay && (
          <Gallery
            removeOverlay={() => {
              setPhotoOverlay(!openPhotoOverlay);
            }}
            brochureImages={brochureImages}
            // data={videoMapSlice}
          />
        )}

        {/* 2 open 360 - three D Model - IFRAME  -- virtual tour*/}
        {openIframeOverlay && (
          <ThreeDOverlay
            data={iframeData}
            removeOverlay={() => setIFrameOverlay(!openIframeOverlay)}
          />
        )}
        {/* 3 open video overlay */}
        {openVideOverlay && (
          <VideoGallery
            videoData={videoSliderData}
            removeOverlay={() => setVideoOverlay(!openVideOverlay)}
          />
        )}
        {/* 4 open pdf overlay */}
        {openPdfOverlay && (
          <PDFSlider
            pdfDataFromSlider={pdfDataFromSlider}
            removeOverlay={() => setPdfOverlay(!openPdfOverlay)}
          />
        )}

        {/* 5 Website */}
        {websiteOverlay && (
          <DegreeOverlay
            data={websiteData}
            removeOverlay={() => setWebsiteOverlay(!websiteOverlay)}
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
              pdf {
                url
              }
              slide_caption
              __typename
            }
          }
          ... on PrismicBlogpostBodyIframe {
            slice_type
            primary {
              embed_url {
                embed_url
                html
              }
              move_the_x_to_the_left
            }
            slice_label
            slice_type
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
              title_under_thumbnail {
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
          ... on PrismicBlogpostBodyWebsiteAdd {
            id
            primary {
              move_the_x_to_the_left
              website_address {
                url
              }
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
