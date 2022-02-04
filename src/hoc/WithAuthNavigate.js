import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForNavigate = (state) => ({
	// profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
});
export const WithAuthNavigateComponent = (Component) => {
	class NavigateComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to="/login" />
			return <Component {...this.props} />
		}
	}
	let ConnectedNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)
	return ConnectedNavigateComponent;
}
