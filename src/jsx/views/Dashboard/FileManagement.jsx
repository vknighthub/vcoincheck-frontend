import React from 'react';
import { NavLink } from 'react-router-dom';
//Images
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { isAdmin, isAuthenticated } from '../../../store/selectors/AuthSelectors';
import { default as folder } from './../../../images/folder.png';


const FileManagement = (props) => {

  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6" >
          <div className="card project-boxed">
          <NavLink to={`${props.match.url}/${btoa('project')}`} className="text-black user-name">
              <div className="img-bx">
                <img src={folder} alt="" className=" mr-3 card-list-img w-100" />
                <span className="fs-16 text-primary input-group-text">Project</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6" >
          <div className="card project-boxed">
            <NavLink to={`${'/community-details'}/`} className="text-black user-name">
              <div className="img-bx">
                <img src={folder} alt="" className=" mr-3 card-list-img w-100" />
                <span className="fs-16 text-primary input-group-text">Event</span>
              </div>
            </NavLink>
          </div>
        </div>

      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    isadmin: isAdmin(state)
  };
};
export default withTranslation()(connect(mapStateToProps, null)(FileManagement));