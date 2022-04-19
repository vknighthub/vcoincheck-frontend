/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getReviewListByUserProjectAction } from '../../../../store/actions/ReviewAction';
import FilteringTable from '../../../components/table/FilteringTable/FilteringTable';
import { COLUMNSUSERREVIEWLIST } from '../../Dashboard/project/Columns';
import ProjectReviewed from '../Project/ProjectReviewed';
import Avatar from './../../../components/svg/User/Avatar';

const ReviewDetail = (props) => {
    const proname = atob(props.match.params.proname);
    const username = atob(props.match.params.username);
    const reviewid = atob(props.match.params.reviewid);

    let postData = {
        proname: proname,
        username: username
    }

    useEffect(() => {
        props.fetchReview(postData)
    }, [])

    const reviewList = props.reviewuserlist

    return (
        <>
            <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                        <div className="card-body">

                            <div className="row">

                                <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                                    <Tab.Container defaultActiveKey="first">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Avatar src={reviewList.user_info.avatar} width={250} height={250} />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>

                                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                                    <div className="product-detail-content">
                                        <div className="new-arrival-content pr">
                                            <h4>{reviewList.user_info.firstname} {reviewList.user_info.lastname}</h4>
                                            <p> Project: <span className="item fs-18 mx-3">{reviewList.project_info.proname}</span></p>
                                            <p> Categories: <span className="item fs-18 mx-3">{reviewList.project_info.protype}</span></p>
                                            <p> Ecosystem:&nbsp;&nbsp;
                                                <span className="badge badge-success light mr-1">{reviewList.project_info.Ecosystem}</span>
                                            </p>
                                            <p className="text-content">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {reviewList.list_review &&
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-body tab-content p-0">
                                    <FilteringTable colunmsfilter={COLUMNSUSERREVIEWLIST} datafilter={reviewList.list_review} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {reviewid !== 'false' && <ProjectReviewed reviewid={reviewid} username={username} />}

        </>
    )
}
const mapStateToProps = state => {
    return {
        reviewuserlist: state.reviewuserlist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReview: (postData) => {
            dispatch(getReviewListByUserProjectAction(postData))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail)
