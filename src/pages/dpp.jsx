/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:41:23
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 11:04:58
 * @Description:
 *
 */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import BpmnViewer from 'bpmn-js/lib/Viewer';
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import {xmlStr} from '../xml';
import './page.css';

const Dpp = (props) => {
    const navigate = useNavigate();
    const bpmnModeler = useRef(null);
    const canvasRef = useRef(null);
    const [count, setCount] = useState('false');

    useEffect(() => {
        if (canvasRef.current && count === 'false') {
            bpmnModeler.current = new BpmnModeler({
                container: canvasRef.current,
                propertiesPanel: {
                    parent: '#js-properties-panel',
                },
                additionalModules: [
                    // 右边的属性栏
                    propertiesProviderModule,
                    propertiesPanelModule,
                ],
                moddleExtensions: {
                    camunda: camundaModdleDescriptor,
                },
            });
            bpmnModeler.current.importXML(xmlStr, (err) => {
                if (err) {
                    // console.error(err)
                } else {
                    addEventBusListener();
                }
            });
            setCount('true');
        }
    }, [count]);

    const addEventBusListener = () => {
        // 监听 element
        const eventBus = bpmnModeler.get('eventBus');
        const eventTypes = ['element.click', 'element.changed', 'element.updateLabel'];
        eventTypes.forEach(function (eventType) {
            eventBus.on(eventType, function (e) {
                console.log(eventType);
                if (!e || e.element.type == 'bpmn:Process') return;
                if (eventType === 'element.changed') {
                    // that.elementChanged(e)
                } else if (eventType === 'element.click') {
                    console.log('点击了element', e);
                    // if (e.element.type === 'bpmn:Task') {
                    // }
                } else if (eventType === 'element.updateLabel') {
                    console.log('element.updateLabel', e.element);
                }
            });
        });
    };

    return (
        <React.Fragment>
            <div className="containers" style={{width: '100%', height: '98%'}}>
                <div className="canvas" ref={canvasRef} style={{width: '100%', height: '98%'}}></div>
                <div id="js-properties-panel" style={{position: 'absolute', right: 0, top: 0, width: '300px', height: '500px'}}></div>
            </div>
        </React.Fragment>
    );
};

export default Dpp;
