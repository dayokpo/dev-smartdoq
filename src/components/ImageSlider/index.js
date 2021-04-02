import * as React from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SliderWrapper = styled.div`
  // padding: 25px 0;
  background: black;
  position: relative;
  flex-wrap: wrap;
  height: 100vh;
  width: 90%;
  max-width: 90%;
  align-items: center;
  border-top: 60px solid #000;
  overflow: auto;

  ${(props) =>
    props.separator &&
    `
    .slick-slide.slick-current,
    .slick-slide.slick-current + .slick-slide {
      // border-right: 2px solid #FFF;
    }
  `}

  .slick-slider {
    width: 100%;
  }

  .slick-slide {
    float: left;
    min-height: 1px;
    width: 20% !important;
    overflow: hidden;
    position: relative;
    border: 5px solid transparent;
    // padding: 5px;
    /*For box shadow */
  }
  .slick-list {
    transition: height 0.5s;
  }
  .slick-slider .slick-list .slick-slide div {
    width: 100%;
    padding-top: 56.25%;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100% !important;
    transform: none !important;
  }

  .slick-slide img {
    width: 100% !important;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    position: absolute;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    text-align: center;
    padding: 15px;
    margin-bottom: 6px;
    height: 3px;
    width: 30px;
    z-index: 10;
    display: none !important;
  }

  .slick-prev {
    transform: ${(props) =>
      props.contained
        ? `translate(50px, -50%) rotate(90deg)`
        : `translate(-50px, -50%) rotate(90deg)`};
    left: 0;
  }

  .slick-next {
    transform: ${(props) =>
      props.contained
        ? `translate(-50px, -50%) rotate(-90deg)`
        : `translate(50px, -50%) rotate(-90deg)`};
    right: 0;
  }
  .slick-prev:before,
  .slick-next:before,
  .slick-prev:after,
  .slick-next:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    width: 50%;
    border-bottom: 3px solid #fff;
    transform: skew(0deg, 35deg);
  }
  .slick-prev:after,
  .slick-next:after {
    top: 0;
    right: 0;
    left: auto;
    transform: skew(0deg, -35deg);
  }
  .slick-dots {
    display: none !important;
    position: initial;
    display: flex;
    justify-content: center;
    list-style-type: none;

    li {
      width: 15px;
      height: 15px;
      margin: 0 0 3px;
    }
    button {
      display: block;
      width: 3px;
      height: 3px;
      padding: 0;
      margin: auto;
      line-height: 100%;
      border: none;
      border-radius: 100%;
      background-color: #fff;
      text-indent: -9999px;
    }
    .slick-active button {
      width: 6px;
      height: 6px;
    }
  }
`;
const ImageSlider = (props) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SliderWrapper separator={true} separator={true} padding={true}>
      <Slider {...settings}>{props.children}</Slider>
    </SliderWrapper>
  );
};

export default ImageSlider;
