/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getReviewListByType } from './../../../../../../store/selectors/ReviewListSelector';
import { getReviewListFromID } from './../../../../../../store/actions/ReviewAction';
import Overviews from './../../../../Dashboard/project/viewdetails/Overviews';
import Basic from "../../../../Dashboard/project/viewdetails/Basic";
import Advanced from "../../../../Dashboard/project/viewdetails/Advanced";
import Expert from "../../../../Dashboard/project/viewdetails/Expert";



const OwnerReviewed = (props) => {
    const { overview, basicquestion, advancequestion, expertquestion, scorereviews } = props;
    
    const [activeToggle, setActiveToggle] = useState("");

    const reviewid = atob(props.match.params.reviewid);
    const username = atob(props.match.params.username);

    useEffect(() => {
        props.fetchReview(reviewid, username)
        setActiveToggle(props.activereviewed)
    }, [reviewid, username,props.activereviewed])


    return (
        <>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                                <div className="product-detail-content">
                                    <div className="new-arrival-content pr">
                                        <p className="fs-18 text-success"> Review code:<span className="item fs-18 mx-3">{reviewid}</span>{" "}</p>
                                        <p className="fs-18 text-success"> Review score:
                                            <span className="item fs-18 mx-3">
                                                {scorereviews.overreview + scorereviews.basicreview + scorereviews.advancereview + scorereviews.expertreview}
                                            </span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    {advancequestion &&
                                        <div id="advance-reviewed" className={`tab-pane fade ${activeToggle === "advance-reviewed" ? "active show" : ""}`}>
                                            <Advanced reviewinfo={advancequestion} />
                                        </div>
                                    }
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


            <div className="card-body">
                <Link to="/app-profile" className="btn btn-primary d-block rounded-0 mt-3 mt-md-0">Back to profile</Link>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        overview: getReviewListByType(state, "OR"),
        basicquestion: getReviewListByType(state, "BR"),
        advancequestion: getReviewListByType(state, "AR"),
        expertquestion: getReviewListByType(state, "ER"),
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

export default connect(mapStateToProps, mapDispatchToProps)(OwnerReviewed);