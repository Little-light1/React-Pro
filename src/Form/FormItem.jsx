import React from "react";

const FormItem = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <span style={{ marginRight: "10px", fontSize: "15px" }}>{props.label}:</span>
      {React.cloneElement(props.children, { change: props.handleChange, value: props.value, name: props.name })}
    </div>
  );
};

export default FormItem;
