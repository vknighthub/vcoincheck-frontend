/* eslint-disable react-hooks/exhaustive-deps */
import i18next from 'i18next';
import { useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { getProjectsManagementAction } from '../../../../store/actions/ProjectAction';
import FilteringTable from "../../../components/table/FilteringTable/FilteringTable";
import PageTitle from '../../../layouts/PageTitle';
import { COLUMNSFILTERPROJECT as COLUMNS_EN } from './../../Dashboard/project/locale/en/Columns';
import { COLUMNSFILTERPROJECT as COLUMNS_JP } from './../../Dashboard/project/locale/jp/Columns';
import { COLUMNSFILTERPROJECT as COLUMNS_VN } from './../../Dashboard/project/locale/vn/Columns';

const ProjectManagement = (props) => {
	const { t } = useTranslation();
	const { projects } = props;

	const columns = () => {
		switch (i18next.language) {
			case 'en': return COLUMNS_EN
			case 'vn': return COLUMNS_VN
			case 'jp': return COLUMNS_JP
			default: return COLUMNS_EN
		}
	}

	useEffect(() => {
		props.fetchProjectManagement();
	}, [])

	return (
		<>
			<PageTitle motherMenu={t('project')} activeMenu={t('projectmanagement')} />
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="card-body tab-content p-0">
								<FilteringTable colunmsfilter={columns()} datafilter={projects} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	return {
		projects: state.projectmanagement
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchProjectManagement: () => {
			dispatch(getProjectsManagementAction())
		}
	}
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ProjectManagement));
