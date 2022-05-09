import React from "react";
import { changeNum } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

const BPage = (props) => {
  console.log("B渲染了");
  const num = useSelector((state) => state.num);
  const dispacth = useDispatch();
  return (
    <React.Fragment>
      <h1>我是PageB</h1>
      <h3>redux.num:{num}</h3>
      <button
        onClick={() => {
          dispacth(changeNum());
        }}
      >
        改变num
      </button>
    </React.Fragment>
  );
};

export default BPage;
