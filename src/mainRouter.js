/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 09:09:08
 * @Description:
 *
 */
import React from 'react';
import {Route, Routes, Navigate, HashRouter} from 'react-router-dom';
import App from './app';
import Bpp from './bpp';
import Cpp from './cpp';
import Dpp from './dpp';
import Epp from './epp';

const routesProps = {data: '我是路由的参数'};

const BasicRouter = () => {
    return (
        <HashRouter>
            <div style={{zIndex: 3, position: 'absolute', top: 20, right: 20}}>
                <button
                    onClick={() => {
                        window.location.href = '#/main';
                    }}>
                    App
                </button>
                <button
                    onClick={() => {
                        window.location.href = '#/mainb';
                    }}>
                    Bpp
                </button>
                <button
                    onClick={() => {
                        window.location.href = '#/mainc';
                    }}>
                    Cpp
                </button>
                <button
                    onClick={() => {
                        window.location.href = '#/maind';
                    }}>
                    Dpp
                </button>
                <button
                    onClick={() => {
                        window.location.href = '#/maine';
                    }}>
                    Epp
                </button>
            </div>

            <Routes>
                <Route path="/main" element={<App {...routesProps} />} />
                <Route path="/mainb" element={<Bpp />} />
                <Route path="/mainc" element={<Cpp />} />
                <Route path="/maind" element={<Dpp />} />
                <Route path="/maine" element={<Epp />} />
                <Route path="/" element={<Navigate to="/main" />} />
            </Routes>
        </HashRouter>
    );
};

export default BasicRouter;
