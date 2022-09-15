/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:41:23
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-08-31 10:50:11
 * @Description:
 *
 */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Table} from 'antd';
import data10000 from './mock/data10000.json';

const cell = (props, props1, props2) => {
    console.log('props: ', props);
    console.log('props1: ', props1);

    return <td {...props}>{props.children}</td>;
};

const Dpp = (props) => {
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            dataIndex: 'deviceId',
            title: '设备ID',
            name: '设备ID',
            align: 'center',
            width: 120,
        },
        {
            dataIndex: 'deviceName',
            title: '设备名称',
            name: '设备名称',
            align: 'center',
            width: 150,
        },
        {
            dataIndex: 'deviceModel',
            title: '型号',
            name: '型号',
            align: 'center',
            width: 150,
        },
        {
            dataIndex: 'farmName',
            title: '电场名称',
            name: '电场名称',
            align: 'center',
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setDataSource(data10000);
        }, 3000);
    }, []);
    return (
        <React.Fragment>
            <Table components={{body: {cell: cell}}} dataSource={dataSource} columns={columns} scroll={{y: 500}} pagination={null} />
            <hr />
            <button
                onClick={() => {
                    navigate('/main');
                }}>
                App
            </button>
            <button
                onClick={() => {
                    navigate('/mainb');
                }}>
                Bpp
            </button>
            <button
                onClick={() => {
                    navigate('/mainc');
                }}>
                Cpp
            </button>
        </React.Fragment>
    );
};

export default Dpp;
