import React from 'react';

export default function ServiceList() {
	return <table className="table table-bordered">
		<thead>
			<tr className='row'>
				<th className='col-xs-2'>Service Name</th>
				<th className='col-xs-10'>SRC</th>
			</tr>
		</thead>
		<tbody>
			<tr className='row'>
				<th className='col-xs-2'><input value='canopy-urls' className="form-control" /></th>
				<td className='col-xs-9'>
					<div style={{width: 'calc(100% - 40px)', display: 'inline-block'}}>
						<input value='https://cdn.canopytax.com/sofe/canopy-urls/v5.3.2-7-g3c61fdd/canopy-urls.js' className="form-control" />
					</div>
					<div style={{width: 40, verticalAlign: 'top', display: 'inline-block'}}>
						<button style={{position: 'relative', top: 10, right: 10}} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
}
