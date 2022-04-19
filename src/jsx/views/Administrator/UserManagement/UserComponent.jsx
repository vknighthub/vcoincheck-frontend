import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteUserAction, loadingToggleAction } from "../../../../store/actions/UserAction";

const UserComponent = ({ user, index }) => {
    const dispatch = useDispatch();
    const getUserStatus = (status) => {
        switch (status) {
            case 'P':
                return <i className="fa fa-circle text-warning mr-1"> Pending to Approve</i>
            case 'N':
                return <i className="fa fa-circle text-success mr-1"> Normal</i>
            case 'C':
                return <i className="fa fa-circle text-danger mr-1"> Closed</i>
            default: return ''
        }
    }

    const handleDeleteUser = (userName, status) => {
        let postData = {
            username: userName
        }
        if (status === 'P') {
            dispatch(loadingToggleAction(true));
            dispatch(deleteUserAction(postData));
        }else{
            Swal.fire("Warning!", "This user is not allowed to be deleted", "warning");
        }

    }

    return (
        <tr>
            <td className="font-w500">
                {index + 1}
            </td>
            <td className="font-w500">
                {user.username}
            </td>
            <td className="font-w500">
                {user.firstname}
            </td>
            <td className="font-w500">
                {user.lastname}
            </td>
            <td className="font-w500">
                {user.gender === 1 ? "Male" : "Female"}
            </td>
            <td className="font-w500">
                {user.address}
            </td>
            <td className="font-w500">
                {user.email}
            </td>
            <td className="font-w500">

                {getUserStatus(user.status)}
            </td>
            <td>
                <div className="d-flex">
                    <NavLink to={`user-active-profile/${user.username}`}
                        href="#"
                        className="btn btn-success shadow btn-xs sharp mr-2"
                    >
                        <i className="fa fa-cube"></i>
                    </NavLink>
                    <Link
                        to="#"
                        onClick={() => handleDeleteUser(user.username, user.status)}
                        className="btn btn-danger shadow btn-xs sharp"
                    >
                        <i className="fa fa-trash"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default UserComponent;
