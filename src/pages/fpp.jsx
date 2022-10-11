/*
 * @Author: zhangzhen
 * @Date: 2022-09-15 10:44:12
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-10-11 14:51:40
 *
 */
import React, {useEffect, useMemo, useRef, useState} from 'react';
import LogicFlow from '@logicflow/core';
// import SiderBar from './lfNode/siderBar';
import NodeInfo from './lfNode/nodeInfo';
import OperateBar from './lfNode/operateBar';
import {registerNode} from './lfNode/units';
import {SelectionSelect, Menu, DndPanel, Snapshot, BpmnElement} from '@logicflow/extension';
import '@logicflow/core/dist/style/index.css';
import '@logicflow/extension/lib/style/index.css';
import './lfNode/lfNode.css';
import {BpmnXmlAdapter} from './lfNode/plugins/index';
import {iconUrl} from './lfNode/content';

let lfRef;

const Fpp = () => {
    const refContainer = useRef();
    // const lfRef = useRef();
    const [helpLfUpdate, setHelpLFUpdate] = useState(false);
    const [activeNode, setActiveNode] = useState(null);

    useEffect(() => {
        lfRef = new LogicFlow({
            // 容器
            container: refContainer.current,
            // 禁止鼠标滚动移动画布
            stopScrollGraph: true,
            // 禁止移动画布
            // stopMoveGraph: true,
            // 插件
            plugins: [Menu, DndPanel, Snapshot, SelectionSelect, BpmnElement, BpmnXmlAdapter],
            // 元素重合的堆叠模式，默认为连线在下、节点在上，选中元素在最上面。可以设置为1，表示自增模式（作图工具场景常用）。
            overlapMode: 1,
            // 自定义键盘相关配置
            keyboard: {
                enabled: true,
            },
            // 网格，若设为false不开启网格，则为 1px 移动单位，不绘制网格背景，若设置为true开启则默认为 20px 点状网格
            grid: {
                visible: false,
                size: 5,
            },
            // 背景，默认无背景
            background: {
                backgroundImage: iconUrl.background,
                backgroundRepeat: 'repeat',
            },
        });

        lfRef.extension.dndPanel.setPatternItems([
            {
                label: '选区',
                className: 'custom-selection',
                icon: iconUrl.choose,
                callback: () => {
                    lfRef.openSelectionSelect();
                    lfRef.once('selection:selected', () => {
                        lfRef.closeSelectionSelect();
                    });
                },
            },
            {
                type: 'startEvent',
                text: '开始',
                label: '开始节点',
                icon: iconUrl.startEvent,
            },
            {
                type: 'userTask',
                label: '用户任务',
                icon: iconUrl.userTask,
                className: 'important-node',
                properties: {
                    disabled: true,
                },
            },

            {
                type: 'exclusiveGateway',
                label: '条件判断',
                icon: iconUrl.judge,
            },
            {
                type: 'endEvent',
                text: '结束',
                label: '结束节点',
                icon: iconUrl.endEvent,
            },
        ]);

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
    // const moveNode = (type, name) => {
    //     lfRef?.dnd.startDrag({type, text: name});
    // };

    return (
        <div className="lfBox">
            {lfRef && <OperateBar lf={lfRef} />}
            {/* <SiderBar moveNode={moveNode} /> */}
            <div className="App" ref={refContainer}></div>
            {activeNode && <NodeInfo activeNode={activeNode} />}
        </div>
    );
};

export default Fpp;
