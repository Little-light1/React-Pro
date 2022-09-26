/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:44:12
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-26 10:17:18
 *
 */
import React, {useEffect, useMemo, useRef, useState} from 'react';
import LogicFlow from '@logicflow/core';
import SiderBar from './lfNode/siderBar';
import NodeInfo from './lfNode/nodeInfo';
import OperateBar from './lfNode/operateBar';
import {registerNode} from './lfNode/units';
import {SelectionSelect, Menu, Snapshot} from '@logicflow/extension';
import '@logicflow/core/dist/style/index.css';
import '@logicflow/extension/lib/style/index.css';
import './lfNode/lfNode.css';

let lfRef;

const Fpp = () => {
    const refContainer = useRef();
    // const lfRef = useRef();
    const [helpLfUpdate, setHelpLFUpdate] = useState(false);
    const [activeNode, setActiveNode] = useState(null);

    useEffect(() => {
        lfRef = new LogicFlow({
            container: refContainer.current,
            stopScrollGraph: true, // 禁止鼠标滚动移动画布
            // stopMoveGraph: true,// 禁止移动画布
            plugins: [Menu, Snapshot, SelectionSelect],
            height: 957,
            width: 1830,
            overlapMode: 1,
            autoWrap: true,
            metaKeyMultipleSelected: true,
            keyboard: {
                enabled: true,
            },
            grid: {
                visible: false,
                size: 5,
            },
            background: {
                backgroundImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")',
                backgroundRepeat: 'repeat',
            },
        });

        lfRef.render({
            nodes: [],
            edges: [],
        });
        registerNode(lfRef);
        setHelpLFUpdate(!helpLfUpdate);
    }, []);
    // 帮助lfRef更新,获取选中节点
    useEffect(() => {
        lfRef.on('selection:selected,node:click,element:click,blank:click', (e) => {
            const {data} = e;
            setHelpLFUpdate(!helpLfUpdate);
            setActiveNode(data);
        });
    }, []);

    // 移动节点
    const moveNode = (type, name) => {
        lfRef?.dnd.startDrag({type, text: name});
    };

    return (
        <div className="lfBox">
            {lfRef && <OperateBar lf={lfRef} />}
            <SiderBar moveNode={moveNode} />
            <div className="App" ref={refContainer}></div>
            {activeNode && <NodeInfo activeNode={activeNode} />}
        </div>
    );
};

export default Fpp;
