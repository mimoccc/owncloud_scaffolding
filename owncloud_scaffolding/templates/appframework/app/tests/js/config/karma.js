{% include 'licenses/licenses.php' %}

// base path, that will be used to resolve files and exclude
module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
		basePath: '../../../',
		// list of files / patterns to load in the browser
		files: [
			'js/vendor/jquery/jquery.js',
			'js/vendor/angular/angular.js',
			'js/vendor/underscore/underscore.js',
			'js/vendor/restangular/dist/restangular.js',
			'js/vendor/angular-mocks/angular-mocks.js',
			'tests/js/stubs/**/*.js',
			'js/app/**/*.js',
			'tests/js/unit/**/*.js'
		],

		// list of files to exclude
		exclude: [],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit'
		reporters: ['progress'],

		// web server port
		port: 8080,

		// cli runner port
		runnerPort: 9100,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 5000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};