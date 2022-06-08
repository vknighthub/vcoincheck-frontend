/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import FilteringTable from "../../../components/table/FilteringTable/FilteringTable";
import { COLUMNSREVIEWLIST as COLUMNS_EN } from './locale/en/Columns';
import { COLUMNSREVIEWLIST as COLUMNS_VN } from './locale/vn/Columns';
import { COLUMNSREVIEWLIST as COLUMNS_JP } from './locale/jp/Columns';
import PageTitle from '../../../layouts/PageTitle';
import React, { useEffect } from "react";
import { getAllReviewsAction } from '../../../../store/actions/ReviewAction';
import { useHistory } from 'react-router-dom';
import { withTranslation, useTranslation } from "react-i18next";
import i18next from 'i18next';

const ProjectReviewList = (props) => {
	const { t } = useTranslation();

	const history = useHistory()
	const reviewList = props.listreview

	const columns = () => {
		switch (i18next.language) {
			case 'en': return COLUMNS_EN
			case 'vn': return COLUMNS_VN
			case 'jp': return COLUMNS_JP
			default: return COLUMNS_EN
		}
	}

	useEffect(() => {
		props.fetchListReview(history);
	}, [])

	return (
		<>
			<PageTitle motherMenu={t('project')} activeMenu={t('projectreviewlist')} />
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="card-body tab-content p-0">
								<FilteringTable colunmsfilter={columns()} datafilter={reviewList} />
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
		listreview: state.listreview,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchListReview: (history) => {
			dispatch(getAllReviewsAction(history))
		}
	}
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ProjectReviewList));
