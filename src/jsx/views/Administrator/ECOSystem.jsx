import React, { Fragment } from "react";
import EcosystemList from "./Project/EcosystemList";
import PageTitle from "../../layouts/PageTitle";
import { withTranslation, useTranslation } from "react-i18next";

const ECOSystem = () => {
   const { t } = useTranslation();
   return (
      <Fragment>
         <>
            <PageTitle activeMenu={t('ecosystem')} motherMenu={t('project')} path={"project"} />
            <div className="row">
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <EcosystemList t={t} />
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default withTranslation()(ECOSystem);
