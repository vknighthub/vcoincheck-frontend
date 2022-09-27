import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { removeLibraryAction } from "../../../../../../store/actions/LibraryAction";
import GetContentLanguage from "../../../../../../utils/GetContentLanguage";
import { ColumnFilter } from '../../../../../components/table/FilteringTable/ColumnFilter';
import JP from './../../../../../components/svg/Icon/JP';
import UK from './../../../../../components/svg/Icon/UK';
import VN from './../../../../../components/svg/Icon/VN';

export const COLUMNSFILTER = [
	{
		Header: 'Title',
		Footer: 'Title',
		accessor: 'title',
		Filter: ColumnFilter,
		Cell: (props) => (
			GetContentLanguage(localStorage.getItem('i18nextLng'), props.row.original.title)
		)
	},
	{
		Header: 'Publish date',
		Footer: 'Publish date',
		accessor: 'pubdt',
		Filter: ColumnFilter
	},
	{
		Header: () => (
			<>
				<div className="row">
					<div className="col-xs-12 ml-3">
						<UK width={26} height={26} display="true" />
					</div>
					<div className="col-xs-12 ml-3">
						<VN width={26} height={26} display="true" />
					</div>
					<div className="col-xs-12 ml-3" >
						<JP width={26} height={26} display="true" />
					</div>
				</div>

			</>
		),
		Footer: 'Admin',
		id: 'lang',
		Cell: (props) => {
			const value_en = props.row.original.keyen
			const value_vi = props.row.original.keyvn
			const value_jp = props.row.original.keyjp

			return (
				<>
					<div className="row">
						<div className="col-xs-12 ml-3">
							<Link to={`/post-library-language/${btoa(props.row.original.name)}&${btoa('EN')}`}
								className={`btn ${value_en ? 'btn-success' : 'btn-danger'} shadow btn-xs sharp`}
							>
								<i className={`fa ${value_en ? 'fa-check' : 'fa-remove'} `}
									rel="tooltip"
									title={` ${value_en ? 'English: Completed' : 'Not Translated'} `}></i>
							</Link>
						</div>
						<div className="col-xs-12 ml-3">
							<Link to={`/post-library-language/${btoa(props.row.original.name)}&${btoa('VN')}`}
								className={`btn ${value_vi ? 'btn-success' : 'btn-danger'} shadow btn-xs sharp`}
							>
								<i className={`fa ${value_vi ? 'fa-check' : 'fa-remove'} `}
									rel="tooltip"
									title={` ${value_vi ? 'Vietnamese: Completed' : 'Not Translated'} `}></i>
							</Link>
						</div>

						<div className="col-xs-12 ml-3">
							<Link to={`/post-library-language/${btoa(props.row.original.name)}&${btoa('JP')}`}
								className={`btn ${value_jp ? 'btn-success' : 'btn-danger'} shadow btn-xs sharp`}
							>
								<i className={`fa ${value_jp ? 'fa-check' : 'fa-remove'} `}
									rel="tooltip"
									title={` ${value_jp ? 'Japanese: Completed' : 'Not Translated'} `}></i>
							</Link>
						</div>
					</div>

				</>
			)
		}
	},
	{
		Header: 'Admin',
		Footer: 'Admin',
		Cell: (props) => {
			const dispatch = useDispatch();
			const history = useHistory()
			const handleRemoveLibrary = () => {
				const postData = {
					id: props.row.original.id
				}
				Swal.fire({
					icon: "question",
					title: "Are you want to remove this library?",
					html: "Submit a remove library",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "submit",
					cancelButtonText: "cancel",
				}).then((result) => {
					if (result.value) {
						dispatch(removeLibraryAction(postData,history));
						window.location.reload(true);
					}
				});
			}

			return (
				<>
					<Link to="#" className="btn btn-danger shadow btn-xs sharp mr-2" onClick={() => handleRemoveLibrary()}
					>
						<i className="fa fa-trash"></i>
					</Link>
				</>
			)
		}
	}


]



