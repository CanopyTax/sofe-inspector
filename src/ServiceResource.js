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
