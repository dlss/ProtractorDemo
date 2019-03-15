(function () {
    'use strict';
    /**************** UI ***************************/
    exports.demo = {
        logFolder: "",
        logFileName: "",
        test1: {
            url: "http://www.baidu.com",
            keyTextXpath: "//input[@id='kw']",
            searchButtonXpath: "//input[@id='su']",
            firstSearchResultLinkXpath: "//*[@id='1']/h3/a",
            "searchKey": "123"
        }
    };

    /**************** API ***************************/
    exports.crawler = {
        test: {
            mailUrl: 'http://www.haha.mx/topic/1/new/',
            encoding1: "utf8",
            encoding2: "binary",
            filterXpath: ".joke-list-item .joke-main-content a img",
            outForder: "result/output/img/"
        }
    };

    exports.common = {
    };
})();