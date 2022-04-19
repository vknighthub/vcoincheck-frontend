/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from 'react-redux';
import { getUsersAction } from '../../../../store/actions/UserAction';
import UserComponent from './UserComponent';
import { useHistory } from 'react-router-dom';

const UserList = (props) => {
    const history = useHistory()
    const users = props.users;

    useEffect(() => {
        props.fetchUsers(history);
    },[])

    function showUsers(userData) {
        let result = null;
        if (userData.length > 0){
            result = userData.map((user,index) => {
                return (
                    <UserComponent key={index} user={user} index={index}/>
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
                                        <strong>No</strong>
                                    </th>
                                    <th>
                                        <strong>User name</strong>
                                    </th>
                                    <th>
                                        <strong>First name</strong>
                                    </th>
                                    <th>
                                        <strong>Last name</strong>
                                    </th>
                                    <th>
                                        <strong>Gender</strong>
                                    </th>
                                    <th>
                                        <strong>Address</strong>
                                    </th>
                                    <th>
                                        <strong>Email</strong>
                                    </th>
                                    <th>
                                        <strong>Status</strong>
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
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUsers : (history) => {
            dispatch(getUsersAction(history))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);
