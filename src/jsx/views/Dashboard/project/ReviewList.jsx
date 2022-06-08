import { Card, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



const ReviewList = (props) => {

	const reviewList = props.review
	const t = props.t

	const handleReviewClick = (rowid) => {
		props.handleSetReviewID(rowid)
	}

	return (
		<>
			<Col lg={12}>
				<Card>
					<Card.Header>
						<Card.Title className="fs-26 text-primary" >{t('reviewlist')}</Card.Title>
					</Card.Header>
					<Card.Body>
						<Table responsive>
							<thead>
								<tr>
									<th className="width80">
										<strong>#</strong>
									</th>
									<th>
										<strong>{t('reviewid')}</strong>
									</th>
									<th>
										<strong>{t('reviewguy')}</strong>
									</th>
									<th>
										<strong>{t('reviewdate')}</strong>
									</th>
									<th>
										<strong>{t('reviewscore')}</strong>
									</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{reviewList.map((review, index) => (
									<tr key={index}>
										<td>
											<strong>{index + 1}</strong>
										</td>
										<td>{review.reviewid}</td>
										<td>{review.username}</td>
										<td>{review.reviewdate}</td>
										<td>{review.scores}</td>
										<td>
											<Link onClick={() => props.checkView()}
												to="#"
												className="btn btn-success shadow btn-xs sharp mr-2"
											>
												<i className="fa fa-book"></i>
											</Link>
											<Link onClick={() => { props.checkBuy(); handleReviewClick(review.reviewid) }}
												to="#"
												className="btn btn-primary shadow btn-xs sharp"
											>
												<i className="fa fa-exchange-alt"></i>
											</Link>
										</td>
									</tr>
								))}

							</tbody>
						</Table>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default ReviewList;
