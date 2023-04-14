/*
 * @Author: zhangzhen
 * @Date: 2023-04-14 13:20:20
 * @LastEditors: zhangzhen
 * @LastEditTime: 2023-04-14 14:08:51
 *
 */

const console_plugin = ({types, template}) => {
    return {
        visitor: {
            CallExpression(path, state) {
                const logArr = ['log', 'error', 'debug', 'info'].map((item) => `console.${item}`);

                const calleeName = path.get('callee').toString();
                if (logArr.includes(calleeName)) {
                    const {line, column} = path.node.loc.start;
                    console.log('path.node.loc: ', path.node.loc);
                    path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`));
                }
            },
        },
    };
};

module.exports = console_plugin;
