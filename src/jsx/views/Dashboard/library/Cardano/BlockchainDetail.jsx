import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { getBKByName } from './../../../../../store/selectors/BKSelector';
import PostComment from '../../../../views/Dashboard/library/comment/PostComment'

const BlockchainDetail = (props) => {

	const bkdetail = props.bkdetail

	return (
		<div>
			<div>
				<div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body">
								<div className="post-details">

									<h1 className="mb-2 text-black text-center pb-2">
										{bkdetail.title}
									</h1>

									<ul className="mb-4 post-meta d-flex flex-wrap justify-content-center">
										<li className="post-date mr-3">
											<i className="fa fa-calender" />
											Published date: {bkdetail.createdt}
										</li>
									</ul>

									<img src={bkdetail.image} alt="" className="img-fluid mb-3 w-100" />
									<p className="text-blue fs-18 my-3">
										{bkdetail.summary}
									</p>
									<div>
										{parse(bkdetail.content)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<PostComment />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	bkdetail: getBKByName(state, ownProps.match.params.name)
})

export default connect(mapStateToProps, null)(BlockchainDetail);
