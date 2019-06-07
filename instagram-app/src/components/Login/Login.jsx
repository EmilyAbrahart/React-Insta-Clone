import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import {
	FlexFunc,
	Input,
	ContainerDiv,
	LogoContainer,
	Button
} from './../Styles/ReusableStyles';

const igLogo = <FontAwesomeIcon icon={faInstagram} />;

const LoginContainerDiv = styled(ContainerDiv)`
	margin: 250px auto;
	height: 300px;
`;

const Form = styled.form`
	${FlexFunc('column', 'space-evenly', 'center')};
	width: 100%;
`;

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
			<LoginContainerDiv>
				<LogoContainer>
					<div className="logo">{igLogo}</div> <div>|</div>
					<div className="logoText">Instagram</div>
				</LogoContainer>

				<Form action="" onSubmit={this.login}>
					<Input
						inputMargin="1rem"
						type="text"
						className="username"
						value={this.state.username}
						onChange={this.loginChangeHandler}
					/>
					<Input
						inputMargin="1rem"
						type="text"
						className="password"
						value={this.state.password}
						onChange={this.passwordChangeHandler}
					/>
					<Button type="submit">Login</Button>
				</Form>
			</LoginContainerDiv>
		);
	}
}

export default Login;
