import React from "react";
import { connect } from "react-redux";

const BPage = (props) => {
  return (
    <React.Fragment>
      <h1>我是PageB</h1>
    </React.Fragment>
  );
};

export default connect()(BPage);
