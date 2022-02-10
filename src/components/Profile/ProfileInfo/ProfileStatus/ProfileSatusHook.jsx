import React from 'react';
import { useState } from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatusHook = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useState(() => {
		debugger
		setStatus(props.status);
	}, []);
	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
	return (
		<div>
			{!editMode &&
				<div>
					<span className={style.status}
						onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>}
		</div>
	)
}

// state = {
// 	editMode: false,
// 	status: this.props.status
// }
// activateEditMode = () => {
// 	this.setState({
// 		editMode: true
// 	});
// }
// deactivateEditMode = () => {
// 	this.setState({
// 		editMode: false
// 	});
// 	debugger;
// 	this.props.updateStatus(this.state.status);
// }
// onStatusChange = (e) => {
// 	this.setState({
// 		status: e.currentTarget.value
// 	});
// }
// componentDidUpdate(prevProps, prevState) {
// 	if (prevProps.status !== this.props.status) {
// 		this.setState({
// 			status: this.props.status
// 		})
// 	}
// }


export default ProfileStatusHook;