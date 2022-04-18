import React, { useState } from "react";
import { myContext } from "./context/contextStore";
import { HOC } from "./Hoc/Hoc";
import { HocFun } from "./Hoc/HocFun";
import FormPage from "./pages/FormPage";
import ContextPage from "./pages/ContextPage";
import HOCPage from "./pages/HOCPage";
import HooksPage from "./pages/HooksPage";
import MemoPage from "./pages/MemoPage";
const ContextPageFake = HocFun(ContextPage);
const HOCPageFake = HOC(HOCPage);

const propsChange = (pre, next) => {
  //上一个props和下一个props
  console.log("next: ", next);
  console.log("pre: ", pre);
  if (pre.number !== next.number && next.number < 5) {
    return false; //渲染
  } else {
    return true; //不渲染
  }
};
const MemoPageFake = React.memo(MemoPage, propsChange);

const App = () => {
  const [contextValue, setContextValue] = useState({ theme: "blue" });
  const [number, setNumber] = useState(0);

  return (
    <React.Fragment>
      <div style={{ border: `2px solid ${contextValue.theme}`, color: contextValue.theme, padding: "10px" }}>
        <myContext.Provider value={{ contextValue, setContextValue }}>
          <FormPage />
          <hr style={{ borderColor: contextValue.theme }} />
          <ContextPageFake />
          <hr style={{ borderColor: contextValue.theme }} />
          <HOCPageFake age={18} />
          <hr style={{ borderColor: contextValue.theme }} />
          <HooksPage />
          <hr style={{ borderColor: contextValue.theme }} />
          <h2>{number}</h2>
          <button
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            改变number
          </button>
          <MemoPageFake number={number} />
        </myContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default App;