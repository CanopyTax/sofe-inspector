import React from 'react';
import ReactDOM from 'react-dom';

import ServiceList from './service-list.js';

ReactDOM.render(<div class='row'>
	<div class='col-xs-12'>
		<h1 style={{marginBottom: 10}}>sofe inspector</h1>
		<ServiceList />
		<div className="pull-right"><button className='btn btn-primary'>Add a Service</button></div>

		<div className="modal fade in" style={{display: 'block'}} tabindex="-1" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 className="modal-title">Add a new service override</h4>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label for="service-name">Name</label>
								<input type="email" className="form-control" id="service-name" placeholder="Enter a service name to override" />
							</div>
							<div className="form-group">
								<label for="service-src">SRC</label>
								<input type="email" className="form-control" id="service-src" placeholder="Enter a valid src url" />
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
						<button type="button" className="btn btn-primary">Save Override</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>, document.getElementById('app'));
			
