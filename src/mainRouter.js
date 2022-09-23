/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 16:49:37
 * @Description:
 *
 */
import React, {useState} from 'react';
import {Route, Routes, Navigate, HashRouter} from 'react-router-dom';
import App from './pages/app';
import Bpp from './pages/bpp';
import Cpp from './pages/cpp';
import Dpp from './pages/dpp';
import Epp from './pages/epp';
import Fpp from './pages/fpp';
import {Button} from 'antd';

const routesProps = {data: '我是路由的参数'};

const BasicRouter = () => {
    const [currentPage, setCurrentPage] = useState(window.location.hash);
    return (
        <HashRouter>
            <div
                style={{
                    zIndex: 3,
                    width: '360px',
                    position: 'absolute',
                    padding: 5,
                    top: 20,
                    right: 20,
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: 'rgba(0,0,0,0.7)',
                }}>
                <Button
                    type={currentPage === '#/main' && 'primary'}
                    onClick={() => {
                        setCurrentPage('#/main');
                        window.location.href = '#/main';
                    }}>
                    App
                </Button>
                <Button
                    type={currentPage === '#/mainb' && 'primary'}
                    onClick={() => {
                        setCurrentPage('#/mainb');
                        window.location.href = '#/mainb';
                    }}>
                    Bpp
                </Button>
                <Button
                    type={currentPage === '#/mainc' && 'primary'}
                    onClick={() => {
                        setCurrentPage('#/mainc');
                        window.location.href = '#/mainc';
                    }}>
                    Cpp
                </Button>
                <Button
                    type={currentPage === '#/maind' && 'primary'}
                    onClick={() => {
                        setCurrentPage('#/maind');
                        window.location.href = '#/maind';
                    }}>
                    Dpp
                </Button>
                <Button
                    type={currentPage === '#/maine' && 'primary'}
                    onClick={() => {
                        setCurrentPage('#/maine');
                        window.location.href = '#/maine';
                    }}>
                    Epp
                </Button>
                <Button
                    type={currentPage === '#/mainf' && 'primary'}
                    onClick={() => {
                        setCurrentPage('#/mainf');
                        window.location.href = '#/mainf';
                    }}>
                    Fpp
                </Button>
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
