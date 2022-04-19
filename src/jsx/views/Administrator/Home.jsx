import React, { Fragment } from "react";
import ProjectList from "./Project/ProjectList";

const Home = () => {
   return (
      <Fragment>
         <>
            <div className="row">
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <ProjectList />
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default Home;
