/*
 * @Author: shimmer
 * @Date: 2022-04-28 09:46:03
 * @LastEditors: zhangzhen
 * @LastEditTime: 2022-11-03 19:06:57
 * @Description:
 *
 */
import React, {useRef} from 'react';
import Form from '../Form/Form';
import FormItem from '../Form/FormItem';
import Input from '../Form/Input';
import Select from '../Form/Select';

const FormPage = (props) => {
    const form = useRef(null);
    console.log(11111111);
    const submit = () => {
        /* 表单提交 */
        props.fun();
        // form.current.submitForm((formValue) => {
        //     console.log(formValue);
        // });
    };
    const reset = () => {
        /* 表单重置 */
        form.current.resetForm();
    };
    return (
        <React.Fragment>
            <Form ref={form}>
                <FormItem name="username" label="姓名">
                    <Input placeholder="请输入姓名" />
                </FormItem>
                <FormItem name="password" label="密码">
                    <Input type="password" placeholder="请输入密码" />
                </FormItem>

                <FormItem name="person" label="选择人物">
                    <Select placeholder="请选择">
                        <Select.Option value="1" key="1">
                            小A
                        </Select.Option>
                        <Select.Option value="2" key="2">
                            小B
                        </Select.Option>
                        <Select.Option value="3" key="3">
                            小C
                        </Select.Option>
                    </Select>
                </FormItem>
            </Form>

            <div style={{padding: '5px', marginLeft: '50px'}}>
                <button onClick={submit} style={{marginRight: '15px'}}>
                    提交
                </button>
                <button onClick={reset} style={{marginRight: '15px'}}>
                    重置
                </button>
                <button
                    style={{marginRight: '15px'}}
                    onClick={() => {
                        const data = form.current.getFieldsValue();
                        console.log('data: ', data);
                    }}>
                    获取表单值
                </button>
                <button
                    onClick={() => {
                        form.current.setFieldValue({username: 'shimmer', password: '123456', person: '3'});
                    }}>
                    设置表单值
                </button>
            </div>
        </React.Fragment>
    );
};

export default FormPage;
