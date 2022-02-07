import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reduser';
import { Navigate } from "react-router-dom";

class Login extends React.Component {
	componentDidMount() {
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
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, { login })(Login);

