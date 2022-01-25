import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserId, setAuthUserEmail, setAuthUserLogin } from './../../redux/auth-reduser'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(response => {
      debugger;
        // if (response.data.resultCode === 0) {
        //   let {id, email, login} = response.data.data;
        //   this.props.setAuthUserData(id, email, login);
        // }
        if (response.data.resultCode === 0) {
          this.props.setAuthUserId(response.data.data.id);
          this.props.setAuthUserEmail(response.data.data.email);
          this.props.setAuthUserLogin(response.data.data.login);
        }
    });
  }
  render() {
    return <Header { ...this.props }/>
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserId, setAuthUserEmail, setAuthUserLogin})(HeaderContainer);