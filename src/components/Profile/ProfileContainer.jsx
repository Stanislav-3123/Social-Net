import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer'
import { useMatch } from "react-router-dom";
import { WithAuthNavigateComponent } from '../../hoc/WithAuthNavigate';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '21802';
		// let userId = this.props.match.params.userId;
		// usersAPI.getProfile(userId).then(response => {
		// 	this.props.setUserProfile(response.data);
		// });
		this.props.getUserProfile(userId);
	}
	render() {
		// if (!this.props.isAuth) return <Navigate to="/login" />
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	}
}
let AuthNavigateComponent = WithAuthNavigateComponent(ProfileContainer);
// let mapStateToPropsForNavigate = (state) => ({
// 	// profile: state.profilePage.profile,
// 	isAuth: state.auth.isAuth
// });

// AuthNavigateComponent = connect(mapStateToPropsForNavigate)(AuthNavigateComponent);
// (props) => {
// 	if (!props.isAuth) return <Navigate to="/login" />
// 	return <ProfileContainer {...props} />
// }
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	// isAuth: state.auth.isAuth
});
const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<AuthNavigateComponent {...props} match={match} />
	)
}

export default connect(mapStateToProps, { getUserProfile })(ProfileMatch);