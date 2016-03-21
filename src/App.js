import React from 'react';
import ServiceList from './ServiceList.js';
import Dialog from './Dialog.js';
import { getServices, updateService, removeService } from './ServiceResource.js';
import styles from './Button.style.css';

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

		return <div style={{
			fontFamily: '"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
			fontSize: 15,
			lineHeight: 1.42857143,
			color: "#ffffff",
			backgroundColor: "#222222",
			position: 'fixed',
			width: '100%',
			height: '400px',
			bottom: 0,
			zIndex: 1000000,
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
					deleteService={this.deleteService.bind(this)} />
				<div style={{float: 'right'}}>
					<button onClick={this.showDialog.bind(this)} className={`${styles.btn} ${styles.btnPrimary}`}>Add a Service</button>
				</div>
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
