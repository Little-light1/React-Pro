/*
 * @Author: zhangzhen
 * @Date: 2023-04-14 10:43:28
 * @LastEditors: zhangzhen
 * @LastEditTime: 2023-04-14 13:05:25
 *
 */
// （因为 @babel/parser 等包都是通过 es module 导出的，所以通过 commonjs 的方式引入有的时候要取 default 属性。）
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;

/**
sourceType： 指定是否支持解析模块语法，有 module、script、unambiguous 3个取值：
module：解析 es module 语法
script：不解析 es module 语法
unambiguous：根据内容是否有 import 和 export 来自动设置 module 还是 script
一般我们会指定 sourceType 为 unambiguous。
 */

// 生成ast语法树   parser(解析)
const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
});

const logArr = ['log', 'error', 'debug', 'info'].map((item) => `console.${item}`);

/**
 * parse 出的 AST 由 @babel/traverse 来遍历和修改，babel traverse 包提供了 traverse 方法：
 */
// visitor函数 transform(转换)
traverse(ast, {
    CallExpression(path, state) {
        // const calleeName = generate(path.node.callee).code;
        const calleeName = path.get('callee').toString();
        console.log('calleeName: ', calleeName);
        if (logArr.includes(calleeName)) {
            const {line, column} = path.node.loc.start;
            // console.log('path.node.arguments: ', path.node.arguments);

            path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`));
        }
    },
});

/**
 * generate 阶段会把 AST 打印为目标代码字符串，同时生成 sourcemap
 */
// 生成  generate(生成)
const {code, map} = generate(ast);

console.log('code: ', code);
