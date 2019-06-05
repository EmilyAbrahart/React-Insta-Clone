import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import './CommentSection.css';

class CommentSection extends React.Component {
	constructor({ comments, timestamp }) {
		super({ comments, timestamp });
		this.state = {
			comments: this.props.comments,
			timestamp: this.props.timestamp,
			newCommentText: ''
		};
	}


	commentChangeHandler = event => {
		this.setState({
			newCommentText: event.target.value
		});
	};

	addNewComment = event => {
		const newComment = {
			key: uuid(),
			username: 'bestuser2019',
			text: this.state.newCommentText
		};
		event.preventDefault();
		this.setState(state => ({
			comments: state.comments.concat(newComment),
			newCommentText: '',
		}));
	};

	render() {
		const postTimeStamp = moment(
			this.state.timestamp,
			'MMMM Do YYYY, h:mm:ss a'
		).format('YYYYMMDD');
		return (
			<div className="commentSection">
				<div className="commentContainer">
					{this.state.comments.map(comment => (
						<div className="comment" key={uuid()}>
							<div className="commentUserName">{comment.username}</div>
							<div className="commentText">{comment.text}</div>
						</div>
					))}
				</div>
				<div className="timeStamp">
					{moment(postTimeStamp, 'YYYYMMDD').fromNow()}
				</div>
				<div className="commentInputContainer">
					<form onSubmit={this.addNewComment}>
						<input
							className="commentInput"
							placeholder="Add a comment..."
							onChange={this.commentChangeHandler}
							value={this.state.newCommentText}
						/>
						<input className="formSubmit" type="submit" />
					</form>
					<div className="commentMenu">...</div>
				</div>
			</div>
		);
	}
}

export default CommentSection;
