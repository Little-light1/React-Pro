/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 16:46:57
 *
 */
import './lfNode.css';
import {Button} from 'antd';

const OperateBar = ({lf}) => {
    return (
        <div className="operateBar">
            <Button
                type="primary"
                onClick={() => {
                    const data = lf.getGraphData();
                    console.log('data: ', data);
                }}>
                保存
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    lf.clearData();
                }}>
                清除
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    lf.undo();
                }}>
                上一步
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    lf.redo();
                }}>
                下一步
            </Button>
        </div>
    );
};

export default OperateBar;
