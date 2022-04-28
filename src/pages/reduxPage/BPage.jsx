import React from "react";
import { connect } from "react-redux";
import { changeNum } from "../../redux/action";

const BPage = (props) => {
  console.log("B渲染了");
  return (
    <React.Fragment>
      <h1>我是PageB</h1>
      <h1>{props.num}</h1>
      <button
        onClick={() => {
          props.changeNum();
        }}
      >
        改变num
      </button>
    </React.Fragment>
  );
};

export default connect((state) => ({ num: state.num }), { changeNum })(BPage);
