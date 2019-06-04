import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from './../CommentSection/CommentSection';

const PostContainer = ({ postContent }) => (
	<div className="postContainer">
		{postContent.map(post => (
			<div className="post">
				<div className="postHeader">
					<img
						className="postUserImage"
						src={post.thumbnailUrl}
						alt={post.username}
					/>
					<div className="postUsername">{post.username}</div>
				</div>
				<img className="postImage" src={post.imageUrl} alt={post.username} />
				<CommentSection comments={post.comments} />
			</div>
		))}
	</div>
);

export default PostContainer;
