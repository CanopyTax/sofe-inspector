import React from 'react';
import ServiceList from './ServiceList.js';
import Dialog from './Dialog.js';
import { getServices, updateService, removeService } from './ServiceResource.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dialog: false,
			services: []
		}
	} 

	componentWillMount() {
		this.refreshServices();
	}

	render() {
		return <div className='row'>
			<div className='col-xs-12'>
				<h1 style={{marginBottom: 20}}>sofe inspector</h1>
				<ServiceList
					services={this.state.services}
					updateService={this.updateService.bind(this)}
					deleteService={this.deleteService.bind(this)} />
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

	addService(name, src) {
		updateService(name, src)
			.then(this.refreshServices.bind(this))
			.catch(console.error.bind(console))

		this.closeDialog();
	}

	deleteService(name) {
		removeService(name)
			.then(this.refreshServices.bind(this))
			.catch(console.error.bind(console))
	}

	updateService(name, e) {
		updateService(name, e.target.value)
			.then(this.refreshServices.bind(this))
			.catch(console.error.bind(console))
	}

	refreshServices() {
		getServices()
			.then((services) => {
				this.setState({ services })
			})
			.catch((error) => {
				throw new Error(error);
			})
	}
}
