/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:19:56
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-29 14:30:06
 *
 */
import {userTask} from './userTask';
import {startEvent} from './startEvent';
import {endEvent} from './endEvent';
import {exclusiveGateway} from './exclusiveGateway';
import {sequenceFlow} from './sequenceFlow';

export const registerNode = (lf) => {
    // 注册图形;
    lf.batchRegister([userTask, startEvent, endEvent, exclusiveGateway, sequenceFlow]);
};
