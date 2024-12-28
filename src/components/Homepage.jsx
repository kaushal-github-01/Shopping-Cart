import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Homepage.css";

import image1 from "../assets/Clothes/clothes-img1.jpeg";
import image2 from "../assets/Clothes/clothes-img2.jpeg";
import image3 from "../assets/Clothes/clothes-img3.jpeg";
import image4 from "../assets/Clothes/clothes-img4.jpeg";
import image5 from "../assets/Clothes/clothes-img5.jpeg";
import image6 from "../assets/Clothes/clothes-img6.jpeg";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div id="homepage-container">
        <p id="homepage-description-para">
          Virtual Vogue is an online fashion boutique dedicated to bringing you
          the latest styles and trends. We carefully curate our collections to
          offer a diverse range of clothing, accessories, and footwear for every
          occasion. With easy navigation, secure checkout, and fast shipping,
          Virtual Vogue makes online shopping a seamless and enjoyable
          experience.
        </p>
        <div id="homepage-slider-images">
          <Slider {...settings}>
            <div>
              <img src={image1} alt="image1" />
            </div>
            <div>
              <img src={image2} alt="image2" />
            </div>
            <div>
              <img src={image3} alt="image3" />
            </div>
            <div>
              <img src={image4} alt="image4" />
            </div>
            <div>
              <img src={image5} alt="image5" />
            </div>
            <div>
              <img src={image6} alt="image6 " />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Homepage;
