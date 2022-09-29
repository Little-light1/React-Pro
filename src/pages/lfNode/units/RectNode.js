/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:17:18
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-27 16:59:45
 *
 */
import {RectResize} from '@logicflow/extension';
import {getShapeStyleFuction, getTextStyleFunction} from './getShapeStyleUtil';

// 矩形
class RectNewModel extends RectResize.model {
    setToBottom() {
        this.zIndex = 0;
    }

    getNodeStyle() {
        const style = super.getNodeStyle();
        const properties = this.getProperties();
        return getShapeStyleFuction(style, properties);
    }

    getTextStyle() {
        const style = super.getTextStyle();
        const properties = this.getProperties();
        return getTextStyleFunction(style, properties);
    }
}

export const RectNode = {
    type: 'startEvent',
    view: RectResize.view,
    model: RectNewModel,
};

// 带圆角的矩形
class RectRadiusModel extends RectNode.model {
    setAttributes() {
        super.setAttributes();
        this.radius = 20;
    }
}
export const RectRadius = {
    type: 'userTask',
    view: RectNode.view,
    model: RectRadiusModel,
};
