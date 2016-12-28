import React from 'react';
import vis from 'vis';
import 'vis/dist/vis.css!css';
import styles from './VisualizeDependencies.style.css';

export default class VisualizeDependencies extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			nodes: null,
			edges: null,
			errMessage: null,
		};
	}
	componentDidMount() {
		if (!SystemJS.getConfig().trace) {
			this.setState({errMessage: `Visualizing the sofe dependencies requires SystemJS.config({trace: true}). Please set that before loading any sofe services so that all dependencies will be traced.
				If you work at Canopy, try again after running localStorage.setItem('common-deps', true) and reloading the page`});
			return;
		}

		SystemJS.import('sofe')
		.then(sofe => sofe.getAllManifests())
		.then(manifests => {
			return Promise.all(Object.keys(manifests.flat).map(serviceName => SystemJS.import(`${serviceName}!sofe`)))
				.then(modules => Promise.all(Object.keys(manifests.flat).map(serviceName => SystemJS.normalize(`${serviceName}!sofe`))))
				.then(normalizedServiceNames => normalizedServiceNames.map((normalizedServiceName, index) => {
					return {normalized: normalizedServiceName, name: Object.keys(manifests.flat)[index]};
				}))
		})
		.then(services => {
			const edges = services.reduce((edges, service) => {
				if (!SystemJS.loads[service.normalized]) {
					// This sofe service has no dependencies
					return edges;
				} else {
					return edges.concat(SystemJS.loads[service.normalized].deps.map(dep => {
						const to = dep.indexOf('!') >= 0 ? dep.slice(0, dep.indexOf('!')) : dep;
						return {
							from: service.name,
							to,
						};
					}));
				}
			}, []);
			const nodes = services.map(service => ({id: service.name, label: service.name, title: this.getNodeTitle(service, edges)}));

			const data = {nodes, edges};
			const options = {
				nodes: {
					color: {
						highlight: {
							background: '#90EE90',
						},
					},
				},
				edges: {
					arrows: {
						to: {
							enabled: true,
							scaleFactor: 1
						},
					},
					color: {
						color: 'black',
						highlight: 'orange',
						hover: 'green,'
					},
				},
				physics: {
					solver: 'repulsion',
					// barnesHut: {
					// 	// gravitationalConstant: -2000,
					// 	centralGravity: 0.1,
					// 	springLength: 200,
					// 	// springConstant: 0.6,
					// 	// avoidOverlap: 0.1,
					// },
					// forceAtlas2Based: {
					// 	springLength: 150,
					// 	avoidOverlap: 0.1,
					// 	springConstant: 0.6,
					// },
					repulsion: {
						nodeDistance: 230,
						springConstant: 0.02,
						springLength: 220,
					},
				},
			};
			this.network = new vis.Network(this.el, data, options);
			this.setState({nodes, edges})
		})
		.catch(err => {
			console.error("Cannot show visualization of sofe dependencies -- sofe might not be set up correctly");
			console.error(err);
		});
	}
	render() {
		return (
			<div className={styles.fixedContainer}>
				<div className={styles.header}>
					<h1>
						Sofe service dependency visualization
						{this.state.nodes &&
							<span>&nbsp;({this.state.nodes.length} total services)</span>
						}
					</h1>
					<a onClick={this.props.close}>
						Close visualization
					</a>
					{this.state.errMessage &&
						<div className={styles.err}>
							{this.state.errMessage}
						</div>
					}
				</div>
				<div className={styles.visualization} ref={el => this.el = el} />
			</div>
		);
	}
	getNodeTitle = (service, edges) => {
		const dependencies = edges.filter(edge => edge.from === service.name).map(edge => edge.to).sort();
		const dependents = edges.filter(edge => edge.to === service.name).map(edge => edge.from).sort();
		return `
			<b>${dependencies.length} dependencies:</b>
			<ul>
				${dependencies.map(dependency => `<li>${dependency}</li>`).join('')}
			</ul>
			<b>${dependents.length} dependents:</b>
			<ul>
				${dependents.map(dependent => `<li>${dependent}</li>`).join('')}
			</ul>
		`;
	}
}
