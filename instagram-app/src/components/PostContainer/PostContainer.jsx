import React from 'react';
import Post from './Post';
import uuid from 'uuid';
import {ContainerDiv} from './../Styles/ReusableStyles';


const PostContainer = ({ postContent }) => (
	<ContainerDiv direction="column" justify="center" align="center">
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
	</ContainerDiv>
);

export default PostContainer;
