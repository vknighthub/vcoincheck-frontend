/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { connect, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { getUserDetailAction, updateStatusUserAction } from "../../../../store/actions/UserAction";
import PageTitle from "../../../layouts/PageTitle";
import Avatar from './../../../components/svg/User/Avatar';
import UserRolePermit from "./UserRolePermit";


const UserProfile = (props) => {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const user = props.userdetail;

	const [hideApprove, setHideApprove] = useState(false)
	const [hideBlocked, setHideBlocked] = useState(false)
	const [hideUnBlocked, setUnHideBlocked] = useState(false)
	const [userStatus, setUserStatus] = useState(null)
	const [apply, setApply] = useState(false)

	const getStatusType = (status) => {
		switch (status) {
			case 'N':
				return (<i className={`fa fa-check-circle text-success  fs-20`} />)
			case 'P':
				return (<i className={`fa fa-question-circle text-warning  fs-20`} />)
			case 'C':
				return (<i className={`fa fa-minus-circle text-danger  fs-20`} />)
			default:
				return ''
		}
	}

	const showButton = (userName, userStatus) => {
		switch (userStatus) {
			case 'N':
				return <button onClick={() => blockUser(userName, 'C')} className="btn btn-danger" type="submit">Block</button>
			case 'P':
				return (
					<>
						<button onClick={() => approveUser(userName, 'N')} className="btn btn-success mr-2" type="submit" hidden={hideApprove}>Approve</button>
						<button onClick={() => blockUser(userName, 'C')} className="btn btn-danger" type="submit" hidden={hideBlocked}>Block</button>
					</>

				)
			case 'C':
				return (<button onClick={() => unBlockUser(userName, 'N')} className="btn btn-danger" type="submit" hidden={hideUnBlocked}>Unclock</button>)
			default:
				return ''
		}
	}

	const approveUser = (userName, status) => {
		const postData = {
			username: userName,
			status: status
		}
		Swal.fire({
			title: "Are you sure want to approve this user?",
			icon: "question",
			showCancelButton: true,
		}).then((result) => {
			if (result.value) {

				dispatch(updateStatusUserAction(postData))
				setHideApprove(true)
				setUserStatus('N')
			}
		});
	}

	const blockUser = (userName, status) => {
		const postData = {
			username: userName,
			status: status
		}
		Swal.fire({
			title: "Are you sure want to block this user?",
			icon: "question",
		}).then((result) => {
			if (result.value) {
				try {
					dispatch(updateStatusUserAction(postData))
					setUserStatus('C')
					setUnHideBlocked(false)
					setHideBlocked(true)
					Swal.fire("Blocked!", "This user has been blocked.", "success");
				} catch (error) {
					Swal.fire("Failed!", "This user has been failed for block.", "error");
				}
			}
		});
	}

	const unBlockUser = (userName, status) => {
		const postData = {
			username: userName,
			status: status
		}
		Swal.fire({
			title: "Are you sure want to unblock this user?",
			icon: "question",

		}).then((result) => {
			if (result.value) {
				try {
					dispatch(updateStatusUserAction(postData))
					setUserStatus('N')
					setUnHideBlocked(true)
					setHideBlocked(false)
					Swal.fire("Unclocked!", "This user has been unclocked.", "success");
				} catch (error) {
					Swal.fire("Failed!", "This user has been failed for unblock.", "error");
				}
			}
		});
	}

	useEffect(() => {
		const data = {
			username: props.match.params.username
		}
		props.fetchUserDetails(data);
	}, [props.match.params.username, apply])

	return (
		<>
			<PageTitle activeMenu="User active" motherMenu="User Management" path="user-list" />
			<div className="row">
				<div className="col-xl-4">
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="profile-statistics">
										<div className="text-center">
											<div className="profile-photo pb-2">
												{user.avatar
													?
													<img
														src={user.avatar}
														className="img-fluid rounded-circle"
														alt="profile"
														width={300}
													/> : <Avatar width={300} height={300} />
												}
											</div>
											<div className="profile-photo pb-5">
												<span className="item" >
													{getStatusType(userStatus ? userStatus : user.status)}
												</span>
											</div>
											<div className="row">
												<div className="col">
													<h3 className="m-b-0">{user.project_list.length}</h3><span>{t('project')}</span>
												</div>
												<div className="col">
													<h3 className="m-b-0">{user.list_review.length}</h3> <span>{t('review')}</span>
												</div>
												<div className="col">
													<h3 className="m-b-0">{user.scores}</h3> <span>{t('points')}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="col-xl-8">
					<div className="card">
						<div className="card-body">
							<div className="profile-tab">
								<div className="pt-3">
									<div className="settings-form">
										<h4 className="text-primary mb-5">Account Information</h4>
										<form onSubmit={(e) => e.preventDefault()}>
											<div className="form-row">
												<div className="form-group col-md-6">
													<label>First Name</label>
													<input type="text" value={user.firstname} className="form-control" disabled />
												</div>
												<div className="form-group col-md-6">
													<label>Last Name</label>
													<input type="text" value={user.lastname} className="form-control" disabled />
												</div>
											</div>
											<div className="form-group">
												<label>Address</label>
												<input type="text" value={user.address} className="form-control" disabled />
											</div>
											<div className="form-row">
												<div className="form-group col-md-6">
													<label>Phone</label>
													<input type="text" value={user.phone} className="form-control" disabled />
												</div>
												<div className="form-group col-md-6">
													<label>Birthday</label>
													<input type="text" value={user.birthday} className="form-control" disabled />
												</div>
											</div>
											<div className="form-row">
												<div className="form-group col-md-6">
													<label>User created</label>
													<input type="text" value={user.usercreated} className="form-control" disabled />
												</div>
												<div className="form-group col-md-6">
													<label>Create date</label>
													<input type="text" value={user.datecreated} className="form-control" disabled />
												</div>
											</div>
											<div className='form-group mt-5'>
												<UserRolePermit rolelist={user.role_list} username={user.username} setApply={setApply} />
											</div>
											<div className='form-group mt-5'>
												{showButton(user.username, userStatus ? userStatus : user.status)}
											</div>

										</form>
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
	userdetail: state.userdetail
})

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserDetails: (postData) => {
			dispatch(getUserDetailAction(postData))
		}
	}
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
