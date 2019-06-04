import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import CommentSection from './../CommentSection/CommentSection';
import './PostContainer.css';

const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;

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
				<div className="postInteractions">
					<div className="postInteractionsIcons">
						<div className="likeIcon">{heartIcon}</div>
						<div className="commentIcon">{commentIcon}</div>
					</div>
					<div className="likeData">{post.likes} likes</div>
				</div>
				<CommentSection comments={post.comments} timestamp={post.timestamp} />
			</div>
		))}
	</div>
);

export default PostContainer;
