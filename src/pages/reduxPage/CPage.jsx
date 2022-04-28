import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateData } from "../../redux/action";

const CPage = ({ updateData, ...props }) => {
  console.log("props: ", props);
  useEffect(() => {
    updateData({ name: "大家好，我是C" });
  }, []);
  return (
    <React.Fragment>
      <h1>我是PageC</h1>
      <h1>{props.name}</h1>
    </React.Fragment>
  );
};

export default connect((state) => ({ ...state.c_data }), { updateData })(CPage);
