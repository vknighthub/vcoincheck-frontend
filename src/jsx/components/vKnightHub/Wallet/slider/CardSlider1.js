import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import card1 from "../../../../../images/card/card1.jpg";
import card2 from "../../../../../images/card/card2.jpg";
import card3 from "../../../../../images/card/card3.jpg";

const CardSlider1 = () => {
   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      infinite: true,
      touchMove: true,
      className: "card-slider-1",
      centerPadding: 0,
      speed: 500,
      accessibility: false,
   };

  
   return (
      <Slider {...settings}>
         <div className="items">
            <img src={card1} className="mw-100" alt="" />
         </div>
         <div className="items">
            <img src={card2} className="mw-100" alt="" />
         </div>
         <div className="items">
            <img src={card3} className="mw-100" alt="" />
         </div>
         <div className="items">
            <img src={card1} className="mw-100" alt="" />
         </div>
         <div className="items">
            <img src={card2} className="mw-100" alt="" />
         </div>
         <div className="items">
            <img src={card3} className="mw-100" alt="" />
         </div>
      </Slider>
   );
};

export default CardSlider1;
