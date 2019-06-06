import React from 'react';

const withAuthenticate = ComponentA => ComponentB =>
	class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false
			};
		}

		componentDidMount() {
			if (localStorage.getItem('username')) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		}

		render() {
			if (this.state.loggedIn) {
				return <ComponentA />;
			} else {
				return <ComponentB />;
			}
		}
	};

export default withAuthenticate;
