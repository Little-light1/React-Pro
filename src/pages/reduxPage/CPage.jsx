import React from "react";
import { connect } from "react-redux";

const CPage = (props) => {
  return (
    <React.Fragment>
      <h1>我是PageC</h1>
    </React.Fragment>
  );
};

export default connect()(CPage);
