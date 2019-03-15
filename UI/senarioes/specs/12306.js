(function () {
    'use strict'

    var util = require('util');
    var requires = require('./../../requireModule');
    var testData = requires.testData.data12306;

    describe('12306', function () {
        afterAll(function (done) {
            process.nextTick(done);
        });

        afterEach(function () {
            requires.domHelper.checkBrowserErrorLog();
        });

        beforeEach(function () {
            //requires.domHelper.closeAlert();
        });


        it('12306 - Query', function () {
        });
    });
})();