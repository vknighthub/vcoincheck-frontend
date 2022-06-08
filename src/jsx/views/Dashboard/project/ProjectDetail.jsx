import { useState } from 'react';
import { useTranslation, withTranslation } from "react-i18next";
import { connect, useDispatch } from 'react-redux';
import { useHistory, withRouter } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
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
	const { t } = useTranslation();

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
				title: `${t('questionviewdetail')}`,
				text: `${t('questionbuyviewdetail')}`,
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
			Swal.fire({
				title: `${t('exchangescoreviewdetail')}`,
				text: `${t('exchangescoreviewdetailquestion', { score: users.scores, scoreneed: scoreneed })}`,
				icon: "question",
				showCancelButton: true,
				confirmButtonText: `${t('ok')}`,
				cancelButtonText: `${t('cancel')}`,
			}).then((willExchange) => {
				if (willExchange.isConfirmed) {
					exchangeScores(users, scoreneed, false)
				} else {
					swal(`${t('remindbuyreview')}`);
				}
			})
		} else {
			swal({
				title: `${t('noenoughtoreview')}`,
				text: `${t('earnmorereview', { scoremore: scoreneed - users.scores })}`,
				icon: "warning",
				dangerMode: true,
			})
		}
	}

	const setBackToProject = () => {
		setShowReviewList(true)
	}


	useBeforeRender(() => {
		props.fetchProjectDetails(projectname, history)
	}, [projectname])

	return (
		<>
			<PageTitle motherMenu={t('project')} activeMenu={t('projectdetail')} path="project" activeDisplay={projectname} />
			<div className="row">
				{project.project_info && <ProjectDescription isAuthenticated={login} history={history} project={project.project_info} t={t} />}

				{login &&
					<>
						{showReviewList ?
							(
								<>
									{project.review_info &&
										<ReviewList review={project.review_info} handleSetReviewID={setReviewID} checkView={() => checkView(false)} checkBuy={() => checkBuy(user, 50)} t={t} />
									}
									{project && <ReviewProject project={project.project_info} question={project.question_info} t={t} />}
								</>
							) : (
								<ProjectReviewed reviewid={reviewID} user={user} setBackToProject={() => setBackToProject()} />
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
		fetchProjectDetails: (projectName, history) => {
			dispatch(getProjectDetailAction(projectName, history))
		}
	}
}

export default withTranslation()(withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)));
