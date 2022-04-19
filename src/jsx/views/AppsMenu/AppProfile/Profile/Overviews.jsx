import { Dropdown } from "react-bootstrap";
import profile from '../../../../../images/profile/profile.png';
import FileDialogue from '../../../../components/bootstrap/FileDialogue';


export const Overviews = (props) => {

    const user = props.users;

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="profile card card-body px-3 pt-3 pb-0">
                    <div className="profile-head">
                        <div className="photo-content">
                            <div className="cover-photo"></div>
                        </div>
                        <div className="profile-info">
                            <div className="profile-photo">
                                <FileDialogue image={user.avatar ? user.avatar : profile} username ={user.username}/>
                            </div>
                            <div className="profile-details">
                                <div className="profile-name px-3 pt-2">
                                    <h4 className="text-primary mb-0">{`${user.firstname}  ${user.lastname}`}</h4>
                                </div>
                                <div className="profile-email px-2 pt-2">
                                    <p>{user.username}</p>
                                </div>
                                <Dropdown className="dropdown ml-auto">
                                    <Dropdown.Toggle
                                        variant="primary"
                                        className="btn btn-primary light sharp i-false"
                                        data-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18px"
                                            height="18px"
                                            viewBox="0 0 24 24"
                                            version="1.1"
                                        >
                                            <g
                                                stroke="none"
                                                strokeWidth="1"
                                                fill="none"
                                                fillRule="evenodd"
                                            >
                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                            </g>
                                        </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                        <Dropdown.Item className="dropdown-item">
                                            <i className="fa fa-users text-primary mr-2" />
                                            View Project Details
                                        </Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item">
                                            <i className="fa fa-image text-primary mr-2" />
                                            Change cover
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overviews