/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLibraryByIdAction } from '../../../../../store/actions/LibraryAction';
import { UserDetails } from '../../../../../store/selectors/AuthSelectors';
import PostComment from '../comment/PostComment';
import GetContentLanguage from './../../../../../utils/GetContentLanguage';
import CommingSoon from './../../../../pages/ComingSoon';


const CardanoDetail = (props) => {
	const i18nextLng = localStorage.getItem('i18nextLng')
	const currentLanguageCode = i18nextLng || 'en'
	const { librarydetail, user } = props
	const library_info = librarydetail.library_infor
	const comment_info = librarydetail.comment_infor

	const { t } = useTranslation();
	const library = {
		libraryid: atob(props.match.params.name)
	}

	useEffect(() => {
		props.fetchLibDetail(library);
	}, [])

	const showLibrary = (library) => {
		var show = false
		
		switch (currentLanguageCode) {
			case 'en':
				if (library.keyen === 1)
					show = true
				break;
			case 'vn':
				if (library.keyvn === 1)
					show = true
				break;
			case 'jp':
				if (library.keyjp === 1)
					show = true
				break;
			default:
				show = false
		}
		return show
	}
	
	return (
		showLibrary(library_info) ?
			<div>
				<div>
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<div className="post-details">

										<h1 className="mb-2 text-black text-center pb-2">
											{GetContentLanguage(currentLanguageCode, library_info.title)}
										</h1>

										<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
											<li className="post-date mr-3">
												<i className="fa fa-calendar mr-2" />
												{t('published')}: {library_info.createdt}
											</li>
										</ul>
										<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
											<li className="post-date mr-3">
												<i className="fa fa-user mr-2" />
												{t('author')}:
												<NavLink to={`/library/author/${library_info.username}`} className="ml-3">
													{library_info.fullname}
												</NavLink>
											</li>
										</ul>

										<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
											<li className="post-date mr-3">
												<i className="fa fa-eye mr-2" />
												{t('Viewd')}: {library_info.noofview}
											</li>
											<li className="post-date mr-3">
												<i className="fa fa-thumbs-up mr-2" />
												{t('Liked')}: {10}
											</li>
										</ul>


										<img src={library_info.image} alt="" className="img-fluid mb-3 w-100" />
										<p className="text-blue fs-18 my-3">
											{GetContentLanguage(currentLanguageCode, library_info.summary)}
										</p>
										<div>
											{parse(GetContentLanguage(currentLanguageCode, library_info.content))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<PostComment t={t} user={user} libraryid = {library_info.id} comments = {comment_info} />
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


export default connect(mapStateToProps, mapDispatchToProps)(CardanoDetail);
