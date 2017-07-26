/**
 * 自定义js模块
 */

function myModule(){
    //数据变量
    var data = "Hello World";

    //操作数据的函数
    function toUpperCase() {
        console.log("toUpperCase", data.toUpperCase());
        test();
    }
    function toLowerCase() {
        console.log("toLowerCase", data.toLowerCase());
    }
    
    //完全私有函数
    function test() {
        console.log("inner test()");
    }

    return {
        toUpperCase: toUpperCase,
        toLowerCase: toLowerCase
    }
}