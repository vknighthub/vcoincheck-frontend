import { NavLink } from "react-router-dom";


const UserReviewed = () => {
    return (
        <div className="row">
            <div className="col-lg-12 col-xl-12" >
                <div className="card">
                    <div className="card-body">
                        <NavLink to={`ecom-project-detail/`} className="text-black">
                            <div className="row m-b-30">
                                <div className="col-md-5 col-xxl-12">
                                    <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                                        <div className="new-arrivals-img-contnent">
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-7 col-xxl-12">
                                    <div className="new-arrival-content position-relative">
                                        <h4>
                                        </h4>
                                        <div className="comment-review star-rating">
                                            <ul id="stars"
                                                className="d-flex justify-content-center align-items-center">
                                            </ul>
                                            <p className="price mt-3"></p>
                                        </div>
                                        <p>
                                            Availability:{" "}
                                            <span className="item">
                                                {" "}
                                                <i className="fa fa-check-circle text-success" />
                                            </span>
                                        </p>
                                        <p>
                                            Project code: <span className="item"></span>{" "}
                                        </p>
                                        <p>
                                            Ecosystem: <span className="item"></span>{" "}
                                        </p>
                                        <p className="text-content">

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserReviewed;
