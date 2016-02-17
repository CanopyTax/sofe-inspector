import React from 'react';
import ServiceList from './ServiceList.js';
import Dialog from './Dialog.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dialog: false
		}
	} 

	render() {
		return <div className='row'>
			<div className='col-xs-12'>
				<h1 style={{marginBottom: 10}}>sofe inspector</h1>
				<ServiceList />
				<div className="pull-right"><button onClick={this.showDialog.bind(this)} className='btn btn-primary'>Add a Service</button></div>
				<Dialog
					show={this.state.dialog}
					closeDialog={this.closeDialog.bind(this)}
					addService={this.addService.bind(this)} />
			</div>
		</div>
	}

	showDialog() {
		this.setState({
			dialog: true
		})
	}

	closeDialog() {
		this.setState({
			dialog: false
		})
	}

	addService() {
		this.closeDialog();
	}
}
