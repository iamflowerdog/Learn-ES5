/**
 * Created by yang on 2017/10/8.
 *
 * 1. exports 规定模块对外暴露的接口，
 *
 */

/**
 * 1. 一个模块就是一个独立的文件，文件内部的所有变量，外部无法获取；
 * 2. ES6 模块化暴露的是变量，不是具体的某个值，比如num，string，object，类
 * 3. 需要注意的是export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
 *
 */

export let firstName = 'Yang';
export let lastName = 'YongHai';

// export 1; // 1 是一个值不是接口，错误

/*var m = 1;
export m; // 错误类型同上

// 正确写法1
export var m = 1;

// 写法2
var m = 1;
export {m};

// 写法3

var n = 3;
export {n as m};*/




