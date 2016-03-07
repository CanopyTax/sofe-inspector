import React from 'react';

export default class Dialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			src: ''
		}
	}

	render() {
		let { show, addService, closeDialog } = this.props;

		return <div className="modal fade in" style={{display: show ? 'block' : 'none'}} role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button onClick={closeDialog} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 className="modal-title">Add a new service override</h4>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Name</label>
								<input
									value={this.state.name}
									onChange={this.updateData.bind(this, 'name')}
									type="email"
									className="form-control"
									placeholder="Enter a service name to override" />
							</div>
							<div className="form-group">
								<label>SRC</label>
								<input
									value={this.state.src}
									onChange={this.updateData.bind(this, 'src')}
									type="email"
									className="form-control"
									placeholder="Enter a valid src url" />
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button onClick={closeDialog} type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
						<button onClick={this.addService.bind(this)} type="button" className="btn btn-primary">Save Override</button>
					</div>
				</div>
			</div>
		</div>
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
