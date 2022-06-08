import { ProjectSvg } from '../../../../../components/svg';
import { ColumnFilter } from '../../../../../components/table/FilteringTable/ColumnFilter';
import { Link } from "react-router-dom";

const getStatusType = (status) => {
	switch (status) {
		case 'P':
			return <i className="fa fa-circle text-warning mr-1"> Chờ duyệt</i>
		case 'A':
			return <i className="fa fa-circle text-success mr-1"> Đã duyệt</i>
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
		Header: 'Tên dự án',
		Footer: 'Tên dự án',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: 'Hệ sinh thái',
		Footer: 'Hệ sinh thái',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header: 'Loại dự án',
		Footer: 'Loại dự án',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: 'Trạng thái',
		Footer: 'Trạng thái',
		accessor: 'prosts',
		Filter: ColumnFilter,
	},
	{
		Header: 'Lượt xem',
		Footer: 'Lượt xem',
		accessor: 'totalreview',
		Filter: ColumnFilter,
	},
]

export const COLUMNSREVIEWLIST = [
	{
		Header: 'Dự án',
		Footer: 'Dự án',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: 'Người dùng',
		Footer: 'Người dùng',
		accessor: 'username',
		Filter: ColumnFilter,
	},
	{
		Header: 'Loại dự án',
		Footer: 'Loại dự án',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: 'Trạng thái',
		Footer: 'Trạng thái',
		accessor: 'status',
		Filter: ColumnFilter,
		Cell: (props) => (
			getStatusType(props.row.original.status)
		)
	},
	{
		Header: 'Quản trị',
		Footer: 'Quản trị',
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
		Header: 'Tên dự án',
		Footer: 'Tên dự án',
		accessor: 'proname',
		Filter: ColumnFilter,
	},
	{
		Header: 'Hệ sinh thái',
		Footer: 'Hệ sinh thái',
		accessor: 'Ecosystem',
		Filter: ColumnFilter,
	},
	{
		Header: 'Loại dự án',
		Footer: 'Loại dự án',
		accessor: 'protype',
		Filter: ColumnFilter,
	},
	{
		Header: 'Trạng thái',
		Footer: 'Trạng thái',
		accessor: 'prosts',
		Filter: ColumnFilter,
	},
	{
		Header: 'Lượt xem',
		Footer: 'Lượt xem',
		accessor: 'totalreview',
		Filter: ColumnFilter,
	},
	{
		Header: 'Quản trị',
		Footer: 'Quản trị',
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