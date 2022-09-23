/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:44:12
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 14:57:19
 *
 */
import React, {useEffect, useMemo, useRef, useState} from 'react';
import LogicFlow from '@logicflow/core';
import SiderBar from './lfNode/siderBar';
import NodeInfo from './lfNode/nodeInfo';
import {registerNode} from './lfNode/units';
import {SelectionSelect, Menu} from '@logicflow/extension';
import '@logicflow/core/dist/style/index.css';
import '@logicflow/extension/lib/style/index.css';

const Fpp = () => {
    const refContainer = useRef();
    const lfRef = useRef();
    const [helpLfUpdate, setHelpLFUpdate] = useState(false);
    const [activeNode, setActiveNode] = useState({});
    useEffect(() => {
        lfRef.current = new LogicFlow({
            container: refContainer.current,
            height: 957,
            width: 1830,
            overlapMode: 1,
            autoWrap: true,
            metaKeyMultipleSelected: true,
            keyboard: {
                enabled: false,
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
        // 引入框选插件
        LogicFlow.use(SelectionSelect);
        LogicFlow.use(Menu);
        lfRef.current.render({
            nodes: [
                {
                    id: '1',
                    type: 'circle',
                    x: 100,
                    y: 100,
                    text: '节点1',
                },
                {
                    id: '2',
                    type: 'rect',
                    x: 300,
                    y: 100,
                    text: '节点2',
                },
                {
                    id: '3',
                    type: 'diamond',
                    x: 400,
                    y: 100,
                    text: '节点3',
                },
                {
                    id: '4',
                    type: 'polygon',
                    x: 500,
                    y: 100,
                    text: '节点4',
                },
            ],
            edges: [],
        });
        registerNode(lfRef.current);
    }, []);
    // 帮助lfRef更新,获取选中节点
    useEffect(() => {
        lfRef.current.on('selection:selected,node:click', ({data}) => {
            setHelpLFUpdate(!helpLfUpdate);
            if (data) {
                setActiveNode(data);
            }
        });
    }, []);

    // 移动节点
    const moveNode = (type, name) => {
        lfRef.current?.dnd.startDrag({type, text: name});
    };
    // 设置节点

    return (
        <div className="lfBox">
            <SiderBar moveNode={moveNode} />
            <div className="App" ref={refContainer}></div>
            <NodeInfo />
        </div>
    );
};

export default Fpp;
