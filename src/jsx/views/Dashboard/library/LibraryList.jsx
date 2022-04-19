import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import project10 from "../../../../images/project/10.png";
import project11 from "../../../../images/project/11.png";

function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <div className="conteact-next c-pointer" onClick={onClick}>
         <i className="las la-long-arrow-alt-right" />
      </div>
   );
}

const Library = () => {
   const settings = {
      slidesToShow: 3,
      variableWidth: true,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 2000,
      centerMode: false,
      infinite: true,
      touchMove: true,
      className: "contacts-card",
      centerPadding: "100px",
      speed: 100,
      accessibility: false,
      nextArrow: <SampleNextArrow />,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               centerPadding: 0,
               centerMode: false,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               centerPadding: 0,
               centerMode: false,
            },
         },
      ],
   };
   return (
      <Slider {...settings}>
         <div className="items">
            <div>
               <a href="#dictionary">
               <img className="mb-3 mx-auto d-block" src={project10} alt="" />
               <h5 className="text-black text-center mb-0 mr-3">Dictionary</h5>
               </a>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3 mx-auto d-block" src={project11} alt="" />
               <h5 className="text-black text-center mb-0 mr-3">Cardano knowledge</h5>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3 mx-auto d-block" src={project11} alt="" />
               <h5 className="text-black text-center mb-0 mr-3">Blockchain knowledge</h5>
            </div>
         </div>
      </Slider>
   );
};

export default Library;
