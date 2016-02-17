import React from 'react';
import ServiceList from './ServiceList.js';
import Dialog from './Dialog.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	} 

	render() {
		return <div class='row'>
			<div class='col-xs-12'>
				<h1 style={{marginBottom: 10}}>sofe inspector</h1>
				<ServiceList />
				<div className="pull-right"><button className='btn btn-primary'>Add a Service</button></div>
				<Dialog />
			</div>
		</div>
	}
}
