/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from 'react-redux';
import { getProjectsAction } from '../../../../store/actions/ProjectAction';
import FilteringTable from "../../../components/table/FilteringTable/FilteringTable";
import { COLUMNSFILTER as COLUMNS_EN } from './locale/en/Columns';
import { COLUMNSFILTER as COLUMNS_JP } from './locale/jp/Columns';
import { COLUMNSFILTER as COLUMNS_VN } from './locale/vn/Columns';

import i18next from 'i18next';


const ProjectTable = (props) => {

    const { projects, title } = props;

    const columns = () => {
        switch (i18next.language) {
            case 'en': return COLUMNS_EN
            case 'vn': return COLUMNS_VN
            case 'jp': return COLUMNS_JP
            default: return COLUMNS_EN
        }
    }

    useEffect(() => {
        props.fetchTopProject();
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header d-block d-sm-flex border-0">
                    <div>
                        <h4 className="fs-20 text-black">{title}</h4>
                    </div>
                </div>
                <div className="card-body tab-content p-0">
                    <FilteringTable colunmsfilter={columns()} datafilter={projects} />
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

