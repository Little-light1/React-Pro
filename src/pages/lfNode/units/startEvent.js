/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:17:18
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-29 15:22:58
 *
 */
import {StartEventModel, StartEventView} from '@logicflow/extension';

//开始事件
class StartEventModelNew extends StartEventModel {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'green';
        style.r = 40;
        return style;
    }
    initNodeData(data) {
        super.initNodeData(data);
        this.r = 30;
    }

    getConnectedTargetRules() {
        const rules = super.getConnectedTargetRules();
        const notAsTarget = {
            message: '起始节点不能作为边的终点',
            validate: () => false,
        };
        rules.push(notAsTarget);
        return rules;
    }
}

class StartEventViewNew extends StartEventView {}

export const startEvent = {
    type: 'startEvent',
    view: StartEventViewNew,
    model: StartEventModelNew,
};
