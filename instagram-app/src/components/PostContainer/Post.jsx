import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import CommentSection from './../CommentSection/CommentSection';
import styled from 'styled-components';
import FlexFunc from './../Styles/ReusableStyles';

const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;

const PostDiv = styled.div`
	${FlexFunc('column', 'center', 'center')};
	border: 1px solid rgba(211, 211, 211, 0.3);
	width: 700px;
	margin: 1rem 0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	div {
		&.postHeader {
			${FlexFunc('row', 'flex-start', 'center')};
			width: 100%;
			padding: 0.5rem;
		}

		&.postInteractions {
			${FlexFunc('column', 'center', 'flex-start')};
			width: 100%;
			padding: 0 1rem;
			box-sizing: border-box;

			.likeData {
				font-weight: bold;
			}

			.postInteractionsIcons {
				display: flex;
				font-size: 2rem;

				div {
					cursor: pointer;
					padding-right: 0.6rem;
				}
			}
		}
	}

	img {
		&.postUserImage {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			padding: 0 1rem;
		}

		&.postImage {
			width: 100%;
		}
	}
`;

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: props.likes
		};
	}

	addNewLike = () => {
		this.setState({
			likes: this.state.likes + 1
		});
	};

	render() {
		return (
			<PostDiv>
				<div className="postHeader">
					<img
						className="postUserImage"
						src={this.props.thumbnailUrl}
						alt={this.props.username}
					/>
					<div className="postUsername">{this.props.username}</div>
				</div>
				<img
					className="postImage"
					src={this.props.imageUrl}
					alt={this.props.username}
				/>
				<div className="postInteractions">
					<div className="postInteractionsIcons">
						<div className="likeIcon" onClick={this.addNewLike}>
							{heartIcon}
						</div>
						<div className="commentIcon">{commentIcon}</div>
					</div>
					<div className="likeData">{this.state.likes} likes</div>
				</div>
				<CommentSection
					comments={this.props.comments}
					timestamp={this.props.timestamp}
				/>
			</PostDiv>
		);
	}
}

export default Post;
