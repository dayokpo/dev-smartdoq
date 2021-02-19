import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';
import ImageSlider from '../ImageSlider';


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
const Gallery = ({ brochureImages }) => {

  const slider = useRef();
    const [lightboxController, setLightboxController] = useState({
        toggler: true,
        slide: 1,
    });

    const images = brochureImages.map((item, index) => {
        console.log(" item ", item.slide_image.url)
        return (
            <img src={item.slide_image.url}  onClick={() => openLightboxOnSlide(index)}/>
        );
    });
    function openLightboxOnSlide(number) {
        console.log(" hi ")
        number++;
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        });
    }
    const imageSourceUrls = brochureImages.map((slide)=>slide.slide_image.url);
    return (
        <div className="overlay">
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
