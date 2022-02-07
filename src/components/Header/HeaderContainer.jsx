import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from './../../redux/auth-reduser'
import { getUsers } from './../../redux/users-reducer'
import { logout } from './../../redux/auth-reduser'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData();
		this.props.getUsers();
	}
	render() {
		return <Header {...this.props} />
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	id: state.auth.id,
	email: state.auth.email,
	login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData, getUsers, logout })(HeaderContainer);