import React from 'react';

const CommentSection = ({ comments }) => (
	<div className="commentSection">
		<div className="commentContainer">
			{comments.map(comment => (
				<div className="comment">
					<div className="userName">{comment.username}</div>
					<div className="commentText">{comment.text}</div>
				</div>
			))}
		</div>
		<input className="commentInput" type="text" placeholder="Add a comment..."/>
	</div>
);

export default CommentSection;
