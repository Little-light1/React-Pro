/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:19:56
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-10-08 10:03:29
 *
 */
import {userTask} from './bpmnElement/userTask';
import {startEvent} from './bpmnElement/startEvent';
import {endEvent} from './bpmnElement/endEvent';
import {exclusiveGateway} from './bpmnElement/exclusiveGateway';
import {sequenceFlow} from './bpmnElement/sequenceFlow';

export const registerNode = (lf) => {
    // 注册图形;
    lf.batchRegister([userTask, startEvent, endEvent, exclusiveGateway, sequenceFlow]);
};
