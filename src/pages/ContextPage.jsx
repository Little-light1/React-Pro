import React, { useContext } from "react";
import { myContext } from "../context/contextStore";

const ContextPage = (props) => {
  const { contextValue, setContextValue } = useContext(myContext);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          if (contextValue.theme === "blue") {
            setContextValue({ theme: "pink" });
          } else {
            setContextValue({ theme: "blue" });
          }
        }}
      >
        改变主题色
      </button>
      <div style={{ height: "50px", margin: "10px ", width: "500px", backgroundColor: contextValue.theme }}></div>
    </React.Fragment>
  );
};

export default ContextPage;
