/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { getReviewListFromID } from '../../../../store/actions/ReviewAction';
import { getComments, getReviewListByType } from '../../../../store/selectors/ReviewListSelector';
import CommentList from './comment/CommentList';
import PostComment from './comment/PostComment';
import Advanced from './viewdetails/Advanced';
import Basic from './viewdetails/Basic';
import Expert from './viewdetails/Expert';
import Overviews from './viewdetails/Overviews';



const ProjectReviewed = (props) => {
    const [activeToggle, setActiveToggle] = useState("overviewed");
    const [liked, setLiked] = useState(props.islike);
    const [contentLike, setContentLike] = useState('');
    const reviewid = props.reviewid;
    const username = props.user.username;

    const validtionStep = (points, pointneed, nextStep) => {
        if (points >= pointneed) {
            swal({
                title: "Do you want to continue?",
                text: "Please buy more than " + pointneed + " scores to view",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willExchange) => {
                if (willExchange) {
                    swal(
                        setActiveToggle(nextStep)
                    );
                } else {
                    swal("Please buy to view details this review!");
                }
            })
        } else {
            swal({
                title: "You no have enough scores to continue",
                text: "Please earn more " + (pointneed - points) + " scores to view",
                icon: "warning",
                dangerMode: true,
            })
        }
    }


    useEffect(() => {
        props.fetchReview(reviewid,username)
    }, [reviewid,username])

    const handleClickLike = (like,numberLike) => {
        if (like) {
            setLiked(false)
            setContentLike(numberLike + ' people liked')
        } else {
            setLiked(true)
            setContentLike('You and ' + numberLike + ' others people')
        }

    }


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
                                                {props.scorereviews.overreview + props.scorereviews.basicreview + props.scorereviews.advancereview + props.scorereviews.expertreview}
                                            </span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                                <Link to="#" onClick={() => handleClickLike(liked,props.numberoflike)}><i className={`fa fa-thumbs-up fs-18 mr-3 ${liked ? 'text-success' : ''}`}> Like</i></Link>
                                <span className="item fs-14 mx-3">{contentLike}</span>
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
                                    <li className="nav-item" onClick={() => setActiveToggle("overviewed")} >
                                        <Link to="#overviewed" data-toggle="tab" className={`nav-link ${activeToggle === "overviewed" ? "active show" : ""}`}>Overview</Link>
                                    </li>
                                    <li className="nav-item" onClick={() => setActiveToggle("basic-reviewed")}>
                                        <Link to="#basic-reviewed" data-toggle="tab" className={`nav-link ${activeToggle === "basic-reviewed" ? "active show" : ""}`}>Basic review</Link>
                                    </li>
                                    <li className="nav-item" onClick={() => validtionStep(100, 100, "advance-reviewed")} >
                                        <Link to="#advance-reviewed" data-toggle="tab" className={`nav-link ${activeToggle === "advance-reviewed" ? "active show" : ""}`}>Advance review</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#expert-reviewed" data-toggle="tab" onClick={() => validtionStep(100, 100, "expert-reviewed")} className={`nav-link ${activeToggle === "expert-reviewed" ? "active show" : ""}`}>Expert review</Link>
                                    </li>
                                </ul>

                                <div className="tab-content">

                                    <div id="overviewed" className={`tab-pane fade ${activeToggle === "overviewed" ? "active show" : ""}`} >
                                        {props.overview && <Overviews reviewinfo={props.overview} />}
                                    </div>
                                    <div id="basic-reviewed" className={`tab-pane fade ${activeToggle === "basic-reviewed" ? "active show" : ""}`} >
                                        {props.basicquestion && <Basic reviewinfo={props.basicquestion} />}
                                    </div>
                                    <div id="advance-reviewed" className={`tab-pane fade ${activeToggle === "advance-reviewed" ? "active show" : ""}`}>
                                        {props.basicquestion && <Advanced reviewinfo={props.advancequestion} />}
                                    </div>
                                    <div id="expert-reviewed" className={`tab-pane fade ${activeToggle === "expert-reviewed" ? "active show" : ""}`}>
                                        {props.expertquestion && <Expert reviewinfo={props.expertquestion} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {props.comments && <CommentList comments = {props.comments}/> }
            <PostComment />


            <div className="card-body">
                <Link to="#" onClick={() => props.setBackToProject()} className="btn btn-primary d-block rounded-0 mt-3 mt-md-0">Back to project</Link>
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
        numberoflike: state.listreviewbyid.likes,
        comments: getComments(state),
        islike: state.listreviewbyid.islike
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchReview: (id,userName) => {
            dispatch(getReviewListFromID(id,userName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectReviewed);