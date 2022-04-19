import React, { Fragment } from "react";
import UserList from "./UserManagement/UserList";
import PageTitle from "../../layouts/PageTitle";

const UserManager = () => {
   return (
      <Fragment>
         <>
            <PageTitle activeMenu="User List" motherMenu="User Management" />
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

export default UserManager;
