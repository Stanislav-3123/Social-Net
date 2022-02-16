import React from "react";
import Users from './Users'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from './../../redux/users-reducer'
import Preloader from "../../common/preloader/preloader";
import { WithAuthNavigateComponent } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		this.props.setCurrentPage(pageNumber);
	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
				pageSize={this.props.pageSize}
				onPageChange={this.onPageChange}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}
let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}
export default compose(
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
	WithAuthNavigateComponent
)(UsersContainer);