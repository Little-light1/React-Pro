import React, { useContext } from "react";
import { myContext } from "../context/contextStore";

const ContextPage = (props) => {
  const { contextValue, setContextValue } = useContext(myContext);
  return (
    <React.Fragment>
      <button
        style={{ color: contextValue.theme }}
        onClick={() => {
          if (contextValue.theme === "blue") {
            setContextValue({ theme: "pink" });
          } else {
            setContextValue({ theme: "blue" });
          }
        }}
      >
        切换主题
      </button>
      <div style={{ height: "50px", margin: "10px ", width: "500px", backgroundColor: contextValue.theme }}></div>
    </React.Fragment>
  );
};

export default ContextPage;
