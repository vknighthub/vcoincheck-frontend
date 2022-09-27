/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown } from "react-bootstrap";
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import profile from '../../../images/profile/profile.png';
import { logout } from "../../../store/actions/AuthActions";
import { isAdmin, isAuthenticated } from "../../../store/selectors/AuthSelectors";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../components/vKnightHub/connector";
import { truncateAddress } from './../../../utils/truncateAddress';

const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();
    function onLogout() {
        dispatch(logout(props.history));
    }

    const connectWallet = () => {
        activate(connectors.injected);
    }

    const disconnectWallet = () => {
        deactivate()
    }


    if (props.isAuthenticated) {
        return (
            <>
                <Dropdown className="nav-item dropdown header-profile ">
                    <Dropdown.Toggle
                        as="a"
                        to="#"
                        variant=""
                        className="nav-link i-false c-pointer"
                    >
                        <div className="header-info">
                            <span className="text-black">
                                {t('hello')}, <strong>{props.fullname}</strong>
                            </span>
                            <p className="fs-12 mb-0">{props.isadmin ? "Admin" : "Normal user"}</p>
                        </div>
                        <img src={props.avatar ? props.avatar : profile} width={20} alt="" className="img-fluid" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="right">
                        {!active ?
                            <Link to="#" className="dropdown-item ai-icon" onClick={() => connectWallet()}>
                                <i className="fa fa-wallet"></i>
                                <span className="ml-2">{t('connectwallet')}</span>
                            </Link>
                            :
                            <>
                                <Link to="#" className="dropdown-item ai-icon" onClick={() => disconnectWallet()}>
                                    <i className="fa fa-wallet"></i>
                                    <span className="ml-2">{truncateAddress(account)}</span>
                                </Link>
                            </>

                        }
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
                            <span className="ml-2">{t('profile')}</span>
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
                            <span className="ml-2"> {t('logout')} </span>
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
                        <span className="ml-2"> {t('logins')} </span>
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

export default withTranslation()(withRouter(connect(mapStateToProps)(ProfilePage)));
