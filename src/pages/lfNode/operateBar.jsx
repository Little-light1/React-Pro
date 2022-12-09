/*
 * @Author: zhangzhen
 * @Date: 2022-09-23 10:59:33
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-11-14 17:50:10
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
                console.log('xml: ', xml);
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
                    const {editConfigModel} = lf.graphModel;
                    setIsEditable((prev) => {
                        console.log('prev: ', prev);
                        editConfigModel.updateEditConfig({
                            // 允许调整边
                            adjustEdge: !prev,
                            // 允许调整节点
                            adjustNodePosition: !prev,
                            // 隐藏节点所有锚点
                            hideAnchors: prev,
                            // 是否为静默模式
                            isSilentMode: prev,
                            // 允许节点文本可以编辑
                            nodeTextEdit: !prev,
                            // 允许边文本可以编辑
                            edgeTextEdit: !prev,
                        });
                        return !prev;
                    });

                    console.log('lf', lf);
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
                    console.log('data: ', data);
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
