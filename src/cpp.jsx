import React, { useEffect, useState } from "react";
import APage from "./pages/reduxPage/APage";
import BPage from "./pages/reduxPage/BPage";
import CPage from "./pages/reduxPage/CPage";
import { connect } from "react-redux";

const Cpp = (props) => {
  return (
    <React.Fragment>
      <APage />
      <hr />
      <BPage />
      <hr />
      <CPage />
    </React.Fragment>
  );
};

export default Cpp;
