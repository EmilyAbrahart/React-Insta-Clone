import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import CommentSection from './../CommentSection/CommentSection';

const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;

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
			<div className="post">
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
			</div>
		);
	}
}

export default Post;
