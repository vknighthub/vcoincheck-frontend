import { Fragment } from "react";
import { connect } from 'react-redux';
import { UserDetails } from "../../../../store/selectors/AuthSelectors";
import PageTitle from "../../../layouts/PageTitle";
import Overviews from "./Profile/Overviews";
import UserProfile from "./Profile/UserProfile";

const AppProfile = (props) => {
	const user = props.users;
	return (
		<Fragment>
			<PageTitle activeMenu="Profile" motherMenu="App" />
			<Overviews users ={user}/>
			<UserProfile users ={user}/>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
    users : UserDetails(state)
})

const mapDispatchToProps = {}

export default  connect(mapStateToProps, mapDispatchToProps)(AppProfile);
