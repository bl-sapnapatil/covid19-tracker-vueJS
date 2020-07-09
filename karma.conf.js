module.exports = function (config) {
	config.set({
		browsers: ['Chrome', 'Firefox', 'IE'],
		frameworks: ['browserify', 'jasmine'],
		files: [
			// 'node_modules/@babel/polyfill/dist/polyfill.js',
			// 'test/unit/Utils.spec.js'
			'test/unit/**/*.js'
		],
		reporters: ['spec'],
		preprocessors: {
			'test/unit/**/*.js': ['browserify']
		},
		browserify: {
			debug: true,
			// needed to enable mocks
			plugin: [require('proxyquireify').plugin]
		},
		// if you want to continuously re-run tests on file-save,
		// replace the following line with `autoWatch: true`
		singleRun: false
	})
}