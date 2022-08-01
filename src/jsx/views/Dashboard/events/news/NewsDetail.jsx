import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { getNewsByName } from '../../../../../store/selectors/NewsSelector';


const NewsDetail = (props) => {

	const { newsdetail } = props

	return (
		<div>
			<div>

				<div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body">
								<div className="post-details">

									<h1 className="mb-2 text-black text-center pb-2">
										{newsdetail.title}
									</h1>

									<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
										<li className="post-date mr-3">
											<i className="fa fa-calender" />
											Published date: {newsdetail.createdt}
										</li>
									</ul>

									<img src={newsdetail.image} alt="" className="img-fluid mb-3 w-100" />
									<p className="text-blue fs-18 my-3">
										{newsdetail.summary}
									</p>
									<div>
										{parse(newsdetail.content)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	newsdetail: getNewsByName(state, ownProps.match.params.name)
})
export default connect(mapStateToProps, null)(NewsDetail);
