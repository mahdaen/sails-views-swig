/**
 * Swig Template Rendering Engine.
 */

module.exports = {
    /* Template File Extension */
    ext : 'swig',

    /* Function to handle render request */
    fn  : function (path, data, cb) {
        /* Swig Renderer */
        var swig = require('swig'), min = '.min';

        if (data.settings.env === 'development') {
            min = '';
        }

        /* Bind extra datas */
        data.script = [ 'scripts/com.libs' + min + '.js', 'scripts/com.apps' + min + '.js' ];
        data.styles = [ 'styles/main.css' ];

        /* Render Templates */
        return swig.renderFile(path, data, cb);
    }
}