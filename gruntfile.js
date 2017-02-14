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
      //jshint: {
         // define the files to lint
         //all: ['Gruntfile.js', 'add/**/*.js','multiply/**/*.js'],
         // configure JSHint
         //options: { jshintrc: true
            // more options here if you want to override JSHint defaults
            //globals: {
               //jQuery: true,
          //  }
         
      

	karma: {
		unit: {
			//options: {
				configFile: 'karma.conf.js',
				frameworks: ['jasmine'],
				singleRun: true,
				browsers: ['Chrome']
			//},
			},
			
    }
  });
   
   
   
   
//karma: {  
//  unit: {
//    options: {
 //     frameworks: ['jasmine'],
   //   singleRun: true,
     // browsers: ['Chrome'],
	 // configFile: 'karma.conf.js's
      //]
   // }
  //}
	//  }});
   
   
   
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
		
  
   //grunt.loadNpmTasks('grunt-contrib-jshint');
   //grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-karma');
   grunt.registerTask('default', ['karma']);

  // grunt.registerTask('default', ['jshint','build']);
   //grunt.registerTask('test', ['karma:single', 'karma:config'])
  // grunt.registerTask('bgtest', ['karma:background', 'watch:bgtest'])

};
