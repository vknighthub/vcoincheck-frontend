/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getProjectsAction } from '../../../../store/actions/ProjectAction';
import HotProject from './HotProject';

const ProjectList = (props) => {


    const projects = props.projects;

    useEffect(() => {
        props.fetchTopProject();
    },[])

    function showProjects(projectData) {
        let result = null;
        if (projectData.length > 0){
            result = projectData.map((project,index) => {
                return (
                    <HotProject key={index} project={project} index={index}/>
                )
            })  
        }
        return result;
    };

    return (
            <>
                <div className="card-header d-block d-sm-flex border-0">
                    <div>
                        <h4 className="fs-20 text-black">{props.title}</h4>
                    </div>  
                </div>
                <div className="card-body tab-content p-0">
                    <div className="table-responsive">
                        <table className="table shadow-hover card-table">
                        <thead>
                            <tr>
                                <th className="width80">
                                    <strong>No</strong>
                                </th>
                                <th>
                                    <strong>Name</strong>
                                </th>
                                <th>
                                    <strong>ECOSystem</strong>
                                </th>
                                <th>
                                    <strong>Categories</strong>
                                </th>
                                <th>
                                    <strong>Status</strong>
                                </th>
                                <th>
                                    <strong>No of viewed</strong>
                                </th>
                                <th>
                                    <strong>Last contributed</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {showProjects(projects)}
                        </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
};
const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchTopProject : () => {
            dispatch(getProjectsAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProjectList);

