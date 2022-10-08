/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:17:18
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-29 15:20:43
 *
 */
import {EndEventModel, EndEventView} from '@logicflow/extension';

//结束事件
class EndEventModelNew extends EndEventModel {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'red';
        return style;
    }

    initNodeData(data) {
        super.initNodeData(data);
        this.r = 30;
    }

    getConnectedSourceRules() {
        const rules = super.getConnectedSourceRules();
        const geteWayOnlyAsTarget = {
            message: '结束节点只能连入，不能连出！',
            validate: (source, target, sourceAnchor, targetAnchor) => {
                let isValid = true;
                if (source) {
                    isValid = false;
                }
                return isValid;
            },
        };
        rules.push(geteWayOnlyAsTarget);
        return rules;
    }
}

class EndEventViewNew extends EndEventView {}

export const endEvent = {
    type: 'endEvent',
    view: EndEventViewNew,
    model: EndEventModelNew,
};
