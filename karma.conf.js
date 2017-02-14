// Karma configuration
// Generated on Wed Dec 23 2015 11:56:18 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //  '*/js/**/*.js',
      //  '*/test/**/*.js'      
        'add/js/**/*.js','multiply/js/**/*.js',
        'add/test/**/*.js','multiply/test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
       // '*/js/**/*.js': ['coverage']
    'add/js/**/*.js': ['coverage'],
		'multiply/js/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

    
   // coverageReporter: {

   //    type: 'lcov',
   //    dir: 'coverage'
   // },
    
      coverageReporter: {
      // specify a common output directory 
      dir: 'coverage',
      reporters: [
        // reporters not supporting the `file` property 
       { type: 'html', subdir: 'report-html' },
       { type: 'lcov', subdir: 'report-lcov' },
 //      { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
  //      { type: 'lcovonly', subdir: '.', file: 'report.lcov' },
       ]
     },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    captureTimeout: 60000, // it was already there
    browserDisconnectTimeout : 10000,
    browserDisconnectTolerance : 1,
    browserNoActivityTimeout : 60000,//by default 10000

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}


