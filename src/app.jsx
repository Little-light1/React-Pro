/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-10 10:33:38
 * @Description:
 *
 */
import React, { useEffect, useState } from "react";
import { myContext } from "./context/contextStore";
import { HOC } from "./Hoc/Hoc";
import { HocFun } from "./Hoc/HocFun";
import FormPage from "./pages/FormPage";
import ContextPage from "./pages/ContextPage";
import HOCPage from "./pages/HOCPage";
import HooksPage from "./pages/HooksPage";
import MemoPage from "./pages/MemoPage";
import { useNavigate } from "react-router-dom";

const ContextPageFake = HocFun(ContextPage);
const HOCPageFake = HOC(HOCPage);

const propsChange = (pre, next) => {
  //上一个props和下一个props
  if (pre.number !== next.number && next.number < 5) {
    return false; //渲染
  } else {
    return true; //不渲染
  }
};
const MemoPageFake = React.memo(MemoPage, propsChange);

const App = (props) => {
  const [contextValue, setContextValue] = useState({ theme: "blue" });
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

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
          <HooksPage
            changeState={() => {
              console.log("number: ", number); //一直是0
              setNumber(number + 1); //一直是1
              // 可以改写成  setNumber(prev=>prev+1)
            }}
          />
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
          <hr style={{ borderColor: contextValue.theme }} />
          <button
            onClick={() => {
              navigate("/mainb");
            }}
          >
            Bpp
          </button>
          <button
            onClick={() => {
              navigate("/mainc");
            }}
          >
            Cpp
          </button>
        </myContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default App;
