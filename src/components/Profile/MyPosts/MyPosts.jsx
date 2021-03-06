import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {
	let myPostsElements =
		[...props.profilePage.posts]
			.reverse()
			.map(p => <Post message={p.post} likecounts={p.likecounts} />);
	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div className={s.itemAll}>
			<div className={s.item}>
				<h3>My Posts</h3>
			</div>
			<div className={s.item}>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						placeholder="New post"
						value={props.profilePage.newPostText}
					/>
				</div>
				<button onClick={onAddPost}>Add post</button>
			</div>
			<div className={s.itemPosts}>
				{myPostsElements}
			</div>
		</div>
	);
});

export default MyPosts;