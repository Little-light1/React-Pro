/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:41:23
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-09-23 09:09:42
 * @Description:
 *
 */
import React, {useEffect, useState} from 'react';
// import APage from "./pages/reduxPage/APage";
// import BPage from "./pages/reduxPage/BPage";
// import CPage from "./pages/reduxPage/CPage";
import {useNavigate} from 'react-router-dom';

const APage = React.lazy(() => import('./pages/reduxPage/APage'));
const BPage = React.lazy(() => import('./pages/reduxPage/BPage'));
const CPage = React.lazy(() => import('./pages/reduxPage/CPage'));

const Cpp = (props) => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>Loading...</div>}>
                <APage />
            </React.Suspense>
            <hr />
            <React.Suspense fallback={<div>Loading...</div>}>
                <BPage />
            </React.Suspense>
            <hr />
            <React.Suspense fallback={<div>Loading...</div>}>
                <CPage />
            </React.Suspense>
            <hr />
        </React.Fragment>
    );
};

export default Cpp;
