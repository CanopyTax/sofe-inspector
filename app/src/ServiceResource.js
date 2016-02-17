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
		chrome.devtools.inspectedWindow.eval(_getServices, (result, isException) => {
			if (isException) {
				reject(isException);
			} else {
				resolve(result);
			}
		});
	});
}

export function updateService(name, src) {
	return new Promise((resolve, reject) => {
		chrome.devtools.inspectedWindow.eval(`localStorage.setItem(('sofe:${name}'), '${src}');`, (result, isException) => {
			if (isException) {
				reject(isException);
			} else {
				resolve(result);
			}
		});
	})
	
}

export function removeService(name) {
	return new Promise((resolve, reject) => {
		chrome.devtools.inspectedWindow.eval(`localStorage.removeItem(('sofe:${name}'));`, (result, isException) => {
			if (isException) {
				reject(isException);
			} else {
				resolve(result);
			}
		});
	})
}
