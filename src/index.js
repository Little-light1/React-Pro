/*
 * @Author: zhangzhen
 * @Date: 2022-06-14 15:53:38
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-26 10:33:21
 * @Description:
 *
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BasicRouter from './mainRouter';
import {Provider} from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BasicRouter></BasicRouter>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
