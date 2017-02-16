module.exports = function(grunt) {

	//var plugins = ['karma-jasmine']
	//var browsers = []
        //plugins.push('karma-chrome-launcher')
       // browsers.push('Chrome')

   grunt.initConfig({
		   pkg: grunt.file.readJSON('package.json'),
     // build: {
	//expand: true,
	//src: ['add/**/*.js','multiply/**/*.js'],
	//dest: 'web/'
	//},
      
      

	karma: {
		unit: {
			//options: {
				configFile: 'karma.conf.js'
				//frameworks: ['jasmine'],
				//singleRun: true,
				//browsers: ['Chrome']
			//},
			},
			
    },
	   jshint: {
         // define the files to lint
	
         all: ['add/**/*.js','multiply/**/*.js'],
		   
	options: {
		reporter: require ('jshint-html-reporter'), 
	 	reporteroutput: 'coverage/jshint-report.html'
		},
		  
         // configure JSHint
         //options: { jshintrc: true
            // more options here if you want to override JSHint defaults
            //globals: {
               //jQuery: true,
            }
	
         
  });
   

        //browsers: ['PhantomJS'],
        //plugins: plugins    
	//},
       // files: [
          //'jaskar2/**/*.js'
       // ]
	//	    }
	//	    }
      //},

      //config: {
        //configFile: 'karma.conf.js',
       // singleRun: true
     // },

       // ]
     // },
      //dev: {
      //  reporters: 'dots',
       // background: true
     // },
     // auto: {
      //  autoWatch: true
     // }
   // },
     // watch: {
        // files: ['js/*.js'],
        // tasks: ['jshint']
//tests: {
       // files: 'test/**/*.js',
       // tasks: ['karma:dev:run']
     // },
//bgtest: {
        // This is just to stop node exiting
       // files: 'test/**/*.js',
       // tasks: []
     // }
    //  }
  // });
		
  
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('jshint-html-reporter');
   grunt.loadNpmTasks('grunt-karma');
   grunt.registerTask('default', ['karma','jshint']);

  // grunt.registerTask('default', ['jshint','build']);
   //grunt.registerTask('test', ['karma:single', 'karma:config'])
  // grunt.registerTask('bgtest', ['karma:background', 'watch:bgtest'])

};
