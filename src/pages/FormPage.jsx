/*
 * @Author: shimmer
 * @Date: 2022-04-28 09:46:03
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-09 17:14:20
 * @Description:
 *
 */
import React, { useRef } from "react";
import Form from "../Form/Form";
import FormItem from "../Form/FormItem";
import Input from "../Form/Input";

const FormPage = (props) => {
  const form = useRef(null);
  const submit = () => {
    /* 表单提交 */
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
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
      </Form>

      <div style={{ padding: "5px", marginLeft: "50px" }}>
        <button onClick={submit} style={{ marginRight: "15px" }}>
          提交
        </button>
        <button onClick={reset} style={{ marginRight: "15px" }}>
          重置
        </button>
        <button
          style={{ marginRight: "15px" }}
          onClick={() => {
            const data = form.current.getFieldsValue();
            console.log("data: ", data);
          }}
        >
          获取表单值
        </button>
        <button
          onClick={() => {
            form.current.setFieldValue({ username: "shimmer", password: "123456" });
          }}
        >
          设置表单值
        </button>
      </div>
    </React.Fragment>
  );
};

export default FormPage;
