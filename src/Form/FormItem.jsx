/*
 * @Author: shimmer
 * @Date: 2022-04-28 09:46:03
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-10 09:19:16
 * @Description:
 *
 */
import React from "react";

const FormItem = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <label style={{ marginRight: "10px", fontSize: "15px" }}>{props.label}:</label>
      {React.cloneElement(props.children, { change: props.handleChange, value: props.value, name: props.name })}
    </div>
  );
};

export default FormItem;
