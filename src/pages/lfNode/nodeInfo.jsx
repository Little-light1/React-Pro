/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 15:32:43
 *
 */
import './lfNode.css';

const NodeInfo = ({activeNode}) => {
    return (
        <div className="nodeInfo">
            <div>ID:{activeNode?.id}</div>
            <div>名称:{activeNode?.text?.value}</div>
            <div>类型:{activeNode?.type}</div>
            <div>名称:{activeNode?.text?.value}</div>
        </div>
    );
};

export default NodeInfo;
