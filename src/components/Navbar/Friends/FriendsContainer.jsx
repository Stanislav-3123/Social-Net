import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import axios from 'axios';
import { usersAPI } from '../../../api/api';

class FriendsContainer extends React.Component {
	componentDidMount() {

		axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
			response.data.items.id.followed;
		})
	}
	render() {
		return <>
			< Friends
				sidebar={this.props.sidebar} />
		</>
	}
}
let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
	}
}
export default connect(mapStateToProps)(FriendsContainer);
