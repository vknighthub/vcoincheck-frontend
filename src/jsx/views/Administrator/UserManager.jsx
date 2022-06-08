import React, { Fragment } from "react";
import UserList from "./UserManagement/UserList";
import PageTitle from "../../layouts/PageTitle";
import { withTranslation, useTranslation } from "react-i18next";

const UserManager = () => {
   const { t } = useTranslation();

   return (
      <Fragment>
         <>
            <PageTitle activeMenu={t('userlist')} motherMenu={t('usermanagement')} path={"user-list"} />
            <div className="row">
               <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                     <UserList />
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default withTranslation()(UserManager);
