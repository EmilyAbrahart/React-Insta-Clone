import React from 'react';

const withAuthentication = Component =>
	class extends React.Component {
		render() {
			return <Component />;
		}
	};

export default withAuthentication;
