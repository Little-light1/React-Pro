/*
 * @Author: zhangzhen
 * @Date: 2023-04-14 10:43:03
 * @LastEditors: zhangzhen
 * @LastEditTime: 2023-04-14 14:07:44
 *
 */
const {transformFileSync} = require('@babel/core');
const consolePlugin = require('./console_plugins');
const path = require('path');

const {code} = transformFileSync(path.join(__dirname,"./src/pages/app.jsx"), {
    plugins: [consolePlugin],
    parserOpts: {
        sourceType: 'unambiguous',
        plugins: ['jsx'],
    },
});
console.log('code: ', code);
