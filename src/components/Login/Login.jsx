import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reduser';


class Login extends React.Component {
	componentDidMount() {

	}
	// loginUser(email, password, rememberMe) {
	// 	this.props.login(email, password, rememberMe);
	// }

	render() {
		return <div>
			<h1>Login</h1>
			<LoginForm login={this.props.login} />
		</div>
	}
}
// let mapStateToProps = (state) => {
// 	return {
// 		login: state.auth.login
// 	}
//}

export default connect(null, { login })(Login);

// const LoginForm = (props) => {
	// 	return (
	// 		<form>
	// 			<div>
	// 				<input placeholder={"Login"} />
	// 			</div>
	// 			<div>
	// 				<input placeholder={"Password"} />
	// 			</div>
	// 			<div>
	// 				<input type='checkbox' /> rememder me
	// 			</div>
	// 			<div>
	// 				<button>Login</button>
	// 			</div>
	// 		</form>
	// 	)
	// }
