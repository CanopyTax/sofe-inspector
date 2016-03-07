import React from 'react';

export default function ServiceList({services, updateService, deleteService}) {
	return (services && services.length) ? <table className="table table-bordered">
		<thead>
			<tr className='row'>
				<th className='col-xs-2'>Service Name</th>
				<th className='col-xs-10'>SRC</th>
			</tr>
		</thead>
		<tbody>
			{services.map((service) => {
				return <tr className='row' key={service.name}>
				<th className='col-xs-2'><input value={service.name} disabled className="form-control" /></th>
				<td className='col-xs-9'>
					<div style={{width: 'calc(100% - 40px)', display: 'inline-block'}}>
						<input onChange={updateService.bind(null, service.name)} value={service.src} className="form-control" />
					</div>
					<div style={{width: 40, verticalAlign: 'top', display: 'inline-block'}}>
						<button onClick={deleteService.bind(null, service.name)} style={{position: 'relative', top: 10, right: 10}} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
				</td>
			</tr>
			})}
		</tbody>
	</table> : getBlankMessage();
}

function getBlankMessage() {
	return <p style={{padding: 15, background: 'rgba(52, 152, 219, .5)'}} className="text-center">You do not have any loaded sofe services</p>
}
