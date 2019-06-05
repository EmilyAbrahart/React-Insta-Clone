import React from 'react';
import PostPage from './components/PostContainer/PostsPage'
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);	
}

render (){
	return (
		<PostPage />
	)
}
}
export default App;
