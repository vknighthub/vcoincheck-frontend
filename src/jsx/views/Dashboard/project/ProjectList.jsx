/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getProjectsAction } from '../../../../store/actions/ProjectAction';
import HotProject from './HotProject';

const ProjectList = (props) => {


    const { projects, t } = props;

    useEffect(() => {
        props.fetchTopProject();
    }, [])

    function showProjects(projectData) {
        let result = null;
        if (projectData.length > 0) {
            result = projectData.map((project, index) => {
                return (
                    <HotProject key={index} project={project} index={index} />
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
                                <th className="width100">
                                    <strong>{t('no')}</strong>
                                </th>
                                <th>
                                    <strong>{t('projectname')}</strong>
                                </th>
                                <th>
                                    <strong>{t('ECOSystem')}</strong>
                                </th>
                                <th>
                                    <strong>{t('categories')}</strong>
                                </th>
                                <th>
                                    <strong>{t('status')}</strong>
                                </th>
                                <th>
                                    <strong>{t('noofviewed')}</strong>
                                </th>
                                <th>
                                    <strong>{t('lastcontributed')}</strong>
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
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopProject: () => {
            dispatch(getProjectsAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

