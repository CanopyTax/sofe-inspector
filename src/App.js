import React from 'react';
import ServiceList from './ServiceList.js';
import Dialog from './Dialog.js';
import VisualizeDependencies from './VisualizeDependencies.js';
import { getServices, updateService, removeService, getAvailableServices } from './ServiceResource.js';
import styles from './Button.style.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dialog: false,
			services: [],
			visualizingDependencies: false,
		}
	}

	componentWillMount() {
		this.refreshServices();

		getAvailableServices()
			.then((services) => {
				window.sofeServices = services;
				this.setState({
					availableServices: services
				});
			})
			.catch(console.error.bind(console))
	}

	render() {

		return <div style={{
			display: this.props.visible ? 'block' : 'none',
			fontFamily: '"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
			fontSize: 15,
			lineHeight: 1.42857143,
			color: "#ffffff",
			backgroundColor: "#222222",
			position: 'fixed',
			width: '100%',
			height: '400px',
			bottom: 0,
			left: 0,
			zIndex: 1000001,
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 2px 6px 0 rgba(0, 0, 0, 0.26)'
		}}>
			<div className='col-xs-12' style={{
				width: '100%',
				float: 'left',
				position: 'relative',
				minHeight: 1,
				paddingLeft: 15,
				paddingRight: 15
			}}>
				<span onClick={this.props.hideApp} className={styles.closeButton}>x</span>
				<h1 style={{marginBottom: 20}}>sofe inspector</h1>
				<ServiceList
					services={this.state.services}
					updateService={this.updateService.bind(this)}
					renameService={this.renameService.bind(this)}
					deleteService={this.deleteService.bind(this)} />
				<div style={{float: 'right'}}>
					<button onClick={() => this.setState({visualizingDependencies: true})} className={`${styles.btn} ${styles.btnDefault}`} style={{marginRight: '8px'}}>Visualize dependencies</button>
					<button onClick={this.showDialog.bind(this)} className={`${styles.btn} ${styles.btnPrimary}`}>Add a Service</button>
				</div>
				<Dialog
					availableServices={this.state.availableServices}
					show={this.state.dialog}
					closeDialog={this.closeDialog.bind(this)}
					addService={this.addService.bind(this)} />
				{this.state.visualizingDependencies &&
					<VisualizeDependencies
						close={() => this.setState({visualizingDependencies: false})}
					/>
				}
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

	updateService(name, index, e) {
		const url = e.target.value;
		updateService(name, url)
			.then(() => {
				const newServices = [...this.state.services];
				newServices[index].name = name;
				newServices[index].src = url;
				this.setState({services: newServices});
			})
			.catch(console.error.bind(console))
	}

	renameService(e, url, oldName, index) {
		const newName = e.target.value;

		removeService(oldName)
		.then(() => updateService(newName, url))
		.then(() => {
			const newServices = [...this.state.services];
			newServices[index].name = newName;
			newServices[index].src = url;
			this.setState({services: newServices});
		})
		.catch(console.error.bind(console))
	}

	refreshServices() {
		// Whenever we do this, cursor position and focus of inputs is lost. So we only do it when removing/adding a service. Not when modifying.
		getServices()
			.then((services) => {
				this.setState({ services })
			})
			.catch((error) => {
				throw new Error(error);
			})
	}
}
