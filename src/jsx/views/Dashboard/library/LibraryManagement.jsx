/* eslint-disable react-hooks/exhaustive-deps */
import i18next from 'i18next';
import React, { useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import PageTitle from '../../../layouts/PageTitle';
import { getLibraryAction } from './../../../../store/actions/LibraryAction';
import { isAuthenticated } from './../../../../store/selectors/AuthSelectors';
import { FilteringTable } from './../../../components/table/FilteringTable/FilteringTable';
import { COLUMNSFILTER as COLUMNS_EN } from './locale/en/Columns';
import { COLUMNSFILTER as COLUMNS_JP } from './locale/jp/Columns';
import { COLUMNSFILTER as COLUMNS_VN } from './locale/vn/Columns';

const LibraryManagement = (props) => {
	const { t } = useTranslation();

	const { library } = props

	const columns = () => {
		switch (i18next.language) {
			case 'en': return COLUMNS_EN
			case 'vn': return COLUMNS_VN
			case 'jp': return COLUMNS_JP
			default: return COLUMNS_EN
		}
	}

	useEffect(() => {
		const dataFilter = {
			lang: i18next.language
		}
		props.fetchListLibrary(dataFilter);
	}, [i18next.language])

	return (
		<>
			<PageTitle motherMenu={t('library')} activeMenu={t('librarylistmng')} />
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="card-body tab-content p-0">
								<FilteringTable colunmsfilter={columns()} datafilter={library} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		library: state.library,
		isAuthenticated: isAuthenticated(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchListLibrary: (filter) => {
			dispatch(getLibraryAction(filter))
		}
	}
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(LibraryManagement));
