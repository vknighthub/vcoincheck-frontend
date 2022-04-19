import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { getProjectDetailAction } from '../../../../store/actions/ProjectAction';
import { minusScoreUserAction } from '../../../../store/actions/UserAction';
import { isAuthenticated, UserDetails } from '../../../../store/selectors/AuthSelectors';
import useBeforeRender from '../../../../utils/useBeforeRender';
import PageTitle from "../../../layouts/PageTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectReviewed from './ProjectReviewed';
import ReviewList from './ReviewList';
import ReviewProject from './ReviewProject';

const ProjectDetail = (props) => {
	const login = props.isAuthenticated;
	const projectname = props.match.params.proname;
	const project = props.projectDetail
	const user = props.userinfo
	const history = useHistory();
	const dispatch = useDispatch();


	const [showReviewList, setShowReviewList] = useState(true);
	const [reviewID, setReviewID] = useState('');

	const checkView = (isBuy) => {
		if (!isBuy) {
			swal({
				title: "Are you want to view details? ",
				text: "If you want to view details this review, please buy first !!!",
				icon: "warning",
				dangerMode: true,
			})
		}
	}

	const exchangeScores = (userInfo, scores, isShowReviewList) => {
		let postdata = {
			username: userInfo.username,
			score: scores
		}
		dispatch(minusScoreUserAction(postdata));
		setShowReviewList(isShowReviewList)
	}

	const checkBuy = (users, scoreneed) => {

		if (users.scores >= scoreneed) {
			swal({
				title: "Are you sure want to exchange score to view detail?",
				text: "Yours score is " + users.scores + " scores, If you want to exchange this review, you need exchange " + scoreneed + " score",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willExchange) => {
				if (willExchange) {
					swal(
						exchangeScores(users, scoreneed, false)
					);
				} else {
					swal("Please buy to view details this review!");
				}
			})
		} else {
			swal({
				title: "You no have enough scores to continue",
				text: "Please earn more " + (scoreneed - users.scores) + " scores to view",
				icon: "warning",
				dangerMode: true,
			})
		}
	}

	const setBackToProject = () => {
		setShowReviewList(true)
	}


	useBeforeRender(() => {
		props.fetchProjectDetails(projectname,history)
	}, [projectname])

	return (
		<>
			<PageTitle motherMenu="Project" activeMenu="Project detail" path="project"/>
			<div className="row">
				{project.project_info && <ProjectDescription isAuthenticated={login} history={history} project={project.project_info} />} 

				{login &&
					<>
						{showReviewList ?
							(
								<>
									{project.review_info &&
										<ReviewList review={project.review_info} handleSetReviewID={setReviewID} checkView={() => checkView(false)} checkBuy={() => checkBuy(user, 50)} />
									}
									{project && <ReviewProject project={project.project_info} question = {project.question_info} />}
								</>
							) : (
								<ProjectReviewed reviewid={reviewID} user = {user} setBackToProject={() => setBackToProject()} />
							)
						}
					</>
				}

			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: isAuthenticated(state),
		projectDetail: state.projectdetail,
		userinfo: UserDetails(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProjectDetails: (projectName,history) => {
			dispatch(getProjectDetailAction(projectName,history))
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
