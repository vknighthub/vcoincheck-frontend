import { Fragment } from "react";
import { connect } from 'react-redux';
import { UserDetails } from "../../../../store/selectors/AuthSelectors";
import PageTitle from "../../../layouts/PageTitle";
import Overviews from "./Profile/Overviews";
import UserProfile from "./Profile/UserProfile";
import { withTranslation, useTranslation } from "react-i18next";

const AppProfile = (props) => {
	const { t } = useTranslation();

	const user = props.users;
	return (
		<Fragment>
			<PageTitle activeMenu={t('profile')} motherMenu={t('usermanagement')} path="app-profile" />
			<Overviews users={user} t={t} />
			<UserProfile users={user} t={t} />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	users: UserDetails(state)
})

const mapDispatchToProps = {}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(AppProfile));
