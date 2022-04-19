import React, { Fragment } from "react";
import ProjectTypeList from "./Project/ProjecTypetList";
import PageTitle from "../../layouts/PageTitle";


const ProjectType = () => {
   return (
      <Fragment>
         <>
            <PageTitle activeMenu="Project Type" motherMenu="Project" />
            <div className="row">
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <ProjectTypeList />
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default ProjectType;
