import React, { Fragment } from "react";
import ProjectTypeList from "./Project/ProjecTypetList";
import PageTitle from "../../layouts/PageTitle";
import { withTranslation, useTranslation } from "react-i18next";


const ProjectType = () => {
   const { t } = useTranslation();
   return (
      <Fragment>
         <>
            <PageTitle activeMenu={t('projecttype')} motherMenu={t('project')} path={"project"}/>
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

export default withTranslation()(ProjectType);
