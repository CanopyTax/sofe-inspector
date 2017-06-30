import { getAllManifests } from 'sofe';

let update = (name, src) => Promise.resolve();
let remove = (name) => Promise.resolve();

let lastServiceGuid = 0;

export function getServices() {
	return new Promise((resolve, reject) => {
		let services = [];

		for (let i = 0, iLength = localStorage.length; i < iLength; i++ ) {
			if (localStorage.key(i).match(/sofe:(\S)+/g)) {
				services.push(
					{
						name: (/sofe:((\S)+)/g).exec(localStorage.key(i))[1],
						src: localStorage.getItem(localStorage.key(i)),
						id: ++lastServiceGuid,
					}
				);
			}
		}
		resolve(services);
	});
}

export function updateService(name, src) {
	localStorage.setItem(`sofe:${name}`, src);
	return update(name, src);
}

export function removeService(name) {
	localStorage.removeItem((`sofe:${name}`));
	return remove(name);
}

export function getAvailableServices() {
	const sofe = (System && System.sofe) || {};

	return new Promise((resolve, reject) => {
		getAllManifests()
			.then(manifests => {
				resolve(manifests.flat || {});
			})
			.catch(reject);
	});
}

export function setMiddleWare(middleware) {
	if (!middleware) throw new Error('Must pass a middleware object with either an "update" or "remove" promise');

	if (middleware.update) update = middleware.update;
	if (middleware.remove) remove = middleware.remove;
}
