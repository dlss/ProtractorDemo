(function () {
    'use strict';
    require('shelljs/global');

    var util = require('util');
    var requires = require('./../../../requireModule');
    var nodelib = requires.nodelib;
    var moduleName = "demo";

    describe('Demo', function () {

        it('Demo - crawler pic', function () {
            var files = nodelib.fileHelper.getAllFiles(process.cwd(), function (file) {
                nodelib.logger.log(file, 1, moduleName);
            });
        });
    });//describe end
})();