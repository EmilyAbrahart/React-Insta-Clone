import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import './CommentSection.css';



export default function CommentSection ({ comments, timestamp })  {
	const postTimeStamp = moment(timestamp, "MMMM Do YYYY, h:mm:ss a").format('YYYYMMDD');

return (
	<div className="commentSection">
		<div className="commentContainer">
			{comments.map(comment => (
				<div className="comment" key={uuid()}>
					<div className="commentUserName">{comment.username}</div>
					<div className="commentText">{comment.text}</div>
				</div>
			))}
		</div>
		<div className="timeStamp">{moment(postTimeStamp,"YYYYMMDD").fromNow()} </div>
		<div className="commentInputContainer">
			<input
				className="commentInput"
				type="text"
				placeholder="Add a comment..."
			/>
			<div className="commentMenu">...</div>
		</div>
	</div>
)}

