import React from 'react';
import formStyles from './Form.style.css';
import buttonStyles from './Button.style.css';

export default function ServiceList({services, updateService, deleteService}) {
	return (services && services.length) ? <div style={{height: '240px', overflow: 'auto', marginBottom: '16px'}}>
		<table className={formStyles.table}>
			<thead>
				<tr className='row'>
					<th style={{width: '20%'}} className='col-xs-2'>Service Name</th>
					<th style={{width: '80%'}} className='col-xs-10'>SRC</th>
				</tr>
			</thead>
			<tbody>
				{services.map((service) => {
					return <tr style={{verticalAlign: 'top'}} className='row' key={service.name}>
						<td style={{padding: 8}} className='col-xs-2'><input value={service.name} disabled className={formStyles.formControl} /></td>
						<td style={{padding: 8}} className='col-xs-9'>
							<div style={{width: 'calc(100% - 40px)', display: 'inline-block'}}>
								<input onChange={updateService.bind(null, service.name)} value={service.src} className={formStyles.formControl} />
							</div>
							<div style={{width: 40, verticalAlign: 'top', display: 'inline-block', position: 'relative', top: -3}}>
								<span onClick={deleteService.bind(null, service.name)} className={buttonStyles.closeButton}>x</span>
							</div>
						</td>
					</tr>
					})}
				</tbody>
			</table>
		</div>: getBlankMessage();
}

function getBlankMessage() {
	return <p style={{padding: 15, background: 'rgba(52, 152, 219, .5)', textAlign: 'center'}}>You do not have any overriden sofe services</p>
}
