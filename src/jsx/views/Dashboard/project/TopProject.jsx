/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getHotProjectsAction } from '../../../../store/actions/ProjectAction';
import { ProjectSvg } from '../../../components/svg'
import StarRating from "./StarRating";
import GetStar from "../../../../utils/GetStar"
import parse from 'html-react-parser'

const TopProject = (props) => {

    const projectlist = props.hotproject

    useEffect(() => {
        props.fetchHotProject();
    }, [])

    return (
        <>
            <div className="row">
                {projectlist.map((project, index) => (
                    <div className="col-lg-12 col-xl-6" key={index}>
                        <div className="card">
                            <div className="card-body">
                            <NavLink to={`ecom-project-detail/${project.proname}`} className="text-black">
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
                                                    <StarRating numberOfSelectedStar={GetStar(project.totalreview)}/>
                                                </ul>
                                                <p className="price mt-3">{project.totalreview}</p>
                                            </div>
                                            <p>
                                                Availability:{" "}
                                                <span className="item">
                                                    {" "}
                                                    <i className="fa fa-check-circle text-success" />
                                                </span>
                                            </p>
                                            <p>
                                                Project code: <span className="item">{project.procd}</span>{" "}
                                            </p>
                                            <p>
                                                Ecosystem: <span className="item">{project.Ecosystem}</span>{" "}
                                            </p>
                                            <p className="text-content">
                                                {parse(project.prodescr.substring(0, 225))}
                                            </p>
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
        hotproject: state.hotproject
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchHotProject: () => {
            dispatch(getHotProjectsAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopProject);

