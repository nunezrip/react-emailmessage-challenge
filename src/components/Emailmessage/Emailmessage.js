import React from 'react';
import PropTypes from 'prop-types';

class Emailmessage extends React.Component {
	render() {
		return (
			<div>
				{this.props.sender}
				{this.props.subject}
				{this.props.date}
				{this.props.message}
			</div>
		);
	}
}

Emailmessage.propTypes = {
	sender: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default Emailmessage;
