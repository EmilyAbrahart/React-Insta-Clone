import React from 'react';
import Post from './Post';
//import './PostContainer.css';
import uuid from 'uuid';
import styled from 'styled-components';
import FlexFunc from './../Styles/ReusableStyles';

const PostContainerDiv = styled.div`
${FlexFunc("column", "space-around", "center")}
`

const PostContainer = ({ postContent }) => (
	<PostContainerDiv>
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
	</PostContainerDiv>
);

export default PostContainer;
