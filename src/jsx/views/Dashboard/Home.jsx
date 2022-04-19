import { Fragment } from "react";
import banner from "../../../images/banner/main-banner.png";
import slogan from "../../../images/banner/slogan.png";
import BestProject from "./project/BestProject";
import ProjectList from "./project/ProjectList";



const Home = () => {
   return (
      <Fragment>
         <>
            <div className="row">
               
               <BestProject/>
               
               <div className="col-xl-6 col-xxl-12 col-lg-12">
                  <div className="card">
                     <img src={banner} alt="" className="img-fluid w-100" />
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-12 col-lg-12">
                  <div className="card">
                     <img src={slogan} alt="" className="img-fluid w-100" />
                  </div>
               </div>
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <ProjectList title="HOT PROJECT"/>
                  </div>
               </div>
               
               
            </div>
         </>
      </Fragment>
   );
};

export default Home;
