/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import FilteringTable from "../../../components/table/FilteringTable/FilteringTable";
import { COLUMNSREVIEWLIST } from './Columns';
import PageTitle from '../../../layouts/PageTitle';
import React, { useEffect } from "react";
import { getAllReviewsAction } from '../../../../store/actions/ReviewAction';
import { useHistory } from 'react-router-dom';

const ProjectReviewList = (props) => {
	const history = useHistory()
	const reviewList = props.listreview
	useEffect(() => {
		props.fetchListReview(history);
	}, [])

	return (
		<>
			<PageTitle motherMenu="Project" activeMenu="Project Review List" />
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="card-body tab-content p-0">
								<FilteringTable colunmsfilter={COLUMNSREVIEWLIST} datafilter={reviewList} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectReviewList);
