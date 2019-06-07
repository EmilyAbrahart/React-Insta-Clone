import React from 'react';
import dummyData from './../../dummy-data';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './../PostContainer/PostContainer';

class PostsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: [],
			searchQuery: ''
		};
	}
	componentDidMount() {
		this.setState({
			postData: dummyData
		});
	}
	searchChangeHandler = event => {
		this.setState({ searchQuery: event.target.value });
		this.searchPosts();
	};

	searchPosts = () => {
		if (this.state.searchQuery.length !== 0) {
			this.setState({
				postData: this.state.postData.filter(post =>
					post.username.toLowerCase().includes(this.state.searchQuery)
				)
			});
		}
		else this.setState({postData : dummyData})
	};

	render() {
		return (
			<div className="App">
				<SearchBar
					searchQuery={this.state.searchQuery}
					searchChangeHandler={this.searchChangeHandler}
				/>
				<PostContainer postContent={this.state.postData} />
			</div>
		);
	}
}

export default PostsPage;
