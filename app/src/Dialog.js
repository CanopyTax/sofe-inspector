import React from 'react';

export default function Dialog({show, addService, closeDialog}) {
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
							<input type="email" className="form-control" placeholder="Enter a service name to override" />
						</div>
						<div className="form-group">
							<label>SRC</label>
							<input type="email" className="form-control" placeholder="Enter a valid src url" />
						</div>
					</form>
				</div>
				<div className="modal-footer">
					<button onClick={closeDialog} type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
					<button onClick={addService} type="button" className="btn btn-primary">Save Override</button>
				</div>
			</div>
		</div>
	</div>
}
