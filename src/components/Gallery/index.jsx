import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';
import ImageSlider from '../ImageSlider';
import * as Icon from 'react-feather';


const Image = styled.div`
    position: absolute;

    img {
       
        background-color: red;
    }
`;
const ExpandSectionBtn = styled.div`
    fill: white;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
`;
const MainImageWrapper = styled.div`
  height: 259px;
  margin-bottom: 10px;
  position: absolute;
  background-color: white;

  .slick-dots {
    position: absolute;
    bottom: 0;
    width: 70%;
    left: 15%;

    li {
      width: 10px;
    }
  }
`;
const Gallery = ({ brochureImages, removeOverlay }) => {
    const [ showGallery, setShowGallery] = useState(Boolean(brochureImages.length));

  const slider = useRef();
    const [lightboxController, setLightboxController] = useState({
        toggler: true,
        slide: 1,
    });

    const images = brochureImages.map((item, index) => {
        return (
            <img key={index} src={item.slide_image.url}  onClick={() => openLightboxOnSlide(index)}/>
        );
    });
    function openLightboxOnSlide(number) {
        number++;
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        });
    }
    let imageSourceUrls = undefined;
    if(showGallery){
        imageSourceUrls = brochureImages.map((slide)=>slide.slide_image.url);
    } else{
        return(<div className="overlay">
            
         <Icon.X className="overlay-close" onClick={(e) => removeOverlay()}/>
         <div> please upload images from prismic to display</div>
        </div>)
    }
    return (
        <div className="overlay">
            
         <Icon.X className="overlay-close" onClick={(e) => removeOverlay()}/>
        <ImageSlider>
            {images}
        </ImageSlider>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={imageSourceUrls}
          slide={lightboxController.slide}
        />
        </div>
    );
};

export default Gallery;
