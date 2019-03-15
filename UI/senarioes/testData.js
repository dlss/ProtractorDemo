(function () {
    'use strict';

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

    exports.common = {
    };
})();