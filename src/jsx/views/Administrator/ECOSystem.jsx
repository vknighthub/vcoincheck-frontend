import React, { Fragment } from "react";
import EcosystemList from "./Project/EcosystemList";
import PageTitle from "../../layouts/PageTitle";

const ECOSystem = () => {
   return (
      <Fragment>
         <>
            <PageTitle activeMenu="ECOSystem" motherMenu="Project" />
            <div className="row">
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <EcosystemList />
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default ECOSystem;
