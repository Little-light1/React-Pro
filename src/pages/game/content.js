/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:46:02
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-15 17:08:26
 *
 */
const arr = [
    {name: '马', color: '#5470c6'},
    {name: '驰', color: '#fac858'},
    {name: '朱', color: '#ee6666'},
    {name: '振', color: '#73c0de'},
    {name: '骚', color: '#3bd272'},
    {name: '刘', color: '#9a60b4'},
    {name: '胖', color: '#ea7ccc'},
    {name: '邢', color: '#c14cac'},
    {name: '吊', color: '#f08300'},
    {name: '龙', color: '#004eff'},
    {name: '楞', color: '#00e4ff'},
    {name: '张', color: '#c0e8ff'},
];
// 第一层
export const itemTextArr = arr.concat(arr, arr, arr, arr, arr).sort(() => Math.random() - 0.5);

// 第二层
arr.splice(parseInt(arr.length * Math.random()), 2);
export const itemTextArrTwo = arr.concat(arr, arr, arr, arr, arr).sort(() => Math.random() - 0.5);

// 第三层
arr.splice(parseInt(arr.length * Math.random()), 2);
export const itemTextArrThree = arr.concat(arr, arr, arr, arr, arr).sort(() => Math.random() - 0.5);
