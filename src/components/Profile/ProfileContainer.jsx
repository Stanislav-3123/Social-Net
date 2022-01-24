import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer'
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '21802';
        // let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});
const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}

export default connect(mapStateToProps, {setUserProfile})(ProfileMatch);