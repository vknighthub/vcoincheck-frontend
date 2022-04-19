import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { default as profile01, default as profile02, default as profile03, default as profile04, default as profile05, default as profile06, default as profile07 } from "../../../../../images/profile/profile.png";
import { UserDetails } from "../../../../../store/selectors/AuthSelectors";
import ProfileSetting from './ProfileSetting';
import UserReviewed from "./UserReviewed";


export const UserProfile = (props) => {

    const user = props.users;

    const [activeToggle, setActiveToggle] = useState("review");
    const [sendMessage, setSendMessage] = useState(false);


    const [replayModal, setReplayModal] = useState(false);

    const options = {
        settings: {
            overlayColor: "#000000",
        },
    };

    return (
        <div className="row">
            <div className="col-xl-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-statistics">
                                    <div className="text-center">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="m-b-0">4</h3><span>Reputation</span>
                                            </div>
                                            <div className="col">
                                                <h3 className="m-b-0">140</h3> <span>Evaluation</span>
                                            </div>
                                            <div className="col">
                                                <h3 className="m-b-0">{user.scores}</h3> <span>Point</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* send Modal */}
                                    <Modal className="modal fade" show={sendMessage}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Send Message</h5>
                                                <Button variant="" type="button" className="close" data-dismiss="modal" onClick={() => setSendMessage(false)}>
                                                    <span>×</span>
                                                </Button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="comment-form" onSubmit={(e) => { e.preventDefault(); setSendMessage(false); }}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label htmlFor="author" className="text-black font-w600">  Name <span className="required">*</span> </label>
                                                                <input type="text" className="form-control" defaultValue="Author" name="Author" placeholder="Author" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label htmlFor="email" className="text-black font-w600"> Email <span className="required">*</span></label>
                                                                <input type="text" className="form-control" defaultValue="Email" placeholder="Email" name="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label htmlFor="comment" className="text-black font-w600">Comment</label>
                                                                <textarea rows={8} className="form-control" name="comment" placeholder="Comment" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <input type="submit" value="Post Comment" className="submit btn btn-primary" name="submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                                <h5 className="text-black">Today Highlights</h5>
                            </div>
                            <div className="card-body pt-3"	>
                                <div className="profile-blog ">
                                    <img src={profile01} alt="profile" className="img-fluid  mb-4 w-100" />
                                    <Link to="/post-details"> <h4>Darwin Creative Agency Theme</h4> </Link>
                                    <p className="mb-0">
                                        A small river named Duden flows by their place and supplies
                                        it with the necessary regelialia. It is a paradisematic
                                        country, in which roasted parts of sentences fly into your
                                        mouth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                                <h5 className="text-black ">Interest</h5>
                            </div>
                            <div className="card-body pt-3">
                                <div className="profile-interest ">
                                    <SRLWrapper options={options}>
                                        <div className="row sp4">
                                            <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                <a href={profile02}> <img src={profile02} alt="profileImage" className="img-fluid" /> </a>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                <a href={profile03}> <img src={profile03} alt="profile" className="img-fluid" /></a>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                <a href={profile04}><img src={profile04} alt="profile" className="img-fluid" /> </a>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                {" "}
                                                <a href={profile02}><img src={profile02} alt="profile" className="img-fluid" /> </a>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                <a href={profile03} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col" >
                                                    <img src={profile03} alt="profile" className="img-fluid" />
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                <a href={profile04} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                                    <img src={profile04} alt="profile" className="img-fluid" />
                                                </a>
                                            </div>
                                        </div>
                                    </SRLWrapper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                                <h5 className="text-black">Our Latest News</h5>
                            </div>
                            <div className="card-body pt-3">
                                <div className="profile-news">
                                    <div className="media pt-3 pb-3">
                                        <img src={profile05} alt="" className="mr-3 rounded" width={75} />
                                        <div className="media-body">
                                            <h5 className="m-b-5">
                                                <Link to="/post-details" className="text-black">
                                                    Collection of textile samples
                                                </Link>
                                            </h5>
                                            <p className="mb-0">I shared this on my fb wall a few months back, and I thought. </p>
                                        </div>
                                    </div>
                                    <div className="media pt-3 pb-3">
                                        <img src={profile06} alt="" className="mr-3 rounded" width={75} />
                                        <div className="media-body">
                                            <h5 className="m-b-5">
                                                <Link to="/post-details" className="text-black">
                                                    Collection of textile samples
                                                </Link>
                                            </h5>
                                            <p className="mb-0">
                                                I shared this on my fb wall a few months back, and I
                                                thought.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="media pt-3 ">
                                        <img src={profile07} alt="" className="mr-3 rounded" width={75} />
                                        <div className="media-body">
                                            <h5 className="m-b-5">
                                                <Link to="/post-details" className="text-black">
                                                    Collection of textile samples
                                                </Link>
                                            </h5>
                                            <p className="mb-0">
                                                I shared this on my fb wall a few months back, and I thought.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="card">
                    <div className="card-body">
                        <div className="profile-tab">
                            <div className="custom-tab-1">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item" onClick={() => setActiveToggle("posts")}>
                                        <Link to="#my-posts" data-toggle="tab" className={`nav-link ${activeToggle === "review" ? "active show" : ""}`}>My review</Link>
                                    </li>
                                    <li className="nav-item" onClick={() => setActiveToggle("aboutMe")}>
                                        <Link to="#about-me" data-toggle="tab" className={`nav-link ${activeToggle === "aboutMe" ? "active show" : ""}`}>About Me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#profile-settings" data-toggle="tab" onClick={() => setActiveToggle("setting")} className={`nav-link ${activeToggle === "setting" ? "active show" : ""}`}>Setting</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="my-review" className={`tab-pane fade ${activeToggle === "review" ? "active show" : ""}`} >
                                        <div className="my-post-content pt-3">
                                            <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                                <UserReviewed />
                                            </div>

                                            {/* Modal */}
                                            <Modal show={replayModal} onHide={() => setReplayModal(false)} className="modal fade" id="replyModal">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Post Reply</h5>
                                                        <button type="button" className="close" onClick={() => setReplayModal(false)}><span>&times;</span></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <textarea className="form-control" rows="4">Message</textarea>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger light" onClick={() => setReplayModal(false)}>Close</button>
                                                        <button type="button" className="btn btn-primary">Reply</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div id="about-me" className={`tab-pane fade ${activeToggle === "aboutMe" ? "active show" : ""}`}>
                                        <div className="profile-about-me">
                                            <div className="pt-4 border-bottom-1 pb-3">
                                                <h4 className="text-primary">About Me</h4>
                                                <p className="mb-2">
                                                    A wonderful serenity has taken possession of my
                                                    entire soul, like these sweet mornings of spring
                                                    which I enjoy with my whole heart. I am alone, and
                                                    feel the charm of existence was created for the
                                                    bliss of souls like mine.I am so happy, my dear
                                                    friend, so absorbed in the exquisite sense of mere
                                                    tranquil existence, that I neglect my talents.
                                                </p>
                                                <p>
                                                    A collection of textile samples lay spread out on
                                                    the table - Samsa was a travelling salesman - and
                                                    above it there hung a picture that he had recently
                                                    cut out of an illustrated magazine and housed in a
                                                    nice, gilded frame.
                                                </p>
                                            </div>
                                        </div>


                                        <div className="profile-personal-info">
                                            <h4 className="text-primary mb-4">
                                                Personal Information
                                            </h4>
                                            <div className="row mb-2">
                                                <div className="col-3">
                                                    <h5 className="f-w-500"> Name<span className="pull-right">:</span></h5>
                                                </div>
                                                <div className="col-9">
                                                    <span>{`${user.firstname}  ${user.lastname}`}</span>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-3">
                                                    <h5 className="f-w-500">Email<span className="pull-right">:</span></h5>
                                                </div>
                                                <div className="col-9">
                                                    <span>{user.email}</span>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-3">
                                                    <h5 className="f-w-500">Birthday<span className="pull-right">:</span></h5>
                                                </div>
                                                <div className="col-9">
                                                    <span>{user.birthday}</span>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-3">
                                                    <h5 className="f-w-500">Address<span className="pull-right">:</span></h5>
                                                </div>
                                                <div className="col-9">
                                                    <span>{user.address}</span>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-3">
                                                    <h5 className="f-w-500">Phone<span className="pull-right">:</span></h5>
                                                </div>
                                                <div className="col-9">
                                                    <span>{user.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="profile-settings" className={`tab-pane fade ${activeToggle === "setting" ? "active show" : ""}`}>
                                        {user && <ProfileSetting users={user} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: UserDetails(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)