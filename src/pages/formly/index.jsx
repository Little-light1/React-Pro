/*
 * @Author: zhangzhen
 * @Date: 2022-12-16 09:31:39
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-12-19 11:34:22
 *
 */
import Generator, {defaultCommonSettings, defaultGlobalSettings, defaultSettings} from 'fr-generator';

import {Button, Table} from 'antd';
import {useEffect} from 'react';
const defaultValue = {
    type: 'object',
    properties: {
        inputName: {
            title: '简单输入框',
            type: 'string',
        },
    },
};

// const NewWidget = ({value = 0, onChange}) => {
//     return (
//         <Button
//             type="primary"
//             onClick={() => {
//                 onChange(value + 2);
//             }}>
//             {value}
//         </Button>
//     );
// };

const TableWidget = ({value, onChange}) => {
    if (!Array.isArray(value)) {
        value = [];
    }
    const columns = [
        {title: '姓名', dataIndex: 'name'},
        {title: '年龄', dataIndex: 'age'},
        {title: '身高', dataIndex: 'height'},
        {
            title: '操作',
            dataIndex: 'actions',
            render: (text, record, index) => {
                console.log('index: ', index);
                return (
                    <div>
                        <Button
                            onClick={() => {
                                console.log(value);
                                const aa = [{name: '张三', age: index + 18, height: index + 180, id: index + 1}];
                                const newValue = value.concat(aa);
                                if (onChange) {
                                    onChange(newValue);
                                }
                            }}>
                            新增
                        </Button>
                        <Button
                            onClick={() => {
                                onChange(value.splice(index, 1));
                            }}>
                            删除
                        </Button>
                    </div>
                );
            },
        },
    ];
    return <Table rowKey="id" dataSource={value || []} columns={columns} />;
};

const Formly = () => {
    console.log('defaultSettings: ', defaultSettings);
    console.log('defaultGlobalSettings: ', defaultGlobalSettings);
    console.log('defaultCommonSettings: ', defaultCommonSettings);

    useEffect(() => {
        // defaultSettings[0].widgets.push({
        //     text: '计数器',
        //     name: 'asyncSelect',
        //     schema: {
        //         title: '计数器',
        //         type: 'number',
        //         widget: 'NewWidget',
        //     },
        //     setting: {
        //         api: {title: 'api', type: 'string'},
        //     },
        // });

        defaultSettings[2].widgets.push({
            text: '表格',
            name: 'easyTable',
            schema: {
                title: '表格',
                type: 'array',
                widget: 'TableWidget',
                items: {type: 'object', properties: {}},
            },
            setting: {
                default: {
                    title: '默认值',
                    type: 'array',
                    widget: 'jsonInput',
                },
                items: {
                    type: 'object',
                    hidden: '{{true}}',
                },
                min: {
                    title: '最小长度',
                    type: 'number',
                },
                max: {
                    title: '最大长度',
                    type: 'number',
                },
                props: {
                    title: '选项',
                    type: 'object',
                    properties: {
                        foldable: {
                            title: '是否可折叠',
                            type: 'boolean',
                        },
                        hideTitle: {
                            title: '隐藏标题',
                            type: 'boolean',
                        },
                        hideDelete: {
                            title: '隐藏删除按钮',
                            type: 'string',
                        },
                        hideAdd: {
                            title: '隐藏新增/复制按钮',
                            type: 'string',
                        },
                    },
                },
            },
        });
    }, []);
    return (
        <div style={{height: '80vh'}}>
            <Generator widgets={{TableWidget}} defaultValue={defaultValue} settings={defaultSettings} />
        </div>
    );
};

export default Formly;
