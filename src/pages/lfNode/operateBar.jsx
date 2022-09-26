/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-26 15:22:22
 *
 */

import {useState} from 'react';
import './lfNode.css';
import {Button, Checkbox} from 'antd';

const OperateBar = ({lf}) => {
    const [isEditable, setIsEditable] = useState(true);

    return (
        <div className="operateBar">
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    lf.updateEditConfig({
                        adjustEdge: !isEditable,
                        adjustNodePosition: !isEditable,
                        hideAnchors: !isEditable,
                    });
                    setIsEditable(!isEditable);
                }}>
                {isEditable ? '编辑中...' : '编辑'}
            </Button>
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    const data = lf.getGraphData();
                    console.log('data: ', data);
                }}>
                保存
            </Button>
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    lf.clearData();
                }}>
                清除
            </Button>
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    lf.undo();
                }}>
                上一步
            </Button>
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    lf.redo();
                }}>
                下一步
            </Button>
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    lf.extension.snapshot.getSnapshot();
                }}>
                下载
            </Button>
            <div style={{color: '#fff'}}>框选:</div>
            <Checkbox
                disabled={!lf}
                onChange={(e) => {
                    console.log(lf);
                    if (e.target.checked) {
                        lf.extension.selectionSelect.openSelectionSelect();
                    } else {
                        lf.extension.selectionSelect.closeSelectionSelect();
                    }
                }}
            />
        </div>
    );
};

export default OperateBar;
