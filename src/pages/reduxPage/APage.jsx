import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData, updateData } from "../../redux/action";

//react-redux只有接入页面的的state改变，才会触发该页面的更新
const APage = (props) => {
  console.log("A渲染了");
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <React.Fragment>
      <h1>我是PageA</h1>
      <h3>redux.data:</h3>
      <h3>车：{props.carName}</h3>
      <h3>型号：{props.model}</h3>
      <h3>价格：{props.price}</h3>
    </React.Fragment>
  );
};

export default connect((state) => ({ ...state.data }), { getData, updateData })(APage);
