import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import im1 from './imgs/im1.webp';
import im2 from './imgs/im2.png';

import im4 from './imgs/im4.jpg';
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      

      <div>
         <img src={im1} alt="" height={"600px"}  width={"800px"}/>
        </div>
        
        <div>
        <img src={im2} alt="" height={"600px"}  width={"800px"}/>
        </div>
        <div>
        <img src={im4} alt="" height={"600px"}  width={"800px"}/>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
