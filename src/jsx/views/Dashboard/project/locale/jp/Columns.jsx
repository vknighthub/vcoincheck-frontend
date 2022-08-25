import { ProjectSvg } from '../../../../../components/svg';
import { ColumnFilter } from '../../../../../components/table/FilteringTable/ColumnFilter';
import { Link } from "react-router-dom";
import GetContentLanguage from '../../../../../../utils/GetContentLanguage';
import ColorQuality from '../../../../../../utils/ColorQuality';

const getStatusType = (status) => {
	switch (status) {
		case 'P':
			return <i className="fa fa-circle text-warning mr-1"> 承認待ち</i>
		case 'A':
			return <i className="fa fa-circle text-success mr-1"> 承認済み</i>
		default: return ''
	}
}


export const COLUMNSFILTER = [
	{
		Header: 'I',
		Footer: 'I',
		Cell: (props) => (<Link to={`/ecom-project-detail/${props.row.original.proname}`}><ProjectSvg image={props.row.original.proicon} width={24} height={24} /></Link>),
	},
	{
		Header: 'プロジェクト名',
		Footer: 'プロジェクト名',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: 'エコシステム',
		Footer: 'エコシステム',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header: 'プロジェクトの種類',
		Footer: 'プロジェクトの種類',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: '閲覧数',
		Footer: '閲覧数',
		accessor: 'totalreview',
		Filter: ColumnFilter,
	},
	{
		Header: '品質',
		Footer: '品質',
		Cell: (props) => {
			const lang = localStorage.getItem('i18nextLng')
			const quality = GetContentLanguage(lang, props.row.original.quality)
			const colorQuality = ColorQuality(lang,quality)
			return (
				<span className={`btn-link ${colorQuality} float-center`
					}
				>
					{quality}
				</span>
			)
		}
	}
]

export const COLUMNSREVIEWLIST = [
	{
		Header: 'プロジェクト名',
		Footer: 'プロジェクト名',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: 'ユーザー',
		Footer: 'ユーザー',
		accessor: 'username',
		Filter: ColumnFilter,
	},
	{
		Header: 'プロジェクトの種類',
		Footer: 'プロジェクトの種類',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: 'ステータス',
		Footer: 'ステータス',
		accessor: 'status',
		Filter: ColumnFilter,
		Cell: (props) => (
			getStatusType(props.row.original.status)
		)
	},
	{
		Header: '管理者',
		Footer: '管理者',
		Cell: (props) => (
			<>
				<Link to={`/project-review-list-action/${btoa(props.row.original.proname)}&${btoa(props.row.original.username)}&${btoa('false')}`} className="btn btn-success shadow btn-xs sharp mr-2"
				>
					<i className="fa fa-eye"></i>
				</Link>
			</>
		)
	},
]


export const COLUMNSUSERREVIEWLIST = [
	{
		Header: 'Review ID',
		Footer: 'Review ID',
		accessor: 'reviewid',
		Filter: ColumnFilter,
	},
	{
		Header: 'Categories',
		Footer: 'Categories',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: 'Status',
		Footer: 'Status',
		accessor: 'status',
		Filter: ColumnFilter,
		Cell: (props) => (
			getStatusType(props.row.original.status)
		)
	},
	{
		Header: 'Review Date',
		Footer: 'Review Date',
		accessor: 'reviewdate',
		Filter: ColumnFilter,
	},
	{
		Header: 'Comment',
		Footer: 'Comment',
		accessor: 'comment',
		Filter: ColumnFilter,
	},
	{
		Header: 'Admin',
		Footer: 'Admin',
		Cell: (props) => (
			<>
				<Link to={`/project-review-list-action/${btoa(props.row.original.proname)}&${btoa(props.row.original.username)}&${btoa(props.row.original.reviewid)}`} className="btn btn-success shadow btn-xs sharp mr-2"
				>
					<i className="fa fa-eye"></i>
				</Link>
			</>
		)
	},
]

export const COLUMNSFILTERPROJECT = [
	{
		Header: 'I',
		Footer: 'I',
		Cell: (props) => (<Link to={`/ecom-project-detail/${props.row.original.proname}`}><ProjectSvg image={props.row.original.proicon} width={24} height={24} /></Link>),
	},
	{
		Header: 'プロジェクト名',
		Footer: 'プロジェクト名',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: 'エコシステム',
		Footer: 'エコシステム',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header: 'プロジェクトの種類',
		Footer: 'プロジェクトの種類',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: 'ステータス',
		Footer: 'ステータス',
		accessor: 'prosts',
		Filter: ColumnFilter,
	},
	{
		Header: '閲覧数',
		Footer: '閲覧数',
		accessor: 'totalreview',
		Filter: ColumnFilter,
	},
	{
		Header: '管理者',
		Footer: '管理者',
		Cell: (props) => (
			<>
				<Link to={`/project-management-action/${btoa(props.row.original.proname)}`} className="btn btn-success shadow btn-xs sharp mr-2"
				>
					<i className="fa fa-eye"></i>
				</Link>
			</>
		)
	},
]
