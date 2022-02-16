import React from 'react';
import style from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		debugger;
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span className={style.status}
							onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} autoFocus={true}
							onBlur={this.deactivateEditMode}
							value={this.state.status} />
					</div>}
			</div>
		)
	}
}

export default ProfileStatus;