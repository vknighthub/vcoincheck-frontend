import ReactStarRating from "react-star-ratings-component";

function StarRating(props) {
	return (
		<ReactStarRating
			numberOfStar={5}
			numberOfSelectedStar={props.numberOfSelectedStar}
			colorFilledStar="#FF912C"
			colorEmptyStar="#ccc"
			starSize="20px"
			spaceBetweenStar="10px"
			disableOnSelect={true}
		/>
	);
}
export default StarRating;