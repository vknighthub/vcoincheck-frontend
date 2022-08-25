import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProjectSvg from './../../../svg/Project/ProjectSvg';


function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <div className="conteact-next c-pointer" onClick={onClick}>
         <i className="las la-long-arrow-alt-right" />
      </div>
   );
}

const Project = (props) => {

   const listProject = props.topproject

   const settings = {
      slidesToShow: 7,
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
               slidesToShow: 5,
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
         {listProject.map((project, index) => (
            <div className="items" key={index}>
               <div>
                  <NavLink to={`/ecom-project-detail/${project.proname}`}>
                     <ProjectSvg image={project.proicon} width={120} height={120} style={{ minHeight: 120 }} />
                     <h5 className="text-black mt-4">{project.proname}</h5>
                     <span className="fs-12">{project.protype}</span>
                  </NavLink>

               </div>
            </div>
         ))}
      </Slider>
   );
};

export default Project;
