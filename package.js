Package.describe({
    name: 'smaltcreation:imagesloaded',
    version: '4.1.0',
    summary: 'imagesloaded 4.1.0',
    git: 'https://github.com/smaltcreation/meteor-imagesloaded',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    Npm.depends({
        'imagesloaded': '4.1.0'
    });

    api.use([
        'cosmos:browserify'
    ], 'client');

    // Lib files
    api.addFiles([
        'lib/codes.browserify.js'
    ],  'client');

    // Exports
    api.export([
        'ImagesLoaded'
    ],  'client');
});
