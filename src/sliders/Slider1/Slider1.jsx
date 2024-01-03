import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Slider1.scss';

const Slider1 = () => {
  const properties = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // const properties = {
  //   dots: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  // };

  // const properties = {
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 2,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  // };

  // const properties = {
  //   dots: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  // };

  // const properties = {
  //   dots: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   fade: true,
  // };


  return (
    <div className='slider-container'>
      <h1>Slider</h1>
      <Slider { ...properties } className='slider'>
        <div className='img-container primary'>
          <img
            src={ require("../../assets/images/car1.jpg") }
            alt='img'
          />
        </div>
        <div className='img-container secondary'>
          <img
            src={ require("../../assets/images/car2.jpeg") }
            alt='img'
          />
        </div>
        <div className='img-container primary'>
          <img
            src={ require("../../assets/images/car3.jpeg") }
            alt='img'
          />
        </div>
        <div className='img-container secondary'>
          <img
            src={ require("../../assets/images/car4.jpeg") }
            alt='img'
          />
        </div>
        <div className='img-container primary'>
          <img
            src={ require("../../assets/images/car5.jpg") }
            alt='img'
          />
        </div>
        <div className='img-container secondary'>
          <img
            src={ require("../../assets/images/car6.jpeg") }
            alt='img'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slider1;
