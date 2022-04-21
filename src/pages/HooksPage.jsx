import React, { useState } from "react";

const HooksPage = (props) => {
  const [num, setNum] = useState(1);

  const [changeUseState, setChangeUseState] = useState(
    <div
      onClick={() => {
        props.changeState();
      }}
    >
      改变
    </div>
  );
  return (
    <React.Fragment>
      <h1>我是HooksPage</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>num:{num}</h2>
        <button
          onClick={() => {
            //   合并，渲染了只执行一次
            setNum((pre) => pre + 1); //pre=1
            setNum((pre) => pre + 2); //pre=3
            setNum((pre) => pre + 3); //pre=6
            //  ---------------------------
            // setNum(num + 1);
            // setNum(num + 2);
            // setNum(num + 3); //4
            props.changeState();
          }}
        >
          改变
        </button>
        {changeUseState}
      </div>
    </React.Fragment>
  );
};

export default HooksPage;
