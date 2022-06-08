import { ProjectSvg } from '../../../../../components/svg';
import { ColumnFilter } from '../../../../../components/table/FilteringTable/ColumnFilter';
import { Link } from "react-router-dom";

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
		Header: '名前',
		Footer: '名前',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: '生態系',
		Footer: '生態系',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header: 'カテゴリ',
		Footer: 'カテゴリ',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: '状態',
		Footer: '状態',
		accessor: 'prosts',
		Filter: ColumnFilter,
	},
	{
		Header: '閲覧数',
		Footer: '閲覧数',
		accessor: 'totalreview',
		Filter: ColumnFilter,
	},
]

export const COLUMNSREVIEWLIST = [
	{
		Header: '計画',
		Footer: '計画',
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
		Header: 'カテゴリ',
		Footer: 'カテゴリ',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: '状態',
		Footer: '状態',
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
		Header: '名前',
		Footer: '名前',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: '生態系',
		Footer: '生態系',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header: 'カテゴリ',
		Footer: 'カテゴリ',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: '状態',
		Footer: '状態',
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
