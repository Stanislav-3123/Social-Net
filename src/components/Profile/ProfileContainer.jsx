import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, setUserStatus, updateStatus, getStatus } from './../../redux/profile-reducer'
import { useMatch } from "react-router-dom";
import { WithAuthNavigateComponent } from '../../hoc/WithAuthNavigate';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '21802';
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
		this.props.setUserStatus(userId);
	}
	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	if (this.props.match.params.userId !== this.prevProps.match.params.userId) {
	// 		let userId = this.props.match ? this.props.match.params.userId : '21802';
	// 		this.props. getUserProfile(userId);
	// 		this.props.getStatus(userId);
	// 		this.props.setUserStatus(userId);
	// 	}
	// }
	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
			</div>
		);
	}
}
let AuthNavigateComponent = WithAuthNavigateComponent(ProfileContainer);

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});
const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<AuthNavigateComponent {...props} match={match} />
	)
}

export default connect(mapStateToProps, { setUserStatus, getUserProfile, updateStatus, getStatus })(ProfileMatch);