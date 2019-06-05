import React from 'react';
import PostPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component {
	render() {
		return <ComponentFromWithAuthenticate />;
	}
}
export default App;
