/**
 * 利用闭包封装的js模块
 */

(function () {
    var data = "你好，defence of the ancient";
    function toReverse() {
        console.log("toReverse()", data.split("").reverse().join(""));
    }

    function toUpper() {
        console.log("toUpper", data.toUpperCase());
        testClosure();
    }

    function testClosure() {
        console.log("内部函数test执行了")
    }

    window.closure = {
        toReverse,
        toUpper
    }
})();