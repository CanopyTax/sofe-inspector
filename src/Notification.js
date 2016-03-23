import React from 'react';
import { getServices } from './ServiceResource.js';

export default class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasOverrides: false
		}
	}

	componentWillMount() {
		getServices().then((services) => {
			this.setState({
				hasOverrides: !!services.length
			})
		});
	}

	render() {
		if (this.state.hasOverrides) {
			return <img onClick={this.props.displayApp} style={{
				position: 'fixed',
				cursor: 'pointer',
				right: 0,
				zIndex: 1000000,
				bottom:0,
			}} alt="70.png" src="data:image/png;base64,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"/>
		} else {
			return <img onClick={this.props.displayApp} style={{
				position: 'fixed',
				cursor: 'pointer',
				right: 0,
				zIndex: 1000000,
				bottom:0,
			}} alt="70.png" src="data:image/png;base64,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"/>
		}
	}
}
