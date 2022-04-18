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
          <Input />
        </FormItem>
        <FormItem name="password" label="密码">
          <Input />
        </FormItem>
      </Form>
      <div style={{ padding: "5px", marginLeft: "50px" }}>
        <button    onClick={submit} style={{ marginRight: "15px" }}>
          提交
        </button>
        <button onClick={reset}>重置</button>
      </div>
    </React.Fragment>
  );
};

export default FormPage;
