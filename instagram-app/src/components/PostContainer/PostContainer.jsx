import React from 'react';
import Post from './Post';
import './PostContainer.css';
import uuid from 'uuid';

const PostContainer = ({ postContent }) => (
	<div className="postContainer">
		{postContent.map(post => (
			<Post
				username={post.username}
				thumbnailUrl={post.thumbnailUrl}
				imageUrl={post.imageUrl}
				likes={post.likes}
				timestamp={post.timestamp}
				comments={post.comments}
				key={uuid()}
			/>
		))}
	</div>
);

export default PostContainer;
