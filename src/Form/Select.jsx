/*
 * @Author: shimmer
 * @Date: 2022-05-10 08:58:06
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-10 09:20:44
 * @Description:
 *
 */

import Option from "./Option";
import React from "react";
const Select = ({ placeholder, children, value, name, change, onChange, disabled }) => {
  return (
    <select
      style={{ minWidth: "100px" }}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (change) {
          change(name, e.target.value);
        } else if (onChange) {
          onChange(e);
        }
      }}
    >
      {children.map((item) => {
        return React.cloneElement(item);
      })}
    </select>
  );
};
Select.Option = Option;

export default Select;
