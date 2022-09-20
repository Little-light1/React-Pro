/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-20 13:05:44
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
