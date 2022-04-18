import React from "react";

const MemoPage = (props) => {
  console.log("memoPage渲染了");
  return (
    <React.Fragment>
      <h1>我是MemoPage||number:{props.number}</h1>
    </React.Fragment>
  );
};

export default MemoPage;
