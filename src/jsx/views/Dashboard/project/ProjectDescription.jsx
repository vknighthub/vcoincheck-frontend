import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import GetStar from "../../../../utils/GetStar";
import ProjectSvg from '../../../components/svg/Project/ProjectSvg';
import StarRating from "./StarRating";
import parse from 'html-react-parser'



const checklogin = (isLogin, history) => {
	if (!isLogin) {
		swal({
			title: "Are you want to review?",
			text: "If you want to evaluate this project, please login first !!!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willLogin) => {
			if (willLogin) {
				swal(
					history.replace('/page-login')
				);
			} else {
				swal("Please login to review project!");
			}
		})
	}
}
const ProjectDescription = (props) => {
	const login = props.isAuthenticated;
	const project = props.project

	return (
		<>
			{project &&
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
									{/* Tab panes */}
									<Tab.Container defaultActiveKey="first">
										<Tab.Content>
											<Tab.Pane eventKey="first">
												<ProjectSvg image={project.proicon} width={400} height={400} />
											</Tab.Pane>
										</Tab.Content>

									</Tab.Container>
								</div>
								{/*Tab slider End*/}

								<div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
									<div className="product-detail-content">
										{/*Product details*/}
										<div className="new-arrival-content pr">
											<h4>{project.proname}</h4>
											<div className="comment-review star-rating">
												<ul id="stars"
													className="d-flex justify-content-center align-items-center">
													<StarRating numberOfSelectedStar={GetStar(project.totalreview)} />
												</ul>

												{!login ?
													<>
														<span className="review-text">({project.totalreview}) / </span>
														<Link onClick={checklogin(login, props.history)} to="#" className="product-review" >Review?</Link>
													</>
													:
													null
												}
											</div>
											<div className="d-table mb-2">
												<p className="price float-left d-block">325</p>
											</div>
											<p> Project code: <span className="item">{project.procd}</span>{" "}</p>
											<p> Categories: <span className="item">{project.protype}</span></p>
											<p>
												Ecosystem:&nbsp;&nbsp;
												<span className="badge badge-success light mr-1">{project.Ecosystem}</span>
											</p>
											<p className="text-content">
												{parse(project.prodescr)}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}

		</>
	);
};

export default ProjectDescription;
