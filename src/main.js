import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import Notification from './Notification.js';

export default boot;

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appDisplayed: false
		}
	}

	render() {
		if (this.state.appDisplayed) {
			return <App hideApp={this.hideApp.bind(this)} />;
		} else {
			return <Notification displayApp={this.showApp.bind(this)} />
		}
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


function boot() {
	let wrapper = document.createElement('div');
	wrapper.id = 'sofe-inspector';

	document.body.appendChild(wrapper);

	ReactDOM.render(<Root />, document.getElementById('sofe-inspector'));
}
