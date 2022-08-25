/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLibraryByIdAction } from '../../../../../store/actions/LibraryAction';
import GetContentLanguage from '../../../../../utils/GetContentLanguage';
import PostComment from '../comment/PostComment';
import CommingSoon from '../../../../pages/ComingSoon';
import { UserDetails } from '../../../../../store/selectors/AuthSelectors';

const CatalystDetail = (props) => {
	const i18nextLng = localStorage.getItem('i18nextLng')
	const currentLanguageCode = i18nextLng || 'en'

	const { librarydetail, user } = props

	const library = {
		libraryid: atob(props.match.params.name)
	}
	const { t } = useTranslation();

	useEffect(() => {
		props.fetchLibDetail(library);
	}, [])


	const showLibrary = (libray) => {
		var show = false
		if (libray) {
			switch (currentLanguageCode) {
				case 'en':
					if (libray.library_infor.keyen === 1)
						show = true
					break;
				case 'vn':
					if (libray.library_infor.keyvn === 1)
						show = true
					break;
				case 'jp':
					if (libray.library_infor.keyjp === 1)
						show = true
					break;
				default:
					show = false
			}
		}
		return show
	}

	return (
		showLibrary(librarydetail) ?
			<div>
				<div>
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<div className="post-details">

										<h1 className="mb-2 text-black text-center pb-2">
											{GetContentLanguage(currentLanguageCode, librarydetail.library_infor.title)}
										</h1>

										<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
											<li className="post-date mr-3">
												<i className="fa fa-calendar mr-2" />
												{t('published')}: {librarydetail.library_infor.createdt}
											</li>
										</ul>
										<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
											<li className="post-date mr-3">
												<i className="fa fa-user mr-2" />
												{t('author')}:
												<NavLink to={`/library/author/${librarydetail.library_infor.username}`} className="ml-3">
													{librarydetail.library_infor.fullname}
												</NavLink>
											</li>
										</ul>

										<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
											<li className="post-date mr-3">
												<i className="fa fa-eye mr-2" />
												{t('Viewd')}: {librarydetail.library_infor.noofview}
											</li>
											<li className="post-date mr-3">
												<i className="fa fa-thumbs-up mr-2" />
												{t('Liked')}: {10}
											</li>
										</ul>


										<img src={librarydetail.library_infor.image} alt="" className="img-fluid mb-3 w-100" />
										<p className="text-blue fs-18 my-3">
											{GetContentLanguage(currentLanguageCode, librarydetail.library_infor.summary)}
										</p>
										<div>
											{parse(GetContentLanguage(currentLanguageCode, librarydetail.library_infor.content))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<PostComment t={t} user={user} libraryid={librarydetail.library_infor.id} comments={librarydetail.comment_infor} />
					</div>
				</div>
			</div>
			:
			<CommingSoon />
	);
};

const mapStateToProps = (state) => ({
	librarydetail: state.librarydetail,
	user: UserDetails(state)
})

const mapDispatchToProps = (dispatch) => {
	return {
		fetchLibDetail: (library) => {
			dispatch(getLibraryByIdAction(library))
		}
	}
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CatalystDetail));
