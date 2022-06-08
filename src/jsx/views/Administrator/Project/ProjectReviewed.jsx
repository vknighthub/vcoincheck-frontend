import { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getReviewListFromID } from '../../../../store/actions/ReviewAction';
import { getReviewListByType, isApprove } from '../../../../store/selectors/ReviewListSelector';
import useBeforeRender from '../../../../utils/useBeforeRender';
import Advanced from '../../Dashboard/project/viewdetails/Advanced';
import Basic from '../../Dashboard/project/viewdetails/Basic';
import Expert from '../../Dashboard/project/viewdetails/Expert';
import Overviews from '../../Dashboard/project/viewdetails/Overviews';
import ApproveProject from "./ApproveProject";
import BackTo from './../../../components/vKnightHub/Control/BackTo';



const ProjectReviewed = (props) => {
    const { reviewid, username, overview, basicquestion, advancequestion, expertquestion, scorereviews, isapproved, activereviewed } = props;
    const [activeToggle, setActiveToggle] = useState(activereviewed);

    useBeforeRender(() => {
        props.fetchReview(reviewid, username)
    }, [reviewid, username])

    return (
        <>

            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <div className="profile-tab">
                            <div className="custom-tab-1">

                                <ul className="nav nav-tabs">
                                    {overview &&
                                        <li className="nav-item" onClick={() => setActiveToggle("overviewed")} >
                                            <Link to="#overviewed" data-toggle="tab" className={`nav-link ${activeToggle === "overviewed" ? "active show" : ""}`}>Overview</Link>
                                        </li>
                                    }
                                    {basicquestion &&
                                        <li className="nav-item" onClick={() => setActiveToggle("basic-reviewed")}>
                                            <Link to="#basic-reviewed" data-toggle="tab" className={`nav-link ${activeToggle === "basic-reviewed" ? "active show" : ""}`}>Basic review</Link>
                                        </li>
                                    }
                                    {advancequestion &&
                                        <li className="nav-item" onClick={() => setActiveToggle("advance-reviewed")} >
                                            <Link to="#advance-reviewed" data-toggle="tab" className={`nav-link ${activeToggle === "advance-reviewed" ? "active show" : ""}`}>Advance review</Link>
                                        </li>
                                    }
                                    {expertquestion &&
                                        <li className="nav-item">
                                            <Link to="#expert-reviewed" data-toggle="tab" onClick={() => setActiveToggle("expert-reviewed")} className={`nav-link ${activeToggle === "expert-reviewed" ? "active show" : ""}`}>Expert review</Link>
                                        </li>
                                    }
                                </ul>

                                <div className="tab-content">
                                    {overview &&
                                        <div id="overviewed" className={`tab-pane fade ${activeToggle === "overviewed" ? "active show" : ""}`} >
                                            <Overviews reviewinfo={overview} />
                                        </div>
                                    }
                                    {basicquestion &&
                                        <div id="basic-reviewed" className={`tab-pane fade ${activeToggle === "basic-reviewed" ? "active show" : ""}`} >
                                            <Basic reviewinfo={basicquestion} />
                                        </div>
                                    }

                                    <div id="advance-reviewed" className={`tab-pane fade ${activeToggle === "advance-reviewed" ? "active show" : ""}`}>
                                        {advancequestion &&
                                            <Advanced reviewinfo={advancequestion} />}
                                    </div>

                                    {expertquestion &&
                                        <div id="expert-reviewed" className={`tab-pane fade ${activeToggle === "expert-reviewed" ? "active show" : ""}`}>
                                            <Expert reviewinfo={expertquestion} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!isapproved && <ApproveProject reviewid={reviewid} scorereview={scorereviews} />}
            <div className="col-xl-12"><BackTo className="btn btn-primary" to="/project-review-list" name="Back To List" /></div>
        </>
    );
};
const mapStateToProps = state => {
    return {
        overview: getReviewListByType(state, "OR"),
        basicquestion: getReviewListByType(state, "BR"),
        advancequestion: getReviewListByType(state, "AR"),
        expertquestion: getReviewListByType(state, "ER"),
        isapproved: isApprove(state),
        scorereviews: state.listreviewbyid.scores,
        activereviewed: state.listreviewbyid.activereviewed,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchReview: (id, username) => {
            dispatch(getReviewListFromID(id, username))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectReviewed);