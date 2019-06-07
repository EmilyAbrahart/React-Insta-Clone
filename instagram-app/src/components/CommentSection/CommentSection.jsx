import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
//import './CommentSection.css';
import styled from 'styled-components';
import { FlexFunc, ContainerDiv } from './../Styles/ReusableStyles';

const CommentDiv = styled.div`
	${FlexFunc('row', 'flex-start', 'center')};
	padding: 0 1rem;
	width: 100%;
	box-sizing: border-box;

	.commentUserName {
		font-weight: bold;
		padding-right: 0.5rem;
	}
`;

const TimeStamp = styled.div`
	color: gray;
	text-align: left;
	padding: 0.5rem 1rem;
	font-size: 0.8rem;
	align-self: flex-start;
`;

const CommentInputContainer = styled.div`
	${FlexFunc('row', 'space-between', 'baseline')};
	border-top: 1px solid rgba(211, 211, 211, 0.5);
	margin-top: 0.5rem;
	width: 100%;

	.commentInput {
		width: 600px;
		font-size: 1rem;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border: none;
		outline: none;
	}

	.commentMenu {
		font-size: 2rem;
		padding: 0 1rem;
	}

	.formSubmit {
		display: none;
	}
`;

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
			newCommentText: ''
		}));
	};

	render() {
		const postTimeStamp = moment(
			this.state.timestamp,
			'MMMM Do YYYY, h:mm:ss a'
		).format('YYYYMMDD');
		return (
			<ContainerDiv className="commentSection">
				<ContainerDiv className="commentContainer">
					{this.state.comments.map(comment => (
						<CommentDiv key={uuid()}>
							<div className="commentUserName">{comment.username}</div>
							<div className="commentText">{comment.text}</div>
						</CommentDiv>
					))}
				</ContainerDiv>
				<TimeStamp>{moment(postTimeStamp, 'YYYYMMDD').fromNow()}</TimeStamp>
				<CommentInputContainer>
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
				</CommentInputContainer>
			</ContainerDiv>
		);
	}
}

export default CommentSection;
