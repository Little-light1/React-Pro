/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-10-08 13:33:55
 *
 */

import {useState} from 'react';
import './lfNode.css';
import {Button, Checkbox} from 'antd';

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

const OperateBar = ({lf}) => {
    const [isEditable, setIsEditable] = useState(true);

    const uploadXml = (ev) => {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target) {
                const xml = event.target.result;
                lf.render(xml);
            }
        };
        reader.readAsText(file); // you could also read images and other binaries
    };

    return (
        <div className="operateBar">
            <Button
                disabled={!lf}
                type="primary"
                onClick={() => {
                    lf.updateEditConfig({
                        adjustEdge: isEditable,
                        adjustNodePosition: isEditable,
                        hideAnchors: isEditable,
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
                    console.log(lf.getGraphRawData());
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
                    const data = lf.getGraphData();
                    download('logic-flow.xml', data);
                }}>
                下载xml
            </Button>

            <input type="file" className="upload" onChange={(ev) => uploadXml(ev)} />

            <div style={{color: '#fff'}}>框选:</div>
            <Checkbox
                disabled={!lf}
                onChange={(e) => {
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
