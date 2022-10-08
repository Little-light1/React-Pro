/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:17:18
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-29 15:21:31
 *
 */
import {ExclusiveGatewayModel, ExclusiveGatewayView} from '@logicflow/extension';

//分支
class ExclusiveGatewayModelNew extends ExclusiveGatewayModel {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'orange';
        return style;
    }

    initNodeData(data) {
        super.initNodeData(data);
        this.rx = 30;
        this.ry = 30;
    }
}

class ExclusiveGatewayViewNew extends ExclusiveGatewayView {}

export const exclusiveGateway = {
    type: 'exclusiveGateway',
    view: ExclusiveGatewayViewNew,
    model: ExclusiveGatewayModelNew,
};
