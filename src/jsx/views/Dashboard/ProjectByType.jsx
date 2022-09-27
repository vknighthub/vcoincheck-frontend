/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import React, { useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getProjectByProTypeAction } from '../../../store/actions/ProjectAction';
import { ProjectSvg } from "../../components/svg";

const ProjectByType = (props) => {
  const { projectbytype } = props
  const protypecd = atob(props.match.params.protypecd);

  const { t } = useTranslation();

  const project = projectbytype.project_list
  const protype = projectbytype.protype_infor

  useEffect(() => {
    const postdata = {
      protypecd: protypecd
    }
    props.fetchProjectByType(postdata);
  }, [])

  return (
    <>
      {protype && protype.description && parse(protype.description)}

      <div className="row mt-5">
        {project && project.map((project, index) => (
          <div className="col-lg-12 col-xl-4" key={index}>
            <div className="card">
              <div className="card-body">
                <NavLink to={`/ecom-project-detail/${project.proname}`} className="text-black">
                  <div className="row m-b-30">
                    <div className="col-md-5 col-xxl-12">
                      <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                        <div className="new-arrivals-img-contnent">
                          <ProjectSvg image={project.proicon} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-7 col-xxl-12">
                      <div className="new-arrival-content position-relative">
                        <h4>
                          {project.proname}
                        </h4>
                        <div className="comment-review star-rating">
                          <ul id="stars"
                            className="d-flex justify-content-center align-items-center">
                            {t('score')}
                          </ul>
                          <p className="price mt-3">{project.scores}</p>
                        </div>
                        <p>
                          {t('availability')}:{" "}
                          <span className="item">
                            {" "}
                            <i className="fa fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>
                          {t('projectcode')}: <span className="item">{project.procd}</span>{" "}
                        </p>
                        <p>
                          {t('ecosystem')}: <span className="item">{project.Ecosystem}</span>{" "}
                        </p>
                        <span className="text-content fs-14">
                          {parse(project.prodescr.substring(0, 225))}
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    projectbytype: state.projectbytype
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectByType: (protypetype) => {
      dispatch(getProjectByProTypeAction(protypetype))
    }
  }
}
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ProjectByType));
