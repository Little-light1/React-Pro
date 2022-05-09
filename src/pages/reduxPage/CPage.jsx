import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateData } from "../../redux/action";

const CPage = ({ updateData, ...props }) => {
  console.log("C渲染了");
  useEffect(() => {
    updateData({ name: "大家好，我是C" });
  }, []);
  return (
    <React.Fragment>
      <h1>我是PageC</h1>
      <h3>redux.c_data:{props.name}</h3>
      <button
        onClick={() => {
          updateData({ name: "大家好，他是C" });
        }}
      >
        改变c_data
      </button>
    </React.Fragment>
  );
};

export default connect((state) => ({ ...state.c_data }), { updateData })(CPage);
