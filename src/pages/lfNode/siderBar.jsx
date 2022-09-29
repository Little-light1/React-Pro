/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-29 10:55:57
 *
 */
import './lfNode.css';

const SiderBar = ({moveNode}) => {
    return (
        <div className="siderBar">
            <div
                className="node"
                onMouseDown={() => {
                    moveNode('startEvent', '开始');
                }}>
                开始
            </div>

            <div
                className="node"
                onMouseDown={() => {
                    moveNode('endEvent', '结束');
                }}>
                结束
            </div>
            <div
                className="node"
                onMouseDown={() => {
                    moveNode('userTask', '用户任务');
                }}>
                用户
            </div>
            <div
                className="node"
                onMouseDown={() => {
                    moveNode('exclusiveGateway', '分支');
                }}>
                分支
            </div>
        </div>
    );
};

export default SiderBar;
