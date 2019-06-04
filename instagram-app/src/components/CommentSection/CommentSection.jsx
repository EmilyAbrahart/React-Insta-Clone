import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import './CommentSection.css';


const CommentSection = ({ comments, timestamp }) => (
	<div className="commentSection">
		<div className="commentContainer">
			{comments.map(comment => (
				<div className="comment" key={uuid()}>
					<div className="commentUserName">{comment.username}</div>
					<div className="commentText">{comment.text}</div>
				</div>
			))}
		</div>
		<div className="timeStamp">{moment({timestamp}).fromNow()}</div>
		<div className="commentInputContainer">
			<input
				className="commentInput"
				type="text"
				placeholder="Add a comment..."
			/>
			<div className="commentMenu">...</div>
		</div>
	</div>
);
export default CommentSection;
