var fs = require('fs');
var rollup = require('rollup').rollup;
var babel = require('rollup-plugin-babel')
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');
var replace = require('rollup-plugin-replace');

rollup({
	entry: 'app/src/main.js',
  plugins: [

		replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),

    babel({
      exclude: 'node_modules/**'
    }),

		nodeResolve({
      jsnext: true,
      main: true
    }),

		commonjs({
			include: 'node_modules/**'
		})
  ]
}).then(function(bundle) {
	bundle.write({
		format: 'iife',
		dest: 'app/dist/main.js'
	})
})
