/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserRolesAction } from '../../../../store/actions/UserAction';
import PageTitle from "../../../layouts/PageTitle";

const UserRole = (props) => {
    const { t } = useTranslation();
    const history = useHistory()
    const data = props.userroles;

    useEffect(() => {
        props.fetchData(history);
    }, [])

    function showUserRoles(listdata) {
        let result = null;
        if (listdata.length > 0) {
            result = listdata.map((data, index) => {
                return (
                    <>
                        <tr>
                            <td className="font-w500">
                                {data.roleid}
                            </td>
                            <td className="font-w500">
                                {data.rolename}
                            </td>
                            <td className="font-w500">
                                {data.roledescription}
                            </td>
                        </tr>
                    </>
                )
            })
        }
        return result;
    };

    return (
        <Fragment>
            <>
                <PageTitle activeMenu="User Role" motherMenu="User Management" />
                <div className="row">
                    <div className="col-xl-12 col-xxl-12 col-lg-12">
                        <div className="card">
                            <div className="card-header d-block d-sm-flex border-0">
                                <div>
                                    <h4 className="fs-20 text-black">{t('userrole')}</h4>
                                </div>
                            </div>
                            <div className="card-body tab-content p-0">
                                <div className="table-responsive">
                                    <table className="table shadow-hover card-table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <strong>{t('roleid')}</strong>
                                                </th>
                                                <th>
                                                    <strong>{t('rolename')}</strong>
                                                </th>
                                                <th>
                                                    <strong>{t('roledescription')}</strong>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {showUserRoles(data)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        userroles: state.userroles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (history) => {
            dispatch(getUserRolesAction(history))
        }
    }
}
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(UserRole));
