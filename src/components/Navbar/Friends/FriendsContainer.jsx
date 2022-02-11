import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getFollowedUsers } from '../../../redux/sidebar-reducer';

class FriendsContainer extends React.Component {
	componentDidMount() {
		this.props.getFollowedUsers();
	}
	render() {
		return <>
			< Friends
				followedUsers={this.props.followedUsers}
				sidebar={this.props.sidebar} />
		</>
	}
}
let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar,
		followedUsers: state.sidebar.followedUsers
	}
}
export default connect(mapStateToProps, { getFollowedUsers })(FriendsContainer);
