import requireDir from 'require-dir';

requireDir('./tasks/lib');

require('./tasks/chromereload');
require('./tasks/clean');
require('./tasks/fonts');
require('./tasks/images');
require('./tasks/locales');
require('./tasks/manifest');
require('./tasks/pages');
require('./tasks/scripts');
require('./tasks/styles');
require('./tasks/vendor');
require('./tasks/version');

require('./tasks/build');

require('./tasks/pack');
require('./tasks/default');
