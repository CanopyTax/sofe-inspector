import React from 'react';
import styles from './Dialog.style.css';
import formStyles from './Form.style.css';
import buttonStyles from './Button.style.css';

export default class Dialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			src: '',
			showAvailableServices: false
		}
	}

	render() {
		let { show, addService, closeDialog, availableServices } = this.props;
		let { showAvailableServices } = this.state;

		return <div className={styles.modal} style={{display: show ? 'block' : 'none'}} role="dialog">
			<div className={styles.modalDialog}>
				<div className={styles.modalContent}>
					{ showAvailableServices ? this.getAvailableServices() : this.getForm() }
				</div>
			</div>
		</div>
	}

	getForm() {
		let { show, addService, closeDialog, availableServices } = this.props;

		return <div>
			<div className={styles.modalHeader}>
				<button onClick={closeDialog} type="button" className={styles.close} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 className={styles.modalTitle}>Add a new service override</h4>
			</div>
			<div className={styles.modalBody}>
				<form>
					<div className={formStyles.formGroup}>
						<label className={formStyles.label}>Name</label>
						<input
							value={this.state.name}
							onChange={this.updateData.bind(this, 'name')}
							type="email"
							className={formStyles.formControl}
							placeholder="Enter a service name to override" />
					</div>
					<div className={formStyles.formGroup}>
						<label className={formStyles.label}>SRC</label>
						<input
							value={this.state.src}
							onChange={this.updateData.bind(this, 'src')}
							type="email"
							className={formStyles.formControl}
							placeholder="Enter a valid src url" />
					</div>
				</form>
			</div>
			<div className={styles.modalFooter}>
				<button
					onClick={closeDialog}
					type="button"
					className={`${buttonStyles.btn} ${buttonStyles.btnDefault}`}
					data-dismiss="modal">Cancel</button>
				<button
					onClick={this.showAvailableServices.bind(this)}
					type="button"
					className={`${buttonStyles.btn} ${buttonStyles.btnDefault}`}
					data-dismiss="modal"
					style={{marginLeft: '20px'}}>Available Services</button>
				<button
					style={{marginLeft: 20}}
					className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`}
					onClick={this.addService.bind(this)}
					type="button">Save Override</button>
			</div>
		</div>
	}

	getAvailableServices() {
		let { closeDialog, availableServices } = this.props;
		let { showAvailableServices } = this.state;
		return <div>
			<div className={styles.modalHeader}>
				<button onClick={closeDialog} type="button" className={styles.close} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 className={styles.modalTitle}>Available Services</h4>
			</div>
			<div className={styles.modalBody} style={{
				height: '200px',
				overflow: 'auto'}} >
				{Object.keys(availableServices).map((serviceName) => <div>
					<a className={buttonStyles.link} onClick={
						this.overrideAvailabeService.bind(this, serviceName, availableServices[serviceName])
					}>{serviceName}</a>
				</div>
				)}
			</div>
			<div className={styles.modalFooter}>
				<button
					onClick={this.closeAvailableServices.bind(this)}
					type="button"
					className={`${buttonStyles.btn} ${buttonStyles.btnDefault}`}
					data-dismiss="modal">Back</button>
			</div>
		</div>
	}

	overrideAvailabeService(serviceName, url) {
		this.props.addService(serviceName, url);
		this.closeAvailableServices();
	}

	showAvailableServices() {
		this.setState({showAvailableServices: true});
	}

	closeAvailableServices() {
		this.setState({showAvailableServices: false});
	}

	updateData(name, e) {
		this.setState({
			[name]: e.target.value
		})
	}

	addService() {
		this.props.addService(this.state.name, this.state.src);
		this.setState({
			name: '', src: ''
		})
	}
}
