/**
 * Created by yang on 2017/10/8.
 *
 * 1. 历史上JS一直没有自己的模块（Module）体系，无法将一个大程序拆分成相互依赖的小文件，再用简单的方法拼接起来
 * 2. 再ES6之前，社区制定了一些模块加载方案，CommonJS 和 AMD 两种，前者主要用服务器，后者主要用于浏览器
 * 3. ES6 语言标准层面上，实现了模块化，并且功能很简单可以取代前两者。
 * 4. ES6 模块化的思想是尽量静态化，在编译的时候就能确定模块的依赖关系，以及输入和输出的变量
 * 5. CommonJS 和 AMD 是运行时才能确定这些东西，如 CommonJS 模块就是对象，输入时必须查找对象属性
 */


// CommonJS 模块
// let {stat, readFile, exists} = require('fs');

// 等同于

let _fs = require('fs');

let stat = _fs.stat;
let readFile = _fs.readFile;
let exists = _fs.exists;

console.log(stat,readFile,exists);

/*
    1. 上述代码是先加载node的fs模块(即加载fs的所有方法)生成一个_fs对象，然后再从这个对象读取三个方法
    2. 这种加载成为 '运行时加载'， 因为只有运行时才能得到_fs对象，导致没法再编译时做静态优化
    3. ES6 模块不是对象，而是通过 export 命令显示制定输出的代码，再通过 import 命令输入
 */

