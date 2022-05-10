/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-10 08:40:14
 * @Description:
 *
 */
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Form = forwardRef((props, ref) => {
  const [childList, setChildList] = useState(props.children || []);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setChildList(props.children.filter((item) => item.type.name === "FormItem"));
  }, [props.children]);

  useImperativeHandle(ref, () => {
    return { submitForm, resetForm, getFieldsValue, setFieldValue };
  });
  // 表单提交;
  const submitForm = (data) => {
    data({ ...formData });
  };
  // 获取表单数据
  const getFieldsValue = () => {
    return { ...formData };
  };
  // 表单重置
  const resetForm = () => {
    Object.keys(formData).forEach((item) => {
      formData[item] = "";
    });
    setFormData({ ...formData });
  };

  const setFieldValue = (obj) => {
    Object.keys(obj).forEach((item) => {
      formData[item] = obj[item];
    });
    setFormData({ ...formData });
  };

  const setValue = (name, val) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  return childList.map((item) => {
    return React.cloneElement(item, {
      key: item.props.name,
      handleChange: setValue,
      value: formData[item.props.name] || "",
    });
  });
});

export default Form;
