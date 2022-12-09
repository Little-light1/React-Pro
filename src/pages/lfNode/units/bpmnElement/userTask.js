/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 11:17:18
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-10-27 09:57:46
 *
 */
import {UserTaskModel, UserTaskView} from '@logicflow/extension';

//用户任务
class UserTaskModelNew extends UserTaskModel {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'blue';
        style.strokeDasharray = '3 3';
        return style;
    }

    initNodeData(data) {
        super.initNodeData(data);
        this.width = 100;
        this.height = 80;
    }
}

export const userTask = {
    type: 'userTask',
    view: UserTaskView,
    model: UserTaskModelNew,
};
