import parse from 'html-react-parser';
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import ProjectSvg from '../../../components/svg/Project/ProjectSvg';




const ProjectDescription = (props) => {
	const login = props.isAuthenticated;
	const project = props.project
	const t = props.t

	const checklogin = (isLogin, history) => {
		if (!isLogin) {
			Swal.fire({
				title: `${t('questionreview')}`,
				text: `${t('questionloginreview')}`,
				icon: "question",
				showCancelButton: true,
				confirmButtonText: `${t('ok')}`,
				cancelButtonText: `${t('cancel')}`,
			}).then((willLogin) => {
				if (willLogin.isConfirmed) {
					history.replace('/page-login')
				} else {
					Swal.fire(`${t('confirmcancel')}`);
				}
			})
		}
	}

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
										<div className="new-arrival-content pr row">
											<div className="col-xl-6 col-lg-6  col-md-6 col-xxl-6 ">
												<h1>{project.proname}</h1>
												<p>{t('projectcode')}: <span className="item ml-3">{project.procd}</span>{" "}</p>
												<p>{t('categories')} : <span className="item ml-3">{project.protype}</span></p>
												<p>
													{t('ecosystem')}:&nbsp;&nbsp;
													<span className="badge badge-success light mr-1">{project.Ecosystem}</span>
												</p>
											</div>
											<div className="col-xl-6 col-lg-6  col-md-6 col-xxl-6 ">
												<div className="row">
													<div className="col-xl-6 col-lg-6  col-md-6 col-xxl-6 ">
														<p>{t('projectscore')}: <span className="item ml-3">{project.scores}</span>{" "}</p>
														<p>{t('projectquality')}: <span className="item ml-3">{project.scores}</span>{" "}</p>
														<p>{t('noofreviewed')}: <span className="item ml-3">{project.totalreview}</span>{" "}</p>
													</div>
													<div className="col-xl-6 col-lg-6  col-md-6 col-xxl-6 ">
														{!login ?
															<>
																<Link onClick={() => checklogin(login, props.history)} to="#" className="btn btn-success product-review">{t('review')}?</Link>
															</>
															:
															null
														}
													</div>
												</div>
											</div>
											<span className="text-content ml-3">
												{parse(project.prodescr)}
											</span>
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
