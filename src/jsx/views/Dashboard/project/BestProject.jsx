/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopProjectsAction } from '../../../../store/actions/ProjectAction';
import Project from "../../../components/vKnightHub/Home/slider/Project";
import { useHistory } from 'react-router-dom';


const BestProject = (props) => {
	const history = useHistory();
	const topproject = props.topproject

	useEffect(() => {
		props.fetchTopProject(10,history);
	},[])

	return (
		<>
			<div className="col-xl-12 col-xxl-12">
				<div className="card">
					<div className="card-body">
						<div className="testimonial-one owl-right-nav owl-carousel owl-loaded owl-drag">
							<Project topproject ={topproject}/>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		topproject: state.topproject
	};
};

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchTopProject : (tops,history) => {
            dispatch(getTopProjectsAction(tops,history))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestProject);
