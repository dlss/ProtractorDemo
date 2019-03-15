(function () {
    'use strict';

    var util = require('util');
    var requires = require('./../../requireModule');
    var nodelib = requires.nodelib;
    var testData = requires.testData.demo;

    describe('Demo', function () {
        afterAll(function (done) {
            process.nextTick(done);
        });

        afterEach(function () {
            requires.domHelper.checkBrowserErrorLog();
        });

        beforeEach(function () {
            //requires.domHelper.closeAlert();
        });


        it('Demo - Search question in baidu', function () {

            nodelib.logger.logC(util.format("#1. Open '%s'", testData.test1.url));
            browser.get(testData.test1.url);

            nodelib.logger.logC(util.format("#2. Input '%s'", testData.searchKey));
            var keyTextEle = element(by.xpath(testData.test1.keyTextXpath));
            requires.domHelper.safeInputWithNoAngular(keyTextEle, testData.test1.searchKey);

            nodelib.logger.logC("#3. Click search button");
            var searchButtonEle = element(by.xpath(testData.test1.searchButtonXpath));
            requires.domHelper.safeClick(searchButtonEle);

            nodelib.logger.logC("#3. Click the first row");
            var firstSearchResultLinkEle = element(by.xpath(testData.test1.firstSearchResultLinkXpath));
            requires.domHelper.safeClick(firstSearchResultLinkEle);

            browser.sleep(1000 * 5);
        });

    });//describe end
})();//totally end