/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: zhangzhen
 * @LastEditTime: 2023-04-04 19:31:50
 * @Description:
 *
 */
import React, {useEffect, useState} from 'react';
import {myContext} from '../context/contextStore';
import {HOC} from '../Hoc/Hoc';
import {HocFun} from '../Hoc/HocFun';
import FormPage from './FormPage';
import ContextPage from './ContextPage';
import HOCPage from './HOCPage';
import HooksPage from './HooksPage';
import MemoPage from './MemoPage';
import {useNavigate} from 'react-router-dom';
import Modal from '../Modal/modal';
import {useDebounce} from '../hooks/useDebounce';
import Epp from './epp';
import axios from 'axios';

const ContextPageFake = HocFun(ContextPage);
const HOCPageFake = HOC(HOCPage);

const propsChange = (pre, next) => {
    console.log('memo');
    //上一个props和下一个props
    if (pre.number !== next.number && next.number < 5) {
        return false; //渲染
    } else {
        return true; //不渲染
    }
};
const MemoPageFake = React.memo(MemoPage, propsChange);

const App = (props) => {
    const [contextValue, setContextValue] = useState({theme: 'blue'});
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const debounceFun = () => {
        console.log('1111');
    };

    return (
        <React.Fragment>
            <div style={{border: `2px solid ${contextValue.theme}`, color: contextValue.theme, padding: '10px'}}>
                <myContext.Provider value={{contextValue, setContextValue}}>
                    <FormPage fun={debounceFun} />
                    <hr style={{borderColor: contextValue.theme}} />
                    <ContextPageFake />
                    <hr style={{borderColor: contextValue.theme}} />
                    <HOCPageFake age={18} />
                    <hr style={{borderColor: contextValue.theme}} />
                    <HooksPage
                        changeState={() => {
                            console.log('number: ', number); //一直是0
                            setNumber(number + 1); //一直是1
                            // 可以改写成  setNumber(prev=>prev+1)
                        }}
                    />
                    <hr style={{borderColor: contextValue.theme}} />
                    <h2>{number}</h2>
                    <button
                        onClick={() => {
                            setNumber(number + 1);
                        }}>
                        改变number
                    </button>
                    <MemoPageFake number={number} />
                    <hr style={{borderColor: contextValue.theme}} />
                    <button
                        onClick={() => {
                            axios.post('http://localhos:3331', {
                                reg: /^abc$/,
                            });

                            setVisible(true);
                        }}>
                        打开modal
                    </button>
                    <button
                        onClick={() => {
                            setVisible(false);
                        }}>
                        关闭modal
                    </button>
                    <hr style={{borderColor: contextValue.theme}} />
                </myContext.Provider>
            </div>

            <Modal
                visible={visible}
                title={'弹窗'}
                width={500}
                height={880}
                footer={null}
                onCancel={() => {
                    setVisible(false);
                }}
                onOk={() => {
                    setVisible(true);
                }}>
                <Epp />
            </Modal>
        </React.Fragment>
    );
};

export default App;
