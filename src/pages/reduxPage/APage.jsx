import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/action";

const APage = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <React.Fragment>
      <h1>我是PageA</h1>
      <h3>车：{props.data.carName}</h3>
      <h3>型号：{props.data.model}</h3>
      <h3>价格：{props.data.price}</h3>
    </React.Fragment>
  );
};

export default connect((state) => ({ ...state }), { getData })(APage);
