/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 09:15:35
 * @Description:
 *
 */
import React from 'react';
import {Route, Routes, Navigate, HashRouter} from 'react-router-dom';
import App from './pages/app';
import Bpp from './pages/bpp';
import Cpp from './pages/cpp';
import Dpp from './pages/dpp';
import Epp from './pages/epp';
import Fpp from './pages/fpp';

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
                <button
                    onClick={() => {
                        window.location.href = '#/mainf';
                    }}>
                    Fpp
                </button>
            </div>

            <Routes>
                <Route path="/main" element={<App {...routesProps} />} />
                <Route path="/mainb" element={<Bpp />} />
                <Route path="/mainc" element={<Cpp />} />
                <Route path="/maind" element={<Dpp />} />
                <Route path="/maine" element={<Epp />} />
                <Route path="/mainf" element={<Fpp />} />
                <Route path="/" element={<Navigate to="/main" />} />
            </Routes>
        </HashRouter>
    );
};

export default BasicRouter;
