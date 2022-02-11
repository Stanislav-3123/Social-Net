import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from 'react-redux';
import { login, getAuthUserData } from './../../redux/auth-reduser';
import { Navigate } from "react-router-dom";

class Login extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData();
	}
	render() {
		if (this.props.isAuth) {
			return <Navigate to="/profile" />
		}
		return <div>
			<h1>Login</h1>
			<LoginForm login={this.props.login} />
		</div>
	}
}
let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, { login, getAuthUserData })(Login);

