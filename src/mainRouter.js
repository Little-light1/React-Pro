/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-15 10:45:14
 * @Description:
 *
 */
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import App from './app';
import Bpp from './bpp';
import Cpp from './cpp';
import Dpp from './dpp';
import Epp from './epp';

const routesProps = {data: '我是路由的参数'};

const BasicRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<App {...routesProps} />} />
                <Route path="/mainb" element={<Bpp />} />
                <Route path="/mainc" element={<Cpp />} />
                <Route path="/maind" element={<Dpp />} />
                <Route path="/maine" element={<Epp />} />
                <Route path="/" element={<Navigate to="/main" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default BasicRouter;
