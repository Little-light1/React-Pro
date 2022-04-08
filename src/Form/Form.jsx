import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Form = forwardRef((props, ref) => {
  const [childList, setChildList] = useState(props.children || []);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setChildList(props.children.filter((item) => item.type.name === "FormItem"));
  }, [props.children]);

  useImperativeHandle(ref, () => {
    return { submitForm, resetForm };
  });
  const submitForm = (data) => {
    data({ ...formData });
    // 表单提交;
  };

  const resetForm = () => {
    // 表单重置
    Object.keys(formData).forEach((item) => {
      formData[item] = "";
    });
    setFormData({ ...formData });
  };
  const setValue = (name, val) => {
    setFormData((prv) => {
      return {
        ...prv,
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
