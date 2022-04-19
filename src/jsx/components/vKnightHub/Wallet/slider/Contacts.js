import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import profile10 from "../../../../../images/profile/10.jpg";
import profile11 from "../../../../../images/profile/11.jpg";
import profile12 from "../../../../../images/profile/12.jpg";
import profile13 from "../../../../../images/profile/13.jpg";
import profile14 from "../../../../../images/profile/14.jpg";
import profile15 from "../../../../../images/profile/15.jpg";

function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <div className="conteact-next c-pointer" onClick={onClick}>
         <i className="las la-long-arrow-alt-right" />
      </div>
   );
}

const Contacts = () => {
   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      infinite: true,
      touchMove: true,
      className: "contacts-card",
      centerPadding: "60px",
      speed: 100,
      accessibility: false,
      nextArrow: <SampleNextArrow />,
      responsive: [
		
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
		 {
            breakpoint: 360,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <Slider {...settings}>
         <div className="items">
            <div>
               <img className="mb-3" src={profile10} alt="" />
               <h5 className="text-black mb-0">Samuel</h5>
               <span className="fs-12">@sam224</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile11} alt="" />
               <h5 className="text-black mb-0">Cindy</h5>
               <span className="fs-12">@cindyss</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile12} alt="" />
               <h5 className="text-black mb-0">David</h5>
               <span className="fs-12">@davidxc</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile13} alt="" />
               <h5 className="text-black mb-0">Martha </h5>
               <span className="fs-12">@marthaa</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile14} alt="" />
               <h5 className="text-black mb-0">Olivia </h5>
               <span className="fs-12">@oliv62</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile15} alt="" />
               <h5 className="text-black mb-0">Bella</h5>
               <span className="fs-12">@bellazz</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile10} alt="" />
               <h5 className="text-black mb-0">Samuel</h5>
               <span className="fs-12">@sam224</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile11} alt="" />
               <h5 className="text-black mb-0">Cindy</h5>
               <span className="fs-12">@cindyss</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile12} alt="" />
               <h5 className="text-black mb-0">David</h5>
               <span className="fs-12">@davidxc</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile13} alt="" />
               <h5 className="text-black mb-0">Martha </h5>
               <span className="fs-12">@marthaa</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile14} alt="" />
               <h5 className="text-black mb-0">Olivia </h5>
               <span className="fs-12">@oliv62</span>
            </div>
         </div>
         <div className="items">
            <div>
               <img className="mb-3" src={profile15} alt="" />
               <h5 className="text-black mb-0">Bella</h5>
               <span className="fs-12">@bellazz</span>
            </div>
         </div>
      </Slider>
   );
};

export default Contacts;
