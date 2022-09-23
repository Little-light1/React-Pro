/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:19:56
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 13:44:45
 *
 */
import {RectNode, RectRadius} from './RectNode';
import {Triangle} from './TriangleNode';

export const registerNode = (lf) => {
    // 注册图形;
    lf.batchRegister([RectNode, RectRadius, Triangle]);
};
