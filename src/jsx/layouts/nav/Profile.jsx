import { Dropdown } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../../store/actions/AuthActions";
import { isAdmin, isAuthenticated } from "../../../store/selectors/AuthSelectors";
import profile from '../../../images/profile/profile.png'

function ProfilePage(props) {
    const dispatch = useDispatch();

    function onLogout() {
        dispatch(logout(props.history));
    }
    if (props.isAuthenticated) {
        return (
        <>
            <Dropdown className="nav-item dropdown header-profile ml-sm-4 ml-2">
                <Dropdown.Toggle
                    as="a"
                    to="#"
                    variant=""
                    className="nav-link i-false c-pointer"
                >
                    <div className="header-info">
                    <span className="text-black">
                        Hello, <strong>{props.fullname}</strong>
                    </span>
                    <p className="fs-12 mb-0">{props.isadmin ? "Admin" : "Normal user"}</p>
                    </div>
                    <img src={props.avatar ? props.avatar : profile} width={20} alt="" className="img-fluid" />
                </Dropdown.Toggle>

                <Dropdown.Menu align="right" className="mt-2">
                    <Link to="/app-profile" className="dropdown-item ai-icon">
                        <svg
                            id="icon-user1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        <span className="ml-2">Profile </span>
                    </Link>
                    
                    <Link to="#" className="dropdown-item ai-icon" onClick={onLogout}>
                    <svg
                        id="icon-logout"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                    </svg>
                    <span className="ml-2"> Logout </span>
                    </Link>
                </Dropdown.Menu>
            </Dropdown>
        </>
        );
    } else {
        return (
        <>
            <div className="nav-item dropdown">
                <Link className="dropdown-item ai-icon" to="/page-login">
                    <svg
                        id="icon-logout"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-success"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                    </svg>
                    <span className="ml-2"> Login </span>
                </Link>
            </div>
        </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
        fullname: state.auth.auth.result.firstname + ' ' + state.auth.auth.result.lastname,
        avatar: state.auth.auth.result.avatar,
        isadmin: isAdmin(state)
    };
};

export default withRouter(connect(mapStateToProps)(ProfilePage));
