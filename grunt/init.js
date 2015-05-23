/* LOADING CONFIGURATIONS */
/* ---------------------- */
'@import config.js';

/* Initializing Configs */
grunt.initConfig(config);

/* REGISTERING TASKS */
/* ----------------- */
/* Registering Default Task */
grunt.registerTask('default', [ 'clean', 'exports', 'sass:devl', 'sync', 'watch' ]);

/* Registering Default Task */
grunt.registerTask('buildDevl', [ 'clean', 'exports', 'sass:devl', 'sync', 'watch' ]);

/* Registering Default Task */
grunt.registerTask('buildProd', [ 'clean', 'exports', 'sass:prod', 'sync' ]);

