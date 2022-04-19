/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from 'react-redux';
import { getProjectsAction } from '../../../../store/actions/ProjectAction';
import FilteringTable from "../../../components/table/FilteringTable/FilteringTable";
import { COLUMNSFILTER } from './Columns';


const ProjectTable = (props) => {

    const projects = props.projects;
    useEffect(() => {
        props.fetchTopProject();
    },[])

    return (
        <>
            <div className="card">
                <div className="card-header d-block d-sm-flex border-0">
                    <div>
                        <h4 className="fs-20 text-black">{props.title}</h4>
                    </div>
                </div>
                <div className="card-body tab-content p-0">
                    <FilteringTable colunmsfilter={COLUMNSFILTER} datafilter={projects}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProjectTable);

