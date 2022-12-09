/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:41:23
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-11-30 10:42:12
 * @Description:
 *
 */
import React, {useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';
import './page.css';

import {Table} from 'antd';

const APage = React.lazy(() => import('./reduxPage/APage'));
const BPage = React.lazy(() => import('./reduxPage/BPage'));
const CPage = React.lazy(() => import('./reduxPage/CPage'));

const Cpp = (props) => {
    const navigate = useNavigate();
    const datasource = [
        // {
        //     deviceId: '111111',
        //     deviceName: 'deviceName',
        // },
    ];
    const columns = [
        {
            dataIndex: 'deviceId',
            title: '设备ID',
            name: '设备ID',
            align: 'center',
            width: 550,
        },
        {
            dataIndex: 'deviceName',
            title: '设备名称',
            name: '设备名称',
            align: 'center',
            width: 450,
        },
        {
            dataIndex: 'deviceModel',
            title: '型号',
            name: '型号',
            align: 'center',
            width: 550,
            sorter: true,
        },
        {
            dataIndex: 'farmName',
            title: '电场名称',
            name: '电场名称',
            align: 'center',
            width: 550,
        },
        {
            dataIndex: 'farmName1',
            title: '电场名称1',
            name: '电场名称1',
            align: 'center',
            width: 550,
        },

        {
            dataIndex: 'x',
            title: 'hhhh名称',
            name: 'hhhh名称',
            align: 'center',
            width: 550,
        },
        {
            dataIndex: 'checked',
            width: 550,
            title: '选择',
            name: '选择',
            align: 'center',
        },
        {
            dataIndex: 'checked1',
            width: 550,
            title: '选择1',
            name: '选择',
            align: 'center',
        },
        {
            dataIndex: 'checked2',
            width: 550,
            title: '选择2',
            name: '选择',
            align: 'center',
        },
    ];

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

            <Table bordered pagination={false} dataSource={datasource} columns={columns} size="small" scroll={{y: true}} />
        </React.Fragment>
    );
};

export default Cpp;
