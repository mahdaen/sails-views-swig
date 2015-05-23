/* Configuring Watcher */
config.watch = {
    /* Grunt Watch Options */
    options      : {
        livereload : 2838
    },

    /* Watch Javascript Libraries */
    jslibs       : {
        files : [ 'library/**/*.js' ],
        tasks : [ 'exports:libs' ]
    },

    /* Watch App Scripts */
    applibs      : {
        files : [ 'public/scripts/**/*.js' ],
        tasks : [ 'exports:apps' ]
    },

    /* Watch SASS Libraries */
    sassDevLibs  : {
        files : [ 'library/**/*.scss' ],
        tasks : [ 'sass:devl' ]
    },
    sassProdLibs : {
        files : [ 'library/**/*.scss' ],
        tasks : [ 'sass:prod' ]
    },

    /* Watch Application Styles */
    sassDevApps  : {
        files : [ 'public/styles/**/*.scss' ],
        tasks : [ 'sass:devl' ]
    },
    sassProdApps : {
        files : [ 'public/styles/**/*.scss' ],
        tasks : [ 'sass:prod' ]
    },

    /* Watch Fonts */
    fonts        : {
        files : [ 'sources/assets/fonts/**' ],
        tasks : [ 'sync:fonts' ]
    },

    /* Watch Icons */
    icons        : {
        files : [ 'sources/assets/icons/**' ],
        tasks : [ 'sync:icons' ]
    },

    /* Watch Images */
    images       : {
        files : [ 'sources/assets/images/**' ],
        tasks : [ 'sync:images' ]
    },

}

/* Loading Task */
grunt.loadNpmTasks('grunt-contrib-watch');