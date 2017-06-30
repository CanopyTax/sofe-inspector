# sofe-inspector
A developer tool for overriding and viewing available sofe services.

## Setup
1. [Setup sofe](https://github.com/CanopyTax/sofe)
2. Either programaticaly, or within your console: `System.import('sofe-inspector!sofe').then(inspector => inspector())`

## Usage
You can drag the sofe icon around and it will persist in local storage. Clicking on the icon will open up the inspector.
Once the inspector is open, you can list the available sofe services that are currently being loaded, and you can add, change,
or delete an override.

Also, you can provide an `opts` object to the inspector, with the following options:
```js
{
	iconPositionTop: Number, // an integer number of pixels that will be used for the default top position (before dragging occurs)
	iconPositionLeft: Number, // an integer number of pixels that will be used for the default left position (before dragging occurs)
	middleware: Middleware // An object to provide middleware hooks for defining service overrides.
}
```

## Middleware
An example middleware object:
```
{
	update: (name, src) => {
		console.log(name, src); // do something with the name and src
		return Promise.resolve();
	},
	remove: (name) => {
		console.log(name); // do something with the name
		return Promise.resolve();
	}
}
```
