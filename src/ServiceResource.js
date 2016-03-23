import 'whatwg-fetch';

const _getServices = `
	(function() {
		'use strict';
		var services = [];

		for (var i = 0, iLength = localStorage.length; i < iLength; i++ ) {
			if (localStorage.key(i).match(/sofe:(\\S)+/g)) {
				services.push(
					{
						name: (/sofe:((\\S)+)/g).exec(localStorage.key(i))[1],
						src: localStorage.getItem(localStorage.key(i))
					}
				);
			}
		}

		return services;
	})()
`

export function getServices() {
	return new Promise((resolve, reject) => {
		let services = [];

		for (var i = 0, iLength = localStorage.length; i < iLength; i++ ) {
			if (localStorage.key(i).match(/sofe:(\S)+/g)) {
				services.push(
					{
						name: (/sofe:((\S)+)/g).exec(localStorage.key(i))[1],
						src: localStorage.getItem(localStorage.key(i))
					}
				);
			}
		}
		resolve(services);
	});
}

export function updateService(name, src) {
	return new Promise((resolve, reject) => {
		localStorage.setItem(`sofe:${name}`, src);
		resolve();
	})
}

export function removeService(name) {
	return new Promise((resolve, reject) => {
		localStorage.removeItem((`sofe:${name}`));
		resolve();
	})
}

export function getAvailableServices() {
	const sofe = (System && System.sofe) || {};

	return new Promise((resolve, reject) => {
		if (sofe.manifestUrl) {
			buildManifest(sofe.manifestUrl)
				.then(manifest => resolve({
					...manifest,
					...(sofe.manifest || {})
				}))
				.catch(reject);
		} else {
			resolve(sofe.manifest || {});
		}
	});
}

function buildManifest(url, manifest) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(resp => resp.json())
			.then(json => {
				const extendedManifest = {
					...manifest,
					...(json.sofe.manifest || {})
				};

				if (json.sofe.manifestUrl) {
					buildManifest(json.sofe.manifestUrl, extendedManifest).then(resolve).catch(reject);
				} else {
					resolve(extendedManifest)
				}
			})
	});
}
