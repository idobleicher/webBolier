// Register babel to transpile before
require('babel-register')();

// Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function(){};