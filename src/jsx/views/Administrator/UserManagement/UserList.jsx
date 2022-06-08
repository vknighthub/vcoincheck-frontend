/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsersAction } from '../../../../store/actions/UserAction';
import UserComponent from './UserComponent';

const UserList = (props) => {
    const { t } = useTranslation();

    const history = useHistory()
    const users = props.users;

    useEffect(() => {
        props.fetchUsers(history);
    }, [])

    function showUsers(userData) {
        let result = null;
        if (userData.length > 0) {
            result = userData.map((user, index) => {
                return (
                    <UserComponent key={index} user={user} index={index} t={t} />
                )
            })
        }
        return result;
    };

    return (
        <>
            <div className="card-header d-block d-sm-flex border-0">
                <div>
                    <h4 className="fs-20 text-black">User list</h4>
                </div>
            </div>
            <div className="card-body tab-content p-0">
                <div className="table-responsive">
                    <table className="table shadow-hover card-table">
                        <thead>
                            <tr>
                                <th>
                                    <strong>{t('no')}</strong>
                                </th>
                                <th>
                                    <strong>{t('username')}</strong>
                                </th>
                                <th>
                                    <strong>{t('firstname')}</strong>
                                </th>
                                <th>
                                    <strong>{t('lastname')}</strong>
                                </th>
                                <th>
                                    <strong>{t('gender')}</strong>
                                </th>
                                <th>
                                    <strong>{t('address')}</strong>
                                </th>
                                <th>
                                    <strong>{t('email')}</strong>
                                </th>
                                <th>
                                    <strong>{t('status')}</strong>
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {showUsers(users)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (history) => {
            dispatch(getUsersAction(history))
        }
    }
}
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(UserList));
