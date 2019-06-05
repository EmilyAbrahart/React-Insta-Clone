import React from 'react';
import PostPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <ComponentFromWithAuthenticate />;
	}
}
export default App;
