import { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { UserDetails } from "../../../../store/selectors/AuthSelectors";
import Advanced from './evaluate/Advanced';
import Basic from './evaluate/Basic';
import Expert from './evaluate/Expert';
import Overviews from './evaluate/Overviews';



const ReviewProject = (props) => {
    const [activeToggle, setActiveToggle] = useState("overview");

    const username = props.users.username;
    const project = props.project;

    const actionStep = (curentStep) => {
        switch (curentStep) {
            case 'overview':
                setActiveToggle("basic-review");
                break;
            case 'basic':
                setActiveToggle("advance-review");
                break;
            case 'advanced':
                setActiveToggle("expert-review");
                break;
            case 'expert':
                break;
            default:
        }

    }

    return (
        <>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <div className="profile-tab">
                            <div className="custom-tab-1">

                                <ul className="nav nav-tabs">
                                    <li className="nav-item" onClick={() => setActiveToggle("overview")} >
                                        <Link to="#overview" data-toggle="tab" className={`nav-link ${activeToggle === "overview" ? "active show" : ""}`}>Overview</Link>
                                    </li>
                                    <li className="nav-item" onClick={() => setActiveToggle("basic-review")}>
                                        <Link to="#basic-review" data-toggle="tab" className={`nav-link ${activeToggle === "basic-review" ? "active show" : ""}`}>Basic review</Link>
                                    </li>
                                    <li className="nav-item" onClick={() => setActiveToggle("advance-review")} >
                                        <Link to="#advance-review" data-toggle="tab" className={`nav-link ${activeToggle === "advance-review" ? "active show" : ""}`}>Advance review</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#expert-review" data-toggle="tab" onClick={() => setActiveToggle("expert-review")} className={`nav-link ${activeToggle === "expert-review" ? "active show" : ""}`}>Expert review</Link>
                                    </li>
                                </ul>

                                <div className="tab-content">

                                    <div id="overview" className={`tab-pane fade ${activeToggle === "overview" ? "active show" : ""}`} >
                                        <Overviews projectid={project.proid} overquestion ={props.question.overquestion}  username={username} reviewtype={"OR"} action={() => actionStep("overview")} />
                                    </div>

                                    <div id="basic-review" className={`tab-pane fade ${activeToggle === "basic-review" ? "active show" : ""}`} >
                                        <Basic projectid={project.proid} basicquestion={props.question.basicquestion} username={username} reviewtype={"BR"} action={() => actionStep("basic")} />
                                    </div>
                                    <div id="advance-review" className={`tab-pane fade ${activeToggle === "advance-review" ? "active show" : ""}`}>
                                        <Advanced project={project} advancequestion={props.question.advancequestion} username={username} reviewtype={"AR"} action={() => actionStep("advanced")} />
                                    </div>
                                    <div id="expert-review" className={`tab-pane fade ${activeToggle === "expert-review" ? "active show" : ""}`}>
                                        <Expert project={project} expertquestion={props.question.expertquestion} username={username} reviewtype={"ER"} action={() => actionStep("expert")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    users: UserDetails(state)
})

export default connect(mapStateToProps, null)(ReviewProject);
