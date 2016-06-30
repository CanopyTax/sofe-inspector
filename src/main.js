import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import Notification from './Notification.js';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appDisplayed: false
		}
	}

	render() {
		// Doesn't hurt to show the notification even when the app is open, since it's z-index is smaller than App's
		const notificationVisible = true;
		return (
			<div>
				<App
					hideApp={this.hideApp.bind(this)}
					visible={this.state.appDisplayed}
					{...this.props}
				/>
				<Notification
					displayApp={this.showApp.bind(this)}
					visible={notificationVisible}
					{...this.props}
				/>
			</div>
		);
	}

	showApp() {
		this.setState({
			appDisplayed: true
		})
	}

	hideApp() {
		this.setState({
			appDisplayed: false
		})
	}
}

export default function boot(props) {
	let wrapper = document.createElement('div');
	wrapper.id = 'sofe-inspector';

	document.body.appendChild(wrapper);

	ReactDOM.render(<Root {...props} />, document.getElementById('sofe-inspector'));
}
