import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	loginChangeHandler = event => {
		this.setState({
			username: event.target.value
		});
	};

	passwordChangeHandler = event => {
		this.setState({
			password: event.target.value
		});
	};

	login = () => {
		const username = this.state.username;
		localStorage.setItem('username', username);
	};

	render() {
		return (
			<div className="loginContainer">
				<h1>Welcome to Instagram</h1>
				<form action="" onSubmit={this.login}>
					<input
						type="text"
						className="username"
						value={this.state.username}
						onChange={this.loginChangeHandler}
					/>
					<input
						type="text"
						className="password"
						value={this.state.password}
						onChange={this.passwordChangeHandler}
					/>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
